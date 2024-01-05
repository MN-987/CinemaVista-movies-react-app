import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    watchListArr:[]
}

const watchListSlice=createSlice({
    name:'watchListArr',
    initialState:INITIAL_STATE,
    reducers:{
        addToWatchList : (state,action)=>{
            const newMovie = action.payload;
            state.watchListArr.push(newMovie);
        }
        ,
        removeFromWatchList:(state,action)=>{
            console.log(`from removeFromWatchList here is your payload: `, action.payload.id)
            const idOfMovieToRemove=action.payload.id;
            state.watchListArr = state.watchListArr.filter((movie) => movie.id !== idOfMovieToRemove);
        }
    }    
})

export const { addToWatchList , removeFromWatchList} = watchListSlice.actions;

export default watchListSlice.reducer;