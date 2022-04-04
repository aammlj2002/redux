import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetail } from "../../features/movies/movieSlice";

function MovieDetail() {
    const movie = useSelector((state) => state.movies.detail);
    console.log(movie);
    const dispatch = useDispatch();
    const { imdbID } = useParams();
    useEffect(() => {
        dispatch(fetchDetail(imdbID));
    }, [dispatch, imdbID]);
    return <div>MovieDetail</div>;
}

export default MovieDetail;
