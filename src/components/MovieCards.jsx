import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Collapse } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { useTheme } from "@emotion/react";

export default function MovieCard({ movie,add}) {
    const [overviewState, setOverviewState] = React.useState(false)
    const dispatch = useDispatch()
    const theme = useTheme()

    return (
        <Card sx={{ width: 250, height: 'auto', borderRadius: 3, boxShadow: 3, bgcolor: theme.palette.secondary.main , color:  theme.palette.secondary1.main }}>
            <CardMedia
                component="img"
                height="300"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                sx={{ objectFit: "contain", bgcolor: "#1e1e1e", mt: '15px' , bgcolor: theme.palette.secondary.main }}
            />
            <CardContent>
                <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{
                        fontSize: "1rem",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                    }}
                >
                    {movie.title}
                </Typography>
                <Typography variant="body2" >
                    ⭐ {movie.vote_average.toFixed(1)} / 10
                </Typography>
            </CardContent>
            <CardActions>
                <Button sx={{color:  theme.palette.lightBlue.main}}  size="small"  >
                    Watch
                </Button>
                <Button sx={{color:  theme.palette.lightBlue.main}}  onClick={() => dispatch(add(movie))} size="small" >
                    Add to Watch List
                </Button>
                <Button sx={{color:  theme.palette.lightBlue.main}} size="small"  onClick={() => setOverviewState((prev) => !prev)}>
                    About
                </Button>
            </CardActions>
            <Collapse in={overviewState}>
                <CardContent>
                    <Typography variant="body2">{movie.overview}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
