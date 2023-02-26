import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../cofigs";

const genresService = {
    getAll: () => axiosService.get(urls.genres)
};

export {genresService};
