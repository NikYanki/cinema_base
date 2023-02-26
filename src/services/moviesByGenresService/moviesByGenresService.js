import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../cofigs";

const moviesByGenresService = {
    getByGenreId: (id, page) => axiosService.get(`${urls.allFilms}`, {
        params: {
            with_genres: id,
            page
        }
    }).then(value => value.data)
};

export {moviesByGenresService};
