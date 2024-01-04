import React from 'react';

import MoviesCard from './moviesCard.js'
import {getMoviesList} from '../../apis/getMoviesList.js'
import { useState , useEffect } from 'react';
const MoviesComponent = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesList()
      .then((data) => {
        setMovies(data['data'].results);
      })
      .catch((err) => {
        console.log("Error fetching movies list", err);
      });
  }, []);

  // movies.map((movie) => (
  //   console.log('from movies component' , movie.id)
  // ))

// this wa for test purpose only remove it latter before deployment
  
  
  
  return (
    <>

<div className='d-flex flex-row flex-wrap'>
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movieList={movie}  />
        ))}
      </div>
 
    </> 
  );
};

export default MoviesComponent;
