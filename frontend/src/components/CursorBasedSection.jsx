import React, { useEffect, useRef, useState } from 'react'
import DataTable from './DataTable';

const CursorBasedSection = ({ data = [] }) => {
    const [items, setItems] = useState([]);
    const [cursor, setCursor] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 10;
    const loaderRef = useRef(null)
    const cursorRef = useRef(0)
    const loadingRef = useRef(false)

    const loadMore = () => {
        if (cursorRef.current >= data.length || loadingRef.current) return

        loadingRef.current = true
        setLoading(true)
        setTimeout(() => {
            const newData = data.slice(cursorRef.current, cursorRef.current + limit)
            const newCursor = cursorRef.current + limit

            setItems(prev => [...prev, ...newData])
            cursorRef.current = newCursor
            setCursor(newCursor)
            loadingRef.current = false;
            setLoading(false)
        }, 800)
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMore()
            }
        }, { threshold: 0.5 })

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => observer.disconnect();
    }, [cursor])

    useEffect(() => {
        setItems(data.slice(0, limit))
        setCursor(limit)
    }, [])
    return (
        <section className="section-card">
            <h2 className="section-title">Departmental Overview <span className="subtitle">(Infinite Scroll)</span></h2>
            <DataTable items={items} />

            {cursor < data.length && (
                <div ref={loaderRef} className="pagination-controls center" style={{ borderTop: 'none', padding: '24px 0', color: 'var(--on-surface-variant)' }}>
                    <div className="loading-spinner"> {loading ? "Loading more..." : ""}</div>
                </div>
            )}

            {cursor >= data.length && (
                <div className="pagination-controls center" style={{ borderTop: 'none', padding: '24px 0', color: 'var(--on-surface-variant)' }}>
                    <div className="loading-spinner">End of results.</div>
                </div>
            )}

        </section>
    );
};

export default CursorBasedSection