import React from 'react';
import SearchMovie from '../component/SearchMovie';


export default function Home() {

    return (
        <div className="container py-14 mx-auto max-w-[1120px]">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">Movie Search App Test</h1>
            <SearchMovie />
        </div>
    );
}
