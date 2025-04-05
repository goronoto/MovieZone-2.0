import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import WatchLaterPage from './pages/WatchLaterPage';
import {customTheme} from './components/Theme'
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const route = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path:`/search` ,
    element: <SearchPage/>
  },
  {
    path:`/watchLater` ,
    element: <WatchLaterPage/>
  },
  
])

function App() {
  const isDarkMode = useSelector((state) => state.switch.darkMode)

  const theme = createTheme({
    palette: isDarkMode
        ? customTheme.dark
        : customTheme.light
});

  
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={route}/>
      </ThemeProvider>
    </>
  )
}

export default App
