import { axiosInstance } from './config.js'

export const getPopularMovies = (movieSearch) => {
    return axiosInstance.get('/popular?api_key=af1bb7258b78b83a9c77088b37418d4d&language=ar');
}

