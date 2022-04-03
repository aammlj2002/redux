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
                    {movies.Response === "True" ? (
                        movies.Search.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))
                    ) : movies.Response === "False" ? (
                        <div className="text-white">not found</div>
                    ) : (
                        <div className="text-white">loading</div>
                    )}
                </div>
            </div>
        </>
    );
}

export default MovieListing;
