import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = '04c35731a5ee918f014970082a0088b1';
const BASE_URL = "https://api.themoviedb.org/3/";

export const fetchSearchMovies = createAsyncThunk(
    "search/fetchSearchMovies",
    async ({ query, page = 1,}, { rejectWithValue }) => {
        try {
            const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`❌ HTTP Error! Status: ${response.status}`);
            }
            const data = await response.json();
            return { movies: data.results, totalPages: data.total_pages };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const searchSlice = createSlice({
    name: "search",
    initialState: {
        movies: [],
        loading: false,
        error: null,
        totalPages: 1,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.movies = []; 
            })
            .addCase(fetchSearchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload.movies || [];  
                state.totalPages = action.payload.totalPages || 1;  
            })
            .addCase(fetchSearchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.movies = [];
            });
    },
});


export default searchSlice.reducer;
