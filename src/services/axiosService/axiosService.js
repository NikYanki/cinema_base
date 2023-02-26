import axios from "axios";

import {accessToken, baseURL} from "../../cofigs";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config) =>{
    config.headers.Authorization = `Bearer ${accessToken}`
    return config
})
export {axiosService}
