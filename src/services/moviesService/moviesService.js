import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../cofigs";

const moviesService = {
    getAll: () => axiosService.get(urls.allFilms),
    getById: (id) =>axiosService.get(urls.detailsFilm.concat(id))
}
export {moviesService}
