import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import "./MoviesCard.css";
import { Link } from "react-router-dom";
import {  useState } from "react";
import { useDispatch , useSelector} from 'react-redux'
 import { addToWatchList , removeFromWatchList}  from '../../store/slices/watchList'
import { getMovieDetails } from "../../apis/getMovieDetail";
// import { current } from "@reduxjs/toolkit";

const MoviesCard = (props) => {


  const dispatch = useDispatch();
  const watchListArr = useSelector(state => state.watchList.watchListArr);


  const baseImageURL = `https://image.tmdb.org/t/p/w500`;
  let modifiedTitle = String(`${props.movieList.title}`).trim();
  const [isActive, setIsActive] = useState(false);
  
  const handleOnClick = async () => {
    try {
      const movieData = await getMovieDetails(props.movieList.id);
       const movieObj = movieData.data;
      if (isActive) {
        // Object is not red, and you need to remove the movie from the watching list
        
        dispatch(removeFromWatchList(movieObj))
        console.log(`Heart now is not red`);
      } else {
        // Object is red, and you need to add the movie to the watching list 
        
        dispatch(addToWatchList(movieObj));
        console.log("Updated watchListArr:", [...watchListArr, movieObj]);
      }

      // Toggle the isActive state
      setIsActive(current => !current);

      // Log the movie ID
      console.log(props.movieList.id);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="container">
      <div className="cellphone-container">
        <div className="movie">
          <div className="menu">
            <i className="material-icons"></i>
          </div>

          <div className="movie-img-container">
            <Link to={`/movies-details/${props.movieList.id}`}>
              <div
                className="movie-img"
                style={{
                  backgroundImage: `url(${baseImageURL}${props.movieList.poster_path})`,
                }}
              ></div>
            </Link>
          </div>

          <div className="text-movie-cont">
            <div className="mr-grid">
              <div className="col1">
                <h1>{modifiedTitle}</h1>
              </div>
            </div>
            <div className="mr-grid summary-row">
              <div className="col2">
                <h5>SUMMARY</h5>
              </div>
              <div className="col2">
                <ul className="movie-likes">
                  <li>
                    <i className="material-icons">&#xE813;</i>
                    {props.movieList.vote_average}
                  </li>
                  <li>
                    <i className="material-icons">&#xE813;</i>
                    {props.movieList.vote_count}
                  </li>
                </ul>
              </div>
            </div>
            <div className="mr-grid">
              <div className="col1">
                <p className="movie-description">{props.movieList.overview}</p>
              </div>
            </div>
            <div className="mr-grid actors-row">
              <div className="col1">
                <p className="movie-actors"></p>
              </div>
            </div>
            <div className="mr-grid action-row">
              <div className="col2">
                <div className="watch-btn">
                  <h3>
                    <i className="material-icons">&#xE037;</i>WATCH TRAILER
                  </h3>
                </div>
              </div>
              <div className="col6 action-btn">
                <i className="material-icons">&#xE161;</i>
              </div>
              <div className="col6 action-btn ">
                <i className="material-icons " style={{
                  color:isActive?'red':'',
                }} onClick={handleOnClick} >&#xe87d;</i>
              </div>
              <div className="col6 action-btn">
                <i className="material-icons">&#xE80D;</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
