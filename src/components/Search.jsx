import { Container, Grid, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMovies } from "../rdx/SearchSlice";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCards";
import { addMovie } from "../rdx/WatchLaterSlice";


export default function Search() {
    const {movies, loading, error, totalPages } = useSelector((state) => state.search);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (query) {
            setPage(1);
            dispatch(fetchSearchMovies({ query, page: 1}));
        }
    }, [query, dispatch]);
    
    useEffect(() => {
        if (query) {
            dispatch(fetchSearchMovies({ query, page}));
        }
    }, [page, query, dispatch]);
    

    return (
        <Container sx={{ marginTop: "90px", justifyContent: 'center' }}>

            {loading && <p>⏳ Loading...</p>}
            {error && <p>❌ Error: {error}</p>}

            <Grid container spacing={3}>
                {movies.map((movie) => (
                    <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                        <MovieCard movie={movie}  add={() => dispatch(addMovie(movie))}/>
                    </Grid>
                ))}
            </Grid>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <Button
                    disabled={page <= 1}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    sx={{ marginRight: "10px", backgroundColor: "black", color: "white" }}
                >
                    ← Prev
                </Button>
                <Button sx={{ color: "black" }}>
                    Page {page}
                </Button>
                <Button
                    disabled={page >= totalPages}
                    onClick={() => setPage((prev) => prev + 1)}
                    sx={{ backgroundColor: "black", color: "white" }}
                >
                    Next →
                </Button>
            </div>

        </Container>
    );
}
