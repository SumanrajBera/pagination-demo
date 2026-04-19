import React, { useState } from 'react'
import DataTable from './DataTable';

const PageBasedSection = ({data = []}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <section className="section-card">
            <h2 className="section-title">Staff Directory <span className="subtitle">(Page-based)</span></h2>
            <DataTable items={paginatedData} />

            <div className="pagination-controls">
                <button
                    className="btn-secondary"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => p - 1)}
                >
                    Previous
                </button>
                <div className="page-numbers">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let startPage = Math.max(1, currentPage - 2);
                        let endPage = Math.min(totalPages, startPage + 4);
                        if (endPage - startPage < 4) {
                            startPage = Math.max(1, endPage - 4);
                        }

                        if (startPage + i > endPage) return null;
                        let pageNum = startPage + i;

                        return (
                            <button
                                key={pageNum}
                                className={`btn-page ${currentPage === pageNum ? 'active' : ''}`}
                                onClick={() => setCurrentPage(pageNum)}
                            >
                                {pageNum}
                            </button>
                        );
                    })}
                </div>
                <button
                    className="btn-secondary"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => p + 1)}
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default PageBasedSection