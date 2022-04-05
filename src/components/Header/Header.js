import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    fetchSearchMovie,
    fetchSearchSeries,
} from "../../features/movies/movieSlice";

function Header() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        if (search) {
            dispatch(fetchSearchMovie(search));
            dispatch(fetchSearchSeries(search));
        }
    };
    return (
        <>
            <div>
                <nav className="bg-gray-800 shadow-md">
                    <div className="px-8 mx-auto max-w-7xl">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex flex-row justify-start">
                                    <a className="flex-shrink-0" href="/">
                                        <img
                                            className="w-8 h-8"
                                            src="./images/redux.png"
                                            alt="redux"
                                        />
                                    </a>
                                    {/* navigation */}
                                    <div className="block">
                                        <div className="flex items-baseline ml-10 space-x-4">
                                            <a
                                                className="px-3 py-2 text-sm font-medium text-gray-300 transition-all rounded-md hover:text-white"
                                                href="/"
                                            >
                                                Home
                                            </a>
                                            <a
                                                className="px-3 py-2 text-sm font-medium text-gray-300 transition-all rounded-md hover:text-white"
                                                href="/"
                                            >
                                                About
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* search box */}
                            <div className="relative flex items-center w-full h-full lg:w-64 group">
                                <div className="absolute z-50 items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                    <svg
                                        fill="none"
                                        className="relative w-5 h-5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <svg
                                    className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                                </svg>
                                <form onSubmit={handleSearch}>
                                    <input
                                        type="text"
                                        className="block  w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90  bg-gray-600 text-gray-400 aa-input"
                                        placeholder="Search"
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;
