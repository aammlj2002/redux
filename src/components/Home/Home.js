import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies, fetchSeries } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies());
        dispatch(fetchSeries());
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
