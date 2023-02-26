import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";

import {moviesByGenreActions} from "../../redux/slices";
import {Movie} from "../MoviesComponents/Movie/Movie";
import {Pagination} from "../Pagination/Pagination/Pagination";
import {Loader} from "../Loader/Loader";

const MoviesByGenre = () => {
    const {moviesByGenre,pages,loading} = useSelector(state => state.moviesByGenre);
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const {id} = useParams();

    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');
        dispatch(moviesByGenreActions.getByGenreId({id, page}))
    }, [searchParams, id])

    return (
        <div className="movieContainer">
            {loading&& <Loader/>}
            <div className="movieContainer">
                {moviesByGenre&& moviesByGenre.map(movie=><Movie key={movie.id} movie={movie}/> )}
            </div>
            <div>
                <Pagination total_pages={pages}/>
            </div>

        </div>
    );
};

export {MoviesByGenre};
