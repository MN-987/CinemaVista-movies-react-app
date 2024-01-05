import React from "react"
import { useSelector } from 'react-redux';
import MoviesDetailsCard from "../components/movies/MovieDetailsCard";

const MoviesWatchList=()=>{
    const watchListArr=useSelector(state=>state.watchList.watchListArr)
    return<>
    <did>
    <div>
      <h2>Watch List:</h2>
      <ul>
        <li style={{listStyle:'none'}}>   {watchListArr.map(movie => (
        < MoviesDetailsCard key={movie.id} movie={movie}/>
        ))} </li>
      
      </ul>
    </div>
    </did>
    </>
}

export default MoviesWatchList;