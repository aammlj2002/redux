import React from "react";

function MovieCard({ movie }) {
    return (
        <>
            <div className="bg-gray-800">
                <img className="w-full" src={movie.Poster} />
                <div className="px-5">
                    <h3 className="mt-5 mb-3 text-xl text-white">
                        {movie.Title}
                    </h3>
                    <p className="mb-3 text-sm text-white">{movie.Year}</p>
                </div>
            </div>
        </>
    );
}

export default MovieCard;
