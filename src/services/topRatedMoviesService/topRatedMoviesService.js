import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../cofigs";

const topRatedMoviesService = {
    getAll: () => axiosService.get(urls.top_rated)
};

export {topRatedMoviesService};
