// src/store/reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";

export default combineReducers({
  cart: cartReducer,
  checkout: checkoutReducer,
});
