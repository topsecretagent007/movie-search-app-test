import React from 'react';

export default function SearchBar({ query, setQuery, fetchMovies, setCurrentPage }) {
    const handleSearch = () => {
        setCurrentPage(1);
        fetchMovies(1);
    };

    return (
        <div className="w-full flex flex-row text-black items-center gap-2 sm:gap-3 text-[12px] sm:text-[16px] md:text-[20px] justify-center">
            <h2 className="font-bold">Movie Name:</h2>
            <input
                className="w-1/3 sm:w-1/2 rounded-full px-2 md:px-4 py-1 outline-none border-[2px] border-black font-semibold"
                type="text"
                name="query"
                placeholder="Search a movie"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                className="flex flex-col items-center text-center rounded-full bg-[#e87169] hover:bg-[#e55c53] px-4 py-1 cursor-pointer font-semibold"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
}
