import React from "react";

function MovieCard({ movie }) {
    return (
        <>
            <div className=" bg-gray-800">
                <img className="w-full" src={movie.Poster} />
                <div className="px-5">
                    <h3 className="text-xl text-white mt-5 mb-3">
                        {movie.Title}
                    </h3>
                    <p className="text-white text-sm mb-3">{movie.Year}</p>
                </div>
            </div>
        </>
    );
}

export default MovieCard;
