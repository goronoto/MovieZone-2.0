import { AppBar, InputBase, Typography, Toolbar, Avatar, Button, Menu, MenuItem } from "@mui/material"; 
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { ToggleTheme } from "../rdx/SwitchSlice";

export default function Navbar() {
    const [query, setQuery] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    
    const dispatch = useDispatch()
    const theme = useTheme();

    function handleSearch() {
        if (query.trim() !== "") {
            navigate(`/search?q=${query}`);
        }
    }

    function handleMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuClose() {
        setAnchorEl(null);
    }

    const isDarkMode = useSelector((state) => state.switch.theme)

    return (
            <AppBar
                sx={{
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.secondary.main,
                    position: "fixed"
                }}
            >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h3" sx={{ display: { xs: "none", sm: "block",color: theme.palette.secondary1.main  }, textDecoration: 'none'  }}>
                    <Link className="custom-link" to="/" >MovieZone</Link>
                </Typography>
                <Toolbar sx={{ width: { xs: "70%", sm: "40%" } }}>
                    <InputBase
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        sx={{
                            width: "90%",
                            padding: "5px",
                            marginRight: "10px",
                            background: "white",
                            borderRadius: "11px",
                        }}
                        placeholder="Search..."
                    />
                    <Button
                        onClick={handleSearch}
                        sx={{
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: "10px",
                            p: '5px'
                        }}
                    >
                        Search
                    </Button>
                </Toolbar>
                <ThemeSwitch darkMode={isDarkMode}  ToggleTheme={() => dispatch(ToggleTheme())}/>
                <Avatar onClick={handleMenuOpen} sx={{ cursor: "pointer" }} /> 
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <Link className="custom-link" to='/'>
                            Home
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <Link className="custom-link" to='/watchLater'>
                            WatchLater
                        </Link>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

