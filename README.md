# MovieZone 2.0

**Explore, organize, and save your favorite movies with this feature-rich web application built using React and Node.js.**

This application allows users to browse a vast movie database, filter and sort movies based on various criteria, manage a personal 'Watch Later' list, and switch between light and dark themes. Now featuring user accounts for a personalized experience!

---

## Key Features

*   **User Accounts:** Register new accounts and log in to access personalized features.
*   **Advanced Movie Discovery:** Sort and filter movies by Genre, Type, Rating, Popularity, and Revenue.
*   **Watch Later List:** Curate a personal list of movies you intend to watch.
*   **Theme Switching:** Seamlessly toggle between Light and Dark modes for optimal viewing comfort.
*   **Movie Search:** Find specific movies using the search bar.

---

## Technologies Used

**Frontend:**

*   **React:** JavaScript library for building user interfaces.
*   **Material UI (MUI):** Comprehensive component library for styling and layout.
*   **React Router:** For declarative routing and navigation within the single-page application.
*   **Redux Toolkit:** For efficient and predictable state management.
*   **Axios:** For making HTTP requests to the backend API and TMDB.
*   **Vite:** Fast frontend build tool and development server.

**Backend:**

*   **Node.js:** JavaScript runtime environment.
*   **Express:** Minimalist web framework for Node.js used to build the API.
*   **SQLite3:** File-based relational database for storing user data.
*   **bcrypt:** Library for securely hashing user passwords.
*   **CORS:** Middleware to enable Cross-Origin Resource Sharing between frontend and backend.

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   **Node.js & npm:** Make sure you have Node.js installed (which includes npm). You can download it from [nodejs.org](https://nodejs.org/). Version 16.x or higher is recommended.
    *   *(Alternatively, you can use Yarn: [Yarn Installation Guide](https://classic.yarnpkg.com/en/docs/install))*
*   **Git:** For cloning the repositories.
*   **TMDB API Key:** This project uses The Movie Database (TMDB) API to fetch movie data. Get a free API key from [their website](https://www.themoviedb.org/documentation/api).

### Installation & Setup

This project consists of two parts: the Frontend (React) and the Backend (Node.js/Express). You'll need to set up both.

**1. Frontend Setup (MovieZone-2.0 - React App):**

   a.  **Clone the Frontend repository:**
       ```bash
       git clone https://github.com/goronoto/MovieZone-2.0.git
       ```
   b.  **Navigate to the Frontend project directory:**
       ```bash
       cd MovieZone-2.0
       ```
   c.  **Install Frontend dependencies:** (This installs React, MUI, Redux, Axios, etc., listed in `package.json`)
       *   Using npm:
           ```bash
           npm install
           ```
       *   Or using Yarn:
           ```bash
           yarn install
           ```
   d.  **Set up Frontend environment variables:**
       *   Create a `.env` file in the `MovieZone-2.0` root directory (you can copy `.env.example` if it exists).
       *   Open the `.env` file and add your TMDB API key:
           ```env
           VITE_API_KEY=YOUR_TMDB_API_KEY_HERE
           ```
           Replace `YOUR_TMDB_API_KEY_HERE` with your actual key.

**2. Backend Setup (my-backend - Node.js API):**

   a.  **Clone the Backend repository**
       ```bash
       git clone https://github.com/goronoto/moviezone-backend 
       # Example: git clone https://github.com/goronoto/moviezone-backend.git moviezone-backend
       ```
   b.  **Navigate to the Backend project directory:**
       ```bash
       cd moviezone-backend
       ```
   c.  **Install Backend dependencies:** (This installs Express, SQLite3, bcrypt, cors, etc.)
       *   Using npm:
           ```bash
           npm install
           ```
       *   Or using Yarn:
           ```bash
           yarn install
           ```
   d.  **Database Setup:** This backend uses SQLite. The `database.db` file should be created automatically in the `moviezone-backend` directory when the server starts if it doesn't exist. The necessary `users` table structure should also be created by the server on its first run (or you might need to create it manually using a tool like DB Browser for SQLite if the server code doesn't handle automatic creation - check the `server.js` file).

### Running the Application

You need to run **both** the backend server and the frontend development server simultaneously in separate terminal windows.

**1. Run the Backend Server:**

   *   Open a terminal window.
   *   Navigate to your backend directory (`cd moviezone-backend`).
   *   Start the server:
       ```bash
       node server.js
       ```
   *   The backend should now be running, typically on `http://localhost:5000`. Check the terminal output for confirmation.

**2. Run the Frontend Development Server:**

   *   Open a **second** terminal window.
   *   Navigate to your frontend directory (`cd MovieZone-2.0`).
   *   Start the Vite development server:
       *   Using npm:
           ```bash
           npm run dev
           ```
       *   Or using Yarn:
           ```bash
           yarn dev
           ```
   *   Vite will provide a local URL in the terminal (usually `http://localhost:5173` or similar).

**3. Access the Application:**

   *   Open your web browser and navigate to the **Frontend URL** provided by Vite (e.g., `http://localhost:5173`).

You should now be able to use the MovieZone application, including registering and logging in, which will interact with your running backend server.

---
