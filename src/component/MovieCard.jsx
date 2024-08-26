import React from 'react';

export default function CardComponent({ movie }) {
    return (
        <div className="w-full h-full flex flex-col sm:flex-row my-3 py-3 px-5 bg-white border-[1px] border-black/20 rounded-xl shadow-slate-400 shadow-md" key={movie.id}>
            <img
                className="rounded-lg max-w-[300px] mx-auto"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
            />
            <div className="w-full mx-auto flex flex-col gap-y-1">
                <div className="text-[20px] sm:font-[28px] font-semibold">{movie.title}</div>
                <div className='flex flex-col 2xs:flex-row w-full items-center gap-1 2xs:gap-4 justify-center font-semibold'>
                    <div className='text-[12px] sm:font-[20px]'>Release Date: {movie.release_date}</div>
                    <div className='text-[12px] sm:font-[20px]'>Rating: {movie.vote_average}</div>
                </div>
                <div className="text-[16px] sm:font-[24px]">{movie.overview}</div>
            </div>
        </div>
    );
}
