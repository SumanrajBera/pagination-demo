import React, { useEffect, useRef, useState } from 'react'
import DataTable from './DataTable';

const CursorBasedSection = ({data = []}) => {
    const [items, setItems] = useState([]);
    const [cursor, setCursor] = useState(0);
    const limit = 10;
    const loaderRef = useRef(null);

    useEffect(() => {
        // Initial load
        setItems(data.slice(0, limit));
        setCursor(limit);
    }, []);

    const loadMore = () => {
        if (cursor >= data.length) return;

        // Simulate network delay for realistic infinite scroll effect
        setTimeout(() => {
            setCursor(prev => {
                const nextCursor = prev + limit;
                setItems(data.slice(0, nextCursor));
                return nextCursor;
            });
        }, 500);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && cursor > 0 && cursor < data.length) {
                loadMore();
            }
        }, { threshold: 1.0 });

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [cursor]);

    return (
        <section className="section-card">
            <h2 className="section-title">Departmental Overview <span className="subtitle">(Infinite Scroll)</span></h2>
            <DataTable items={items} />

            {cursor < data.length && (
                <div ref={loaderRef} className="pagination-controls center" style={{ borderTop: 'none', padding: '24px 0', color: 'var(--on-surface-variant)' }}>
                    <div className="loading-spinner">Loading more...</div>
                </div>
            )}
            {cursor >= data.length && (
                <div className="pagination-controls center" style={{ borderTop: 'none', padding: '24px 0', color: 'var(--on-surface-variant)' }}>
                    End of results
                </div>
            )}
        </section>
    );
};

export default CursorBasedSection