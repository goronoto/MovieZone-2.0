import { deleteMovie } from "../rdx/WatchLaterSlice";
import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Container, Typography, Divider, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@emotion/react";

export default function WatchLater() {
    const movies = useSelector(state => state.watchLater.movies);
    const dispatch = useDispatch();
    const theme = useTheme()

    return (
        <Container sx={{ mt: 10, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", mb: 3 }}>
                Watch Later 🎬🎬🎬
            </Typography>

            {movies.length === 0 ? (
                <Typography variant="h6" color="gray">
                    No movies added yet. Start adding some! 🍿
                </Typography>
            ) : (
                <List sx={{ width: '100%', maxWidth: 600, bgcolor: theme.palette.secondary.main , color:  theme.palette.secondary1.main, mx: "auto", borderRadius: 2, boxShadow: 3 }}>
                    {movies.map((movie, index) => (
                        <div key={movie.id}>
                            <ListItem alignItems="flex-start" sx={{ p: 2 }}>
                                <ListItemAvatar>
                                    <Avatar variant="rounded" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{
                                        ml: 2,
                                        '& .MuiListItemText-secondary': {
                                            color: theme.palette.secondary1.main 
                                        }
                                    }}
                                    primary={movie.title}
                                    secondary={movie.overview ? movie.overview.slice(0, 80) + "..." : "No description available"}
                                />
                                <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteMovie(movie.id))}>
                                    <DeleteIcon color="error" />
                                </IconButton>
                            </ListItem>
                            {index !== movies.length - 1 && <Divider variant="inset" component="li" />}
                        </div>
                    ))}
                </List>
            )}
        </Container>
    );
}
