import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

function Home() {
    const dispatch = useDispatch();
    const apikey = "dbfc6703";
    const searchKey = "Harry";
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const res = await axios.get(
                    `http://www.omdbapi.com/?apikey=${apikey}&s=${searchKey}"`
                );
                console.log(res);
                dispatch(addMovies(res.data));
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovie();
    }, []);
    return (
        <>
            <div className="bg-gray-900">
                <MovieListing />
            </div>
        </>
    );
}

export default Home;
