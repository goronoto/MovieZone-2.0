import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = '04c35731a5ee918f014970082a0088b1';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async ({ page = 1, sortBy = "popularity.desc", type = 'movie', genre = "" }, { rejectWithValue }) => {
        try {
            const genreParam = genre ? `&with_genres=${genre}` : "";
            
            const validSortOptions = {
                movie: ["popularity.desc", "release_date.desc", "revenue.desc", "vote_average.desc"],
                tv: ["popularity.desc", "first_air_date.desc", "vote_average.desc"]
            };

            const isValidSort = validSortOptions[type]?.includes(sortBy) ? sortBy : "popularity.desc";
            
            const url = `${BASE_URL}discover/${type}?api_key=${API_KEY}&page=${page}&sort_by=${isValidSort}${genreParam}`;

            console.log("Fetching URL:", url);

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`❌ HTTP Error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data.results;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const initialState = {
    movies: [],
    loading: false,
    error: null
};

const MoviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch movies';
            });
    }
});

export default MoviesSlice.reducer;