import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";

function MovieListing() {
    const movies = useSelector(getAllMovies);
    console.log(movies);
    return (
        <>
            <div className="p-9">
                <h2>Movies</h2>
                <div className="grid grid-cols-6 border border-red-900">
                    <div className="border border-green-400">1</div>
                    <div className="border border-green-400">2</div>
                    <div className="border border-green-400">3</div>
                    <div className="border border-green-400">4</div>
                    <div className="border border-green-400">5</div>
                    <div className="border border-green-400">6</div>
                    <div className="border border-green-400">7</div>
                    <div className="border border-green-400">8</div>
                    <div className="border border-green-400">9</div>
                </div>
            </div>
        </>
    );
}

export default MovieListing;
