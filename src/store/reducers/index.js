// src/store/reducers/index.js
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer"; // Renamed to checkoutReducer

export default combineReducers({
  cart: cartReducer,
  checkout: checkoutReducer,
});
