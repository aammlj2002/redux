import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";

function MovieListing() {
    const movies = useSelector((state) => state.movies.movies);
    const series = useSelector((state) => state.movies.series);
    return (
        <>
            <div className="p-9">
                <div className="mb-12">
                    <h2 className="mb-5 text-2xl text-white">Movies</h2>
                    <div className="grid grid-cols-5 gap-3">
                        {movies.Response === "True" ? (
                            movies.Search.map((movie) => (
                                <MovieCard key={movie.imdbID} movie={movie} />
                            ))
                        ) : movies.Response === "False" ? (
                            <div>No Result Found</div>
                        ) : movies.Response === "Pending" ? (
                            <div className="text-white">loading...</div>
                        ) : movies.Response === "Rejected" ? (
                            <div className="text-white">
                                Something went wrong please try again
                            </div>
                        ) : (
                            <div className="text-white">
                                Something went wrong please try again
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <h2 className="mb-5 text-2xl text-white">Series</h2>
                    <div className="grid grid-cols-5 gap-3">
                        {series.Response === "True" ? (
                            series.Search.map((movie) => (
                                <MovieCard key={movie.imdbID} movie={movie} />
                            ))
                        ) : series.Response === "False" ? (
                            <div>No Result Found</div>
                        ) : series.Response === "Pending" ? (
                            <div className="text-white">loading...</div>
                        ) : series.Response === "Rejected" ? (
                            <div className="text-white">
                                Something went wrong please try again
                            </div>
                        ) : (
                            <div className="text-white">
                                Something went wrong please try again
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieListing;
