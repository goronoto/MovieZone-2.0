import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "watchLaterMovies";

const getInitialState = () => {
    const savedMovies = localStorage.getItem(STORAGE_KEY);
    return savedMovies ? JSON.parse(savedMovies) : [];
};

const initialState = {
    movies: getInitialState()
};

const WatchLaterSlice = createSlice({
    name: "watchLater",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            const exists = state.movies.some(movie => movie.id === action.payload.id);
            if (!exists) {
                state.movies.push(action.payload);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(state.movies));
            }
        },
        deleteMovie: (state, action) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.movies));
        }
    }
});

export const { addMovie, deleteMovie } = WatchLaterSlice.actions;

export default WatchLaterSlice.reducer;
