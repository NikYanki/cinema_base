import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genresReducer, moviesReducer, themeReducer} from "../slices";
import {movieDetailsReducer} from "../slices/movieDetailsSlice/movieDetailsSlice";
import {topRatedMoviesReducer} from "../slices/topRatedMovieSlice/topRatedMoviesSlice";
import {searchReducer} from "../slices/searchFilmSlice/searchFilmSlice";



const rootReducer = combineReducers({
    theme: themeReducer,
    movies: moviesReducer,
    genres: genresReducer,
    movie: movieDetailsReducer,
    topRatedMovies: topRatedMoviesReducer,
    searchMovies: searchReducer

});

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {setupStore}
