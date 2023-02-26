import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../../redux/slices";
import {Movie} from "../Movie/Movie";
import "./Movies.css"
import {Loader} from "../../Loader/Loader";

const Movies = () => {
    const dispatch = useDispatch()
    const {movies, loading} = useSelector(state => state.movies)
    useEffect(() => {
        dispatch(moviesActions.getAll())
    }, [dispatch])
    return (
        <div className="movieContainer">
            {loading&& <Loader/>}
            {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies}
