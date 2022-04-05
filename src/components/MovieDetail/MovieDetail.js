import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetail } from "../../features/movies/movieSlice";
import DetailList from "../DetailList";

function MovieDetail() {
    const movie = useSelector((state) => state.movies.detail);
    const dispatch = useDispatch();
    const { imdbID } = useParams();
    useEffect(() => {
        dispatch(fetchDetail(imdbID));
    }, [dispatch, imdbID]);
    return (
        <>
            <div className="bg-gray-900 p-9">
                <div className="flex flex-row gap-9">
                    <div className="w-8/12">
                        <div className="mb-5">
                            <h2 className="mb-5 text-3xl text-white">
                                {movie.Title}
                            </h2>
                            <p className="text-blue-400 ">
                                Rating:
                                <span className="ml-2 mr-4">
                                    {movie.imdbRating}
                                </span>
                                Votes:
                                <span className="ml-2 mr-4">
                                    {movie.imdbVotes}
                                </span>
                                Runtime:
                                <span className="ml-2 mr-4">
                                    {movie.Runtime}
                                </span>
                                Year:
                                <span className="ml-2 mr-4">{movie.Year}</span>
                            </p>
                        </div>
                        <p className="mb-5 text-white">{movie.Plot}</p>
                        <DetailList label={"Actors"} detail={movie.Actors} />
                        <DetailList
                            label={"Director"}
                            detail={movie.Director}
                        />
                        <DetailList label={"Genre"} detail={movie.Genre} />
                        <DetailList
                            label={"Language"}
                            detail={movie.Language}
                        />
                        <DetailList label={"Country"} detail={movie.Country} />
                        <DetailList label={"Awards"} detail={movie.Awards} />
                    </div>
                    <div className="w-4/12">
                        <img src={movie.Poster} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieDetail;
