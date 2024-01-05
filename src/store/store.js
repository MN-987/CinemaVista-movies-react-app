import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from './slices/watchList';

export default configureStore ({
    reducer:{
      watchList:watchListSlice
    }
})