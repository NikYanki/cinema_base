import React from 'react';
import {useSelector} from "react-redux";
import {Movies} from "../moviesComponents/Movies/Movies";
import {Header} from "../Header/Header";
import {MovieSlider} from "../Slider/MovieSlider";
import "./Layout.css"
import {SearchResults} from "../searcComponents/SearchResults/SearchResults";
import {SearchFilms} from "../searcComponents/SearchFilms/SearchFilms";

const Layout = () => {
    const {darkMode} = useSelector(state => state.theme);
    const {searchMovies} = useSelector(state => state.searchMovies)
    return (
        <div className={darkMode ? "dark-style" : "light-style"}>
            <Header/>
            <SearchFilms/>
            <SearchResults searchFilm={searchMovies}/>
            <h1 className="title">popular movies regardless of time</h1>
            <MovieSlider/>
            <Movies/>
        </div>
    );
};

export {Layout}
