import React from 'react';

const PaginationDots = ({ currentPage }) => {
    return (
        <div className="pagination">
            {[1, 2, 3, 4].map((dot, index) => (
                <span
                    key={index}
                    className={`dot ${currentPage === dot ? 'active' : ''}`}
                ></span>
            ))}
        </div>
    );
};

export default PaginationDots;
