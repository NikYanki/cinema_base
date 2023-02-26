import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css"

import {useEffect} from "react";
import {Carousel} from "react-responsive-carousel";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {topRatedMoviesActions} from "../../redux/slices";

const MovieSlider = () => {
    const dispatch = useDispatch()
    const {topRatedMovies} = useSelector(state => state.topRatedMovies)
    useEffect(() => {
        dispatch(topRatedMoviesActions.getAll())
    }, [dispatch]);

    return (<div className="carouselContainer">
            <Carousel>
                {topRatedMovies && topRatedMovies.map(movie => <div key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`} alt={movie.title}/>
                    <Link to={`/movies/${movie.id}`} className="legend">{movie.title}</Link>
                </div>)}
            </Carousel>
        </div>
    )
}
export {MovieSlider};
