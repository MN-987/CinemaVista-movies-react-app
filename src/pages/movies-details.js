import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./movies-details.css";
import MoviesDetailsCard from "../components/movies/MovieDetailsCard";
import { getMovieDetails } from "../apis/getMovieDetail";
export default function MoviesDetails() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(id)
      .then((data) => {
        console.log(data.data);
        setMovie(data.data);
      })
      .catch((err) => {
        console.log("Error fetching movies list", err);
      });
  }, []);
  return (
    <>
    <MoviesDetailsCard id={movie.id} movie={movie}/>
    </>
  );
}
