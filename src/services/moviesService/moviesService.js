import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../cofigs";

const moviesService = {
    getAll: (page) => axiosService.get(`${urls.allFilms}`,{params:{page}} ),
    getById: (id) =>axiosService.get(urls.detailsFilm.concat(id))
};

export {moviesService};
