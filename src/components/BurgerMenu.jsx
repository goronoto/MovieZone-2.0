import React from 'react'; 
import { Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function BurgerMenu({
    anchorEl,
    handleMenuClose,
    currentUser,
    handleLogout,
    handleOpenLogin
}) {
    return (
        <Menu
            id="basic-menu" // Keep ID for accessibility or specific targeting if needed
            anchorEl={anchorEl} // Element the menu is anchored to
            open={Boolean(anchorEl)} // Menu is open if anchorEl is truthy
            onClose={handleMenuClose} // Function to call when closing the menu (e.g., clicking outside)
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
            {/* --- Always Visible Menu Items --- */}
            <MenuItem onClick={handleMenuClose}>
                <Link className="custom-link" to='/'>
                    Home
                </Link>
            </MenuItem>

            {/* --- Conditional Menu Items based on User Login State --- */}
            {currentUser ? (
                // --- Rendered if the user IS logged in ---
                <>
                    <MenuItem onClick={handleMenuClose} sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                        <Typography color="primary1">
                            {currentUser.username}
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}> {/* Logout action */}
                        Logout
                    </MenuItem>
                </>
            ) : (
                // --- Rendered if the user IS NOT logged in ---
                <MenuItem onClick={handleOpenLogin}> {/* Opens the login/register dialog */}
                    Login
                </MenuItem>
            )}
            {currentUser && (
                 <MenuItem onClick={handleMenuClose}>
                     <Link className="custom-link" to='/watchLater'>
                         Watch Later
                     </Link>
                 </MenuItem>
            )}
        </Menu>
    );
}