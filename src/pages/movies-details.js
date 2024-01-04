import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import './movies-details.css'
import { getMovieDetails } from "../apis/getMovieDetail";
export default function MoviesDetails (){
    const [movie, setMovie] = useState([]);
    const {id}=useParams();
    const baseImageURL = `https://image.tmdb.org/t/p/w500`;

    useEffect(() => {
        getMovieDetails(id)
          .then((data) => {
            console.log(data.data)
            setMovie(data.data);
           
          })
          .catch((err) => {
            console.log("Error fetching movies list", err);
          });
      }, []);
return(<>
<div id="movie-card-list">
  <div className="movie-card" data-movie="Blade Runner"   style={{
                backgroundImage: `url(${baseImageURL}${movie.poster_path})`,
              }}>
    <div className="movie-card__overlay"></div>
    <div className="movie-card__share">
      <button className="movie-card__icon"><i className="material-icons">&#FavoriteIcon</i></button>
      <button className="movie-card__icon"><i className="material-icons">&#xe253</i></button>
      <button className="movie-card__icon"><i className="material-icons">&#xe80d</i></button>
    </div>
    <div className="movie-card__content">
      <div className="movie-card__header">
        <h1 className="movie-card__title">{movie.title}</h1>
         { movie.genres && <h4 className="movie-card__info"> {` ${movie.genres[0]?.name || ''} ${movie.genres[1]?.name || ''} ${movie.genres[2]?.name || ''}`}</h4>
}</div>
      <p className="movie-card__desc">{movie.overview}</p>
      <button className="btn btn-outline movie-card__button" type="button" >Watch Trailer</button>
    </div>
  </div>
</div>
</>)
}