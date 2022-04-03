import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";

function MovieListing() {
    const movies = useSelector(getAllMovies);
    console.log(movies);
    return (
        <>
            <div className="p-9">
                <h2 className="text-2xl text-white mb-5">Movies</h2>
                <div className="grid grid-cols-5 gap-3">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
        </>
    );
}

export default MovieListing;
