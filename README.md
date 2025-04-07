Feature-Rich Movie Website Explore and organize movies with this web application built on the React ecosystem. Key features include:

Advanced movie sorting & filtering (Genre, Type, Rating, Popularity, Revenue).

'Watch Later' functionality to curate a personal movie list.

Seamless theme switching between Light and Dark modes.

Technologies Used: React, Material UI (MUI) for components and styling, React Router for navigation, Redux Toolkit for state management, and custom MUI theme integration.

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js: Make sure you have Node.js installed. You can download it from nodejs.org. Version 16.x or higher is recommended. (npm is included with Node.js).
Alternatively, you can use Yarn: Yarn Installation Guide
TMDB API Key: This project uses The Movie Database (TMDB) API to fetch movie data. You need to get a free API key from their website.
Installation
Clone the repository:

git clone https://github.com/goronoto/MovieZone-2.0.git
Navigate to the project directory:

cd MovieZone-2.0
Install dependencies:

Using npm:
npm install
such dependecies as
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
npm install @reduxjs/toolkit react-redux
npm install @mui/material @emotion/react @emotion/styled
npm install --save @types/react-router-dom
Or using Yarn:
yarn install
yarn install @mui/icons-material @mui/material @emotion/styled @emotion/react
yarn install @reduxjs/toolkit react-redux
yarn install @mui/material @emotion/react @emotion/styled
yarn install --save @types/react-router-dom
Set up environment variables:

Create a .env file in the root of the project directory by copying the example file:
cp .env.example .env
Open the newly created .env file and add your TMDB API key:
VITE_API_KEY=YOUR_TMDB_API_KEY_HERE
Replace YOUR_TMDB_API_KEY_HERE with the actual API key you obtained from TMDB.
Running the Application
Once the installation is complete and the environment variables are set up, you can run the development server:

Using npm:
npm run dev
Or using Yarn:
yarn dev
This will start the Vite development server. Open your web browser and navigate to the local URL provided in the terminal (usually http://localhost:5173 or similar).
