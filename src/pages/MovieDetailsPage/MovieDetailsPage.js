import React from 'react';
import {MovieDetails} from "../../components/moviesComponents/MovieDetails/MovieDetails";
import {Header} from "../../components/Header/Header";
import {useSelector} from "react-redux";

const MovieDetailsPage = () => {
    const {darkMode} = useSelector(state => state.theme);

    return (
        <div className={darkMode ? "dark-style" : "light-style"} >
            <Header/>
          <MovieDetails/>
        </div>
    );
};
export {MovieDetailsPage}
