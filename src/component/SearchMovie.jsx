import React, { useState } from 'react';
import MovieCard from './MovieCard';

export default function SearchMovie() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const SearchMovies = async () => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=da128f0f40bdeb2660ba6801fe504117&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='flex flex-col w-full h-full py-6'>
            <div className="w-full flex flex-row text-black items-center gap-2 sm:gap-3 text-[12px] sm:text-[16px] md:text-[20px] justify-center">
                <h2 className="font-bold">Movie Name:</h2>
                <input
                    className="w-1/3 sm:w-1/2 rounded-full px-2 md:px-4 py-1 outline-none border-[2px] border-black font-semibold"
                    type="text"
                    name="query"
                    placeholder="search a movie"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <div className="flex flex-col items-center text-center rounded-full bg-[#e87169] hover:bg-[#e55c53] px-4 py-1 cursor-pointer font-semibold" onClick={() => SearchMovies()}>Search</div>
            </div>
            <div className="card-list">
                {movies
                    .filter((movie) => movie.poster_path)
                    .map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
            </div>
        </div>
    );
}
