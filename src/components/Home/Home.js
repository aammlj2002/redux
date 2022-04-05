import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, fetchSeries } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

function Home() {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies.movies);
    const series = useSelector((state) => state.movies.series);
    useEffect(() => {
        if (!Object.keys(movies).length && !Object.keys(series).length) {
            dispatch(fetchMovies());
            dispatch(fetchSeries());
        }
    }, [dispatch]);
    return (
        <>
            <div className="bg-gray-900">
                <MovieListing />
            </div>
        </>
    );
}

export default Home;
