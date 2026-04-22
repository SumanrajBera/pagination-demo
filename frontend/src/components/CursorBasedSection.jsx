import React, { useCallback, useEffect, useRef } from 'react'
import DataTable from './DataTable';
import { useSelector } from 'react-redux';
import { useFetch } from '../hook/useFetch.js';

const CursorBasedSection = () => {
    const records = useSelector(state => state.fetch.records)
    const count = useSelector(state => state.fetch.count)
    const total = useSelector(state => state.fetch.total)
    const isLoading = useSelector(state => state.fetch.isLoading)
    const { fetchCount, fetchRecords } = useFetch()
    const observerRef = useRef(null)
    const loadMoreRef = useRef(null)

    const loadMore = () => {
        if (isLoading || count >= total) return
        fetchRecords()
    }

    useEffect(() => {
        loadMoreRef.current = loadMore
    })

    const setLoaderRef = useCallback((node) => {
        // cleanup previous observer
        if (observerRef.current) {
            observerRef.current.disconnect()
            observerRef.current = null
        }

        if (!node) return

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMoreRef.current()
            }
        }, { threshold: 0 })

        observer.observe(node)
        observerRef.current = observer  // store reference for cleanup
    }, [count])

    useEffect(() => {
        fetchCount()
        fetchRecords()
    }, [])
    return (
        <section className="section-card">
            <h2 className="section-title">Departmental Overview <span className="subtitle">(Infinite Scroll)</span></h2>
            <DataTable items={records} />

            <div
                ref={count < total ? setLoaderRef : null}
                className="pagination-controls center"
                style={{ borderTop: 'none', padding: '24px 0', color: 'var(--on-surface-variant)' }}
            >
                <div className="loading-spinner">
                    {count < total ? 'Loading more...' : 'End of results.'}
                </div>
            </div>

        </section>
    );
};

export default CursorBasedSection