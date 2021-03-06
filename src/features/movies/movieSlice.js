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
export const fetchDetail = createAsyncThunk(
    "movies/fetchDetail",
    async (id) => {
        const res = await axios.get(
            `http://www.omdbapi.com/?apikey=dbfc6703&i=${id}`
        );
        return res.data;
    }
);
export const fetchSearchMovie = createAsyncThunk(
    "movies/fetchSearchMovie",
    async (search) => {
        const res = await axios.get(
            `http://www.omdbapi.com/?apikey=dbfc6703&s=${search}&type=movie`
        );
        return res.data;
    }
);
export const fetchSearchSeries = createAsyncThunk(
    "movies/fetchSearchSeries",
    async (search) => {
        const res = await axios.get(
            `http://www.omdbapi.com/?apikey=dbfc6703&s=${search}&type=series`
        );
        return res.data;
    }
);

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: {},
        series: {},
        detail: {},
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
        [fetchDetail.pending]: (state) => {
            return { ...state, detail: { Response: "Pending" } };
        },
        [fetchDetail.fulfilled]: (state, action) => {
            return { ...state, detail: action.payload };
        },
        [fetchDetail.rejected]: (state) => {
            return { ...state, detail: { Response: "Rejected" } };
        },
        [fetchSearchMovie.pending]: (state) => {
            return { ...state, movies: { Response: "Pending" } };
        },
        [fetchSearchMovie.fulfilled]: (state, action) => {
            return { ...state, movies: action.payload };
        },
        [fetchSearchMovie.rejected]: (state) => {
            return { ...state, movies: { Response: "Rejected" } };
        },
        [fetchSearchSeries.pending]: (state) => {
            return { ...state, series: { Response: "Pending" } };
        },
        [fetchSearchSeries.fulfilled]: (state, action) => {
            return { ...state, series: action.payload };
        },
        [fetchSearchSeries.rejected]: (state) => {
            return { ...state, series: { Response: "Rejected" } };
        },
    },
});
export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
