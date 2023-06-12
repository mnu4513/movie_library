import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Register from './components/Register';
import Login from './components/Login';
import Error from './components/Error';
import PopularMovie from './components/PopularMovie';
import '../index.css';
import UpcomingMovies from './components/UpcomingMovies';
import TopRatedMovies from './components/TopRatedMovies';
import MovieDetails from './components/MovieDetails';
import NowPlayingMovies from './components/NowPlayingMovies';
import Favorite from './components/Favorite';
import CardSimmer from './components/CardSimmer';
import PublicList from './components/PublicList';

const App = () => {

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,

        children: [
            {
                path: '/',
                element: <PopularMovie/>
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/home',
                element: <PopularMovie />
            },
            {
                path: '/popular-movies',
                element: <PopularMovie />
            },
            {
                path: '/upcoming-movies',
                element: <UpcomingMovies />
            },
            {
                path: '/top-rated-movies',
                element: <TopRatedMovies />
            },
            {
                path: '/now-playing-movies',
                element: <NowPlayingMovies />
            },
            {
                path: '/fav-movies',
                element: <Favorite />
            },
            {
                path: '/movie-details/:movieId',
                element: <MovieDetails />
            },
            {
                path: "/smc",
                element: <CardSimmer />
            }, 
            {
                path: '/public-list',
                element: <PublicList/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);