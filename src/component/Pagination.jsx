import React from 'react';

export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="flex justify-center gap-4 mt-4 items-center">
            <button
                className="bg-[#e87169] hover:bg-[#e55c53] text-white px-4 py-2 rounded-lg"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <div className="text-center">
                Page {currentPage} of {totalPages}
            </div>
            <button
                className="bg-[#e87169] hover:bg-[#e55c53] text-white px-4 py-2 rounded-lg"
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
            >
                Next
            </button>
        </div>
    );
}
