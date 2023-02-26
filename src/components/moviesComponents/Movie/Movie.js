import './Movie.css';
import {Rating} from "../../Rating/Rating";
import {Link} from "react-router-dom";

const Movie = ({movie}) => {
    const {
        backdrop_path, genre_ids, original_title, overview, poster_path, release_date, title, vote_average
    } = movie;


    return (
        <div className='movieCardContainer'>
            <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`} alt={original_title}/>
            <Rating grade={vote_average / 2}/>
            <Link to={`/movies/${movie.id}`}>{title}</Link>


        </div>
    );
};

export {Movie};
