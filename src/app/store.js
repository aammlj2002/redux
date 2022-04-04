import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../features/movies/movieSlice";
export const store = configureStore({
    reducer: {
        movies: MovieReducer,
    },
});
