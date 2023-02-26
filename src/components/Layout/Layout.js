import "./Layout.css"

import {useSelector} from "react-redux";

import {Header} from "../Header/Header";
import {MovieSlider} from "../Slider/MovieSlider";
import {SearchResults} from "../SearcComponents/SearchResults/SearchResults";
import {SearchFilms} from "../SearcComponents/SearchFilms/SearchFilms";

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
        </div>
    );
};

export {Layout};
