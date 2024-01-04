import { axiosInstance } from './config.js'

export const getMovieDetails = (movie_id) => {
    return axiosInstance.get(`/${movie_id}?api_key=af1bb7258b78b83a9c77088b37418d4d`);
}