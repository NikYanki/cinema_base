import "./Movies.css"

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../../redux/slices";
import {Movie} from "../Movie/Movie";
import {Loader} from "../../Loader/Loader";
import {Pagination} from "../../Pagination/Pagination/Pagination";

const Movies = () => {
    const dispatch = useDispatch()
    const {movies, loading,pages} = useSelector(state => state.movies)
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');
        dispatch(moviesActions.getAll({page}))
    }, [dispatch,searchParams])

    return (
        <div className="movieContainer">
            {loading&& <Loader/>}
            <div className="movieContainer">
                {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <Pagination total_pages={pages}/>
            </div>


        </div>
    );
};

export {Movies};
