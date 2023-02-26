import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../redux/slices";
import {GenresBadges} from "../GenresBadges/GenresBadges";

const Genres = () => {
    const dispatch =useDispatch()
    const {genres} =useSelector(state => state.genres)
    useEffect(()=>{dispatch(genresActions.getAll())},[dispatch])
    return (
        <div>
            {genres && <GenresBadges genres={genres}/>}
        </div>
    );
};

export {Genres}
