import { fetchMovies } from "../rdx/FilmsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Button, Stack } from "@mui/material";
import MovieCard from "./MovieCards";
import React from "react";
import SortOption from "./SortOption";
import SortByType from "./SortByType";
import SortByGenre from "./SortByGenre";
import { addMovie } from "../rdx/WatchLaterSlice";

export default function Content() {
    const { movies, loading, error } = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    const [page, setPage] = React.useState(1);
    const [sortBy, setSortBy] = React.useState("popularity.desc");
    const [type, setType] = React.useState('movie')
    const [genre, setGenre] = React.useState('')


    React.useEffect(() => {
        dispatch(fetchMovies({page,sortBy,type,genre}));
    }, [dispatch, page,sortBy,type,genre]);

    function prev() {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    }

    function next() {
        setPage((prevPage) => prevPage + 1);
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Container sx={{ mt: 10 ,  }} >

            <Stack direction='row' spacing={2} sx={{mb:'20px',flexWrap:'wrap', display:'flex',justifyContent:'center'}}>
                <SortOption type={type} sortBy={sortBy} setSortBy={setSortBy}></SortOption>
                <SortByType type={type} setType={setType}></SortByType>
                <SortByGenre genre={genre} setGenre={setGenre}></SortByGenre>
            </Stack>

            <Grid sx={{justifyContent:'center'}} container spacing={3}  >
                {movies.map((movie) => (
                    <Grid  key={movie.id}>
                        <MovieCard movie={movie} add={() => dispatch(addMovie(movie))} />
                    </Grid>
                ))}
            </Grid>

            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 5 }}>
                <Button 
                    onClick={prev} 
                    disabled={page === 1} 
                    sx={{ background: "black", color: "white" }}
                >
                    ← Prev
                </Button>
                <Button sx={{ color: "black" }}>
                    Page {page}
                </Button>
                <Button 
                    onClick={next} 
                    sx={{ background: "black", color: "white" }}
                >
                    Next →
                </Button>
            </Stack>
        </Container>
    );
}
