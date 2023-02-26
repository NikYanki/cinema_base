import "./SearchResults.css"

import {Link} from "react-router-dom";

const SearchResults = ({searchFilm}) => {

    return (
        <div className="SearchResultsContainer">
            {searchFilm && searchFilm.map(film =>
                <Link key={film.id} to={`/movies/${film.id}`}> {film.name} </Link>)}
        </div>
    );
};

export {SearchResults};
