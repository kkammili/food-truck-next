// src/store/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import checkoutReducer from './checkoutReducer';
import paymentStatusReducer from './paymentStatusSlice';

export default combineReducers({
  cart: cartReducer,
  checkout: checkoutReducer,
  paymentStatus: paymentStatusReducer,
});
