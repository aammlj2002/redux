import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const res = await axios.get(
        `http://www.omdbapi.com/?apikey=dbfc6703&s=Harry`
    );
    return res.data;
});
export const fetchSeries = createAsyncThunk("movies/fetchSeries", async () => {
    const res = await axios.get(
        `http://www.omdbapi.com/?apikey=dbfc6703&s=Money&type=series`
    );
    return res.data;
});

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: {},
        series: {},
    },
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
    extraReducers: {
        [fetchMovies.pending]: (state) => {
            return { ...state, movies: { Response: "Pending" } };
        },
        [fetchMovies.fulfilled]: (state, action) => {
            return { ...state, movies: action.payload };
        },
        [fetchMovies.rejected]: (state) => {
            return { ...state, movies: { Response: "Rejected" } };
        },
        [fetchSeries.pending]: (state) => {
            return { ...state, series: { Response: "Pending" } };
        },
        [fetchSeries.fulfilled]: (state, action) => {
            return { ...state, series: action.payload };
        },
        [fetchSeries.rejected]: (state) => {
            return { ...state, series: { Response: "Rejected" } };
        },
    },
});
export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
