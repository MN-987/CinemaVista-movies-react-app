import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import "./MoviesCard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchList,
  removeFromWatchList,
} from "../../store/slices/watchList";
import { getMovieDetails } from "../../apis/getMovieDetail";

const MoviesCard = (props) => {
  const dispatch = useDispatch();
  const watchListArr = useSelector((state) => state.watchList.watchListArr);
  const baseImageURL = `https://image.tmdb.org/t/p/w500`;
  let modifiedTitle = String(`${props.movieList.title}`).trim();

  const isMovieInWatchList = (id) => {
    return watchListArr.some((movieObj) => movieObj.id === id);
  };

  const [isActive, setIsActive] = useState(isMovieInWatchList(props.movieList.id));

  const handleOnClick = async () => {
    try {
      const movieData = await getMovieDetails(props.movieList.id);
      const movieObj = movieData.data;

      if (isMovieInWatchList(props.movieList.id)) {
        // Object is in the watch list, remove it
        dispatch(removeFromWatchList(movieObj));
        console.log(`Removed from watch list`);
      } else {
        // Object is not in the watch list, add it
        dispatch(addToWatchList(movieObj));
        console.log("Added to watch list");
      }

      // Update the isActive state
      setIsActive(isMovieInWatchList(props.movieList.id));

      // Log the movie ID
      console.log(props.movieList.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Clean up local storage if the component is unmounted
    return () => {
      localStorage.removeItem(`movie_${props.movieList.id}`);
    };
  }, [props.movieList.id]);


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
                <i
                  className="material-icons "
                  style={{
                    color:  isMovieInWatchList(props.movieList.id) ? "red" : "",
                  }}
                  onClick={handleOnClick}
                >
                  &#xe87d;
                </i>
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
