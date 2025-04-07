import React, { useState, useEffect } from 'react';
import { AppBar, InputBase, Typography, Toolbar, Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitch from "./ThemeSwitch";
import DialogTable from "./DialogTable";
import BurgerMenu from "./BurgerMenu";
import { ToggleTheme } from "../rdx/SwitchSlice"; 

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const theme = useTheme();
    const isDarkMode = useSelector((state) => state.switch.theme);

    // Initialize user state from localStorage on component mount
    const [currentUser, setCurrentUser] = useState(() => {
        try {
            const savedUser = localStorage.getItem('currentUser');
            return savedUser ? JSON.parse(savedUser) : null;
        } catch (error) {
            console.error("Error reading user from localStorage:", error);
            return null; // Start with null if parsing fails
        }
    });

    // --- Event Handlers ---

    const openLoginDialogHandler = () => {
        setIsLoginDialogOpen(true);
        menuCloseHandler(); // Close the menu when opening the dialog
    };

    const closeLoginDialogHandler = () => {
        setIsLoginDialogOpen(false);
    };

    const loginSuccessHandler = (userData) => {
        console.log("Login/Register action successful!", userData);
        if (userData) {
            try {
                // Persist user data in localStorage
                localStorage.setItem('currentUser', JSON.stringify(userData));
                // Update React state to trigger UI changes
                setCurrentUser(userData);
            } catch (error) {
                console.error("Error saving user to localStorage:", error);
            }
        } else {
            // Handle cases where user data might not be returned (e.g., registration without auto-login)
            console.warn("loginSuccessHandler called without userData");
        }
        closeLoginDialogHandler(); // Close the dialog after successful login/registration
    };

    const logoutHandler = () => {
        console.log("Logging out user");
        // Clear user data from localStorage
        localStorage.removeItem('currentUser');
        // Reset React state to null
        setCurrentUser(null);
        menuCloseHandler(); // Close the menu
    };

    const searchHandler = () => {
        if (searchQuery.trim() !== "") {
            navigate(`/search?q=${searchQuery}`);
        }
    };

    const menuOpenHandler = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const menuCloseHandler = () => {
        setMenuAnchorEl(null);
    };

    // Effect to sync login state across browser tabs/windows
    useEffect(() => {
        const handleStorageChange = (event) => {
            // Update state if the 'currentUser' key in localStorage changes in another tab
            if (event.key === 'currentUser') {
                try {
                    setCurrentUser(event.newValue ? JSON.parse(event.newValue) : null);
                } catch (error) {
                    console.error("Error parsing user data from storage event:", error);
                    setCurrentUser(null); // Reset on error
                }
            }
        };
        window.addEventListener('storage', handleStorageChange);
        // Cleanup function to remove the listener when the component unmounts
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <>
            <AppBar
                sx={{ bgcolor: theme.palette.primary.main, color: theme.palette.secondary.main, position: "fixed" }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Logo/Brand Name */}
                    <Typography variant="h3" sx={{ display: { xs: "none", sm: "block", color: theme.palette.secondary1.main }, textDecoration: 'none' }}>
                        <Link className="custom-link" to="/">MovieZone</Link>
                    </Typography>

                    {/* Search Bar */}
                    <Toolbar sx={{ width: { xs: "70%", sm: "40%" } }}>
                        <InputBase
                            onChange={(e) => setSearchQuery(e.target.value)}
                            value={searchQuery}
                            sx={{ width: "90%", padding: "5px", marginRight: "10px", background: "white", borderRadius: "11px" }}
                            placeholder="Search..." 
                        />
                        <Button
                            onClick={searchHandler}
                            sx={{ backgroundColor: "black", color: "white", borderRadius: "10px", p: '5px' }}
                        >
                            Search 
                        </Button>
                    </Toolbar>

                    {/* Theme Switch and Burger Menu Trigger */}
                    <ThemeSwitch darkMode={isDarkMode} ToggleTheme={() => dispatch(ToggleTheme())} />
                    <MenuIcon onClick={menuOpenHandler} sx={{ cursor: "pointer", color: 'white' }} />

                    {/* Burger Menu Component */}
                    <BurgerMenu
                        anchorEl={menuAnchorEl}
                        handleMenuClose={menuCloseHandler}
                        currentUser={currentUser}
                        handleLogout={logoutHandler}
                        handleOpenLogin={openLoginDialogHandler} 
                    />
                </Toolbar>
            </AppBar>

            {/* Login/Register Dialog Component */}
            <DialogTable
                openLoginDialog={isLoginDialogOpen} 
                handleCloseLogin={closeLoginDialogHandler} 
                handleLoginSuccess={loginSuccessHandler} 
            />
        </>
    );
}