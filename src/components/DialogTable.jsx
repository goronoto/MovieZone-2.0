import React from 'react'; 
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import FirstForm from "./FirstForm";


export default function DialogTable({
    openLoginDialog,    // Boolean state controlling dialog visibility (from Navbar)
    handleCloseLogin,   // Function to close the dialog (from Navbar)
    handleLoginSuccess  // Function to call on successful login/registration (from Navbar)
}) {

    return (
        <Dialog
            open={openLoginDialog} // Controls if the dialog is visible
            onClose={handleCloseLogin} // Allows closing by clicking backdrop or pressing Esc
            aria-labelledby="login-dialog-title" // Accessibility: links dialog to its title
        >
            {/* Dialog Title Area */}
            <DialogTitle id="login-dialog-title">
                Login / Register 
                {/* Close Button */}
                <IconButton
                    aria-label="close" 
                    onClick={handleCloseLogin} // Closes the dialog on click
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            {/* Dialog Content Area */}
            <DialogContent>
                {/* Embed the form component */}
                {/* Pass the success handler down to the form */}
                <FirstForm onSuccess={handleLoginSuccess} />
            </DialogContent>
        </Dialog>
    );
}