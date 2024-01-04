import { axiosInstance } from './config.js'

export const getMoviesList = () => {
    return axiosInstance.get('/popular?api_key=af1bb7258b78b83a9c77088b37418d4d');
}