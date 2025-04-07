import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

// Schema for REGISTRATION
const RegisterSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .required('Username is required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

// Schema for LOGIN
const LoginSchema = Yup.object().shape({
    identifier: Yup.string()
        .required('Username or Email is required'),
    password: Yup.string()
        .required('Password is required'),
});

// Component to handle both Login and Registration
export default function FirstForm({ onSuccess }) { // Accept onSuccess callback prop
    const [isRegisterMode, setIsRegisterMode] = useState(true); // Default mode is registration

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        setSubmitting(true);
        const url = isRegisterMode
            ? 'http://localhost:5000/api/register' // URL for registration API endpoint
            : 'http://localhost:5000/api/login';    // URL for login API endpoint

        // Prepare data payload based on the current mode (register or login)
        const dataToSend = isRegisterMode
            ? { username: values.username, email: values.email, password: values.password }
            : { identifier: values.identifier, password: values.password };

        try {
            const response = await axios.post(url, dataToSend);
            console.log(isRegisterMode ? 'Register success:' : 'Login success:', response.data);
            alert(response.data.message); // Show success message from backend
            if (onSuccess) {
                // Call the callback passed from parent (Navbar) on success
                // Pass user data if available (typically returned on login)
                onSuccess(response.data.user);
            }
        } catch (error) {
            console.error('API error:', error.response ? error.response.data : error.message);
            const errorMessage = error.response?.data?.message || 'An error occurred';
            alert(`Error: ${errorMessage}`);
        } finally {
            setSubmitting(false); 
        }
    };

    // Select validation schema and initial values based on the current mode
    const currentSchema = isRegisterMode ? RegisterSchema : LoginSchema;
    const initialFormValues = isRegisterMode
        ? { username: '', email: '', password: '' }
        : { identifier: '', password: '' };

    return (
        <Box sx={{ padding: 2 }}> 
            {/* --- Mode Toggle Buttons --- */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, gap: 1 }}>
                <Button
                    onClick={() => setIsRegisterMode(true)}
                    variant={isRegisterMode ? 'contained' : 'outlined'} 
                    size="small"
                >
                    Register
                </Button>
                <Button
                    onClick={() => setIsRegisterMode(false)}
                    variant={!isRegisterMode ? 'contained' : 'outlined'} 
                    size="small"
                >
                    Login
                </Button>
            </Box>

            {/* Form Title */}
            <Typography variant="h6" align="center" gutterBottom>
                {isRegisterMode ? 'Create Account' : 'Login to Your Account'}
            </Typography>

            <Formik
                initialValues={initialFormValues}
                validationSchema={currentSchema}
                onSubmit={handleSubmit}
                enableReinitialize 
            >
                {({
                    values, errors, touched, handleChange, handleBlur, handleSubmit: formikSubmit, isSubmitting,
                }) => (
                    <Box
                        component="form"
                        onSubmit={formikSubmit} 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,       
                            maxWidth: 400,
                            margin: 'auto',
                        }}
                        noValidate // Disable browser's default validation
                    >
                        {/* --- Conditional Rendering of Fields based on Mode --- */}
                        {isRegisterMode && (
                            <>
                                <TextField
                                    fullWidth
                                    id="username"
                                    name="username" 
                                    label="Username"
                                    type="text"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.username && Boolean(errors.username)}
                                    helperText={touched.username && errors.username}
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email" 
                                    label="Email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                    variant="outlined"
                                />
                            </>
                        )}

                        {!isRegisterMode && (
                            // --- Field for Login (Username or Email) ---
                            <TextField
                                fullWidth
                                id="identifier"
                                name="identifier" 
                                label="Username or Email"
                                value={values.identifier}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.identifier && Boolean(errors.identifier)}
                                helperText={touched.identifier && errors.identifier}
                                variant="outlined"
                            />
                        )}

                        {/* --- Password Field (Always Visible) --- */}
                        <TextField
                            fullWidth
                            id="password"
                            name="password" 
                            label="Password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                            variant="outlined"
                        />

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting} // Disable button during submission
                            sx={{ mt: 1 }}
                        >
                            {isSubmitting ? 'Processing...' : (isRegisterMode ? 'Register' : 'Login')}
                        </Button>
                    </Box>
                )}
            </Formik>
        </Box>
    );
}