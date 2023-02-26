import './Movie.css';

import {Link} from "react-router-dom";

import {Rating} from "../../Rating/Rating";

const Movie = ({movie}) => {
    const {original_title, poster_path, title, vote_average} = movie;

    return (
        <div className='movieCardContainer'>
            <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`} alt={original_title}/>
            <Rating grade={vote_average / 2}/>
            <Link to={`/movies/${movie.id}`}>{title}</Link>


        </div>
    );
};

export {Movie};
