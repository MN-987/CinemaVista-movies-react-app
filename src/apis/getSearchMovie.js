import axios from "axios";

const getSearchMovie = (movieSearch) => {
    console.log('from get serach movie here is what passed',movieSearch)
    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${movieSearch}&include_adult=false&language=en-US&page=1&api_key=af1bb7258b78b83a9c77088b37418d4d`);
  };
  

export default getSearchMovie;