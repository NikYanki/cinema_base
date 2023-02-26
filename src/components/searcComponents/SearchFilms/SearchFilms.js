import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {searchActions} from "../../../redux/slices/searchFilmSlice/searchFilmSlice";


const SearchFilms = () => {
    const {register, watch} = useForm();
    const dispatch = useDispatch();
    useEffect(() => {
        watch(({search}) => {
            const result=dispatch(searchActions.getMoviesBySearch({search}))
        });
    }, [watch]);
    return (
        <div>
            <input type="text" placeholder={'🔎    Search movie   '} {...register('search')}/>
        </div>
    );
};

export {SearchFilms}
