import {axiosService} from "../axiosService/axiosService";
import {urls} from "../../cofigs";

const searchFilmService={
    getBySearch: (query) => axiosService.get(urls.search, {params:{query: query}}).then(value => value.data)
};

export {searchFilmService};
