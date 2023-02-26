import "./SearchFilms.css"

import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useForm} from "react-hook-form";

import {searchActions} from "../../../redux/slices";


const SearchFilms = () => {
    const {register, watch} = useForm();
    const dispatch = useDispatch();
    useEffect(() => {
        watch(({search}) => {
            const result=dispatch(searchActions.getMoviesBySearch({search}))
        });
    }, [watch]);

    return (
        <div className="searchFilms">
            <input type="text" placeholder={'🔎    Search movie   '} {...register('search')}/>
        </div>
    );
};

export {SearchFilms};
