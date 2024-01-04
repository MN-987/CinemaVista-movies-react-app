import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesDetailsCard from "../components/movies/MovieDetailsCard.js";
import getSearchMovie from '../apis/getSearchMovie.js'
const MovieSearch=()=>{
    const { search } = useParams();
    const [movieSearchResult, setMovieSearchResult] = useState([]);

    useEffect(() => {
        console.log('from movies-search page here is what is passwd to axios api',search)
        getSearchMovie(search)
          .then((data) => {
            console.log(data.data);
            setMovieSearchResult(data['data'].results);
          })
          .catch((err) => {
            console.log("Error fetching movies list from movie search", err);
          });
      }, []);
console.log(movieSearchResult)

return(
    <>
 {movieSearchResult.map((movie) => (
          <MoviesDetailsCard key={movie.id} movie={movie}  />
        ))}
</>)
}

export default MovieSearch;