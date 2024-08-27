import React from 'react';

export default function MoviesTable({ movies, currentPage, sortMovies, sortConfig }) {
    const indexOfLastMovie = currentPage * 20;
    const indexOfFirstMovie = indexOfLastMovie - 20;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    return (
        <div className="overflow-x-auto px-2">
            <table className="w-full mt-6 border-collapse text-[8px] 3xs:text-[12px] 2xs:text-[16px]">
                <thead>
                    <tr className="bg-gray-300 border-b">
                        <th className="p-2 border max-w-[50px]">#</th>
                        <th className="p-2 border max-w-[100px]">Picture</th>
                        <th className="p-2 border max-w-[200px]">Title</th>
                        <th
                            className="p-2 border max-w-[150px] cursor-pointer text-center"
                            onClick={() => sortMovies('release_date')}
                        >
                            Release Date
                            <span className="ml-2 text-gray-600">
                                {sortConfig.key === 'release_date' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : '▲▼'}
                            </span>
                        </th>
                        <th
                            className="p-2 border max-w-[100px] cursor-pointer text-center"
                            onClick={() => sortMovies('vote_average')}
                        >
                            Rating
                            <span className="ml-2 text-gray-600">
                                {sortConfig.key === 'vote_average' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : '▲▼'}
                            </span>
                        </th>
                        <th className="p-2 border max-w-md2 hidden md2:table-cell">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {currentMovies.map((movie, index) => (
                        <tr key={movie.id} className="border-b">
                            <td className="p-2 border text-center">{indexOfFirstMovie + index + 1}</td>
                            <td className="p-2 border">
                                <img
                                    className="w-full h-auto max-w-[100px] rounded"
                                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                                    alt={`${movie.title} poster`}
                                />
                            </td>
                            <td className="p-2 border text-center">{movie.title}</td>
                            <td className="p-2 border text-center">{movie.release_date}</td>
                            <td className="p-2 border text-center">{movie.vote_average}</td>
                            <td className="p-2 border max-w-md2 text-ellipsis overflow-hidden hidden md2:table-cell">
                                {movie.overview}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
