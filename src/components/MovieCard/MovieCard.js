import React from "react";

function MovieCard() {
    return (
        <>
            <div className=" bg-gray-800">
                <img className="w-full" src="/images/poster.jpg" />
                <div className="px-5">
                    <h3 className="text-xl text-white mt-5 mb-3">
                        Movie title
                    </h3>
                    <p className="text-white text-sm mb-3">2022</p>
                </div>
            </div>
        </>
    );
}

export default MovieCard;
