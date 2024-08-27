import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MoviesTable from './MoviesTable';
import Pagination from './Pagination';

const API_KEY = 'da128f0f40bdeb2660ba6801fe504117';
const MOVIES_PER_PAGE = 20; // API returns 20 results per page

export default function SearchMovie() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [totalPages, setTotalPages] = useState(0);

    const fetchMovies = async (page) => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setMovies(prevMovies => page === 1 ? data.results : [...prevMovies, ...data.results]);
            setTotalResults(data.total_results);
            setTotalPages(Math.ceil(data.total_results / MOVIES_PER_PAGE));
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    useEffect(() => {
        if (query) {
            fetchMovies(1);
        }
    }, [query]);

    useEffect(() => {
        if (query && currentPage <= totalPages) {
            fetchMovies(currentPage);
        }
    }, [currentPage]);

    const sortMovies = (key) => {
        const direction = sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
        const sortedMovies = [...movies].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
            return 0;
        });
        setMovies(sortedMovies);
        setSortConfig({ key, direction });
    };

    return (
        <div className='flex flex-col w-full h-full py-6'>
            <SearchBar query={query} setQuery={setQuery} fetchMovies={fetchMovies} setCurrentPage={setCurrentPage} />
            {totalResults > 0 && (
                <div className="mt-4 text-center font-semibold">Total Results: {totalResults}</div>
            )}
            <MoviesTable movies={movies} currentPage={currentPage} sortMovies={sortMovies} sortConfig={sortConfig} />
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>
    );
}
