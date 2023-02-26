import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {
    genresReducer,
    movieDetailsReducer,
    moviesByGenreReducer,
    moviesReducer,
    searchReducer,
    themeReducer,
    topRatedMoviesReducer
} from "../slices";

const rootReducer = combineReducers({
    theme: themeReducer,
    movies: moviesReducer,
    genres: genresReducer,
    movie: movieDetailsReducer,
    topRatedMovies: topRatedMoviesReducer,
    searchMovies: searchReducer,
    moviesByGenre: moviesByGenreReducer

});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore};
