import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkout: {
    shippingAddress: null,
    isAddressComplete: false,
  },
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setShippingAddress: (state, action) => {
      state.checkout.shippingAddress = action.payload;
      state.checkout.isAddressComplete = true;
    },
    clearShippingAddress: () => {
      return initialState;
    },
  },
});

export const { setShippingAddress, clearShippingAddress } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
