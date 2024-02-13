import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourites";
import jobsReducer from "../reducers/jobs";

const mainReducer = combineReducers({
  favourites: favouriteReducer,
  jobs: jobsReducer,
});
const store = configureStore({
  reducer: mainReducer,
});
export default store;
