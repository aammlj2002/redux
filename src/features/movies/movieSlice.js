import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async () => {
        const res = await axios.get(
            `http://www.omdbapi.com/?apikey=dbfc6703&s=Harry`
        );
        return res.data;
    }
);

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: {},
    },
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: (state) => {
            return { ...state, movies: { Response: "Pending" } };
        },
        [fetchAsyncMovies.fulfilled]: (state, action) => {
            return { ...state, movies: action.payload };
        },
        [fetchAsyncMovies.rejected]: (state) => {
            return { ...state, movies: { Response: "Rejected" } };
        },
    },
});
export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
