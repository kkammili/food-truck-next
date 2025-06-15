import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, ...itemDetails } = action.payload;
      if (state.cart[id]) {
        let currCount = state.cart[id].count + 1;
        state.cart[id].count = currCount;
        state.cart[id].currPrice =
          "" +
          parseFloat(state.cart[id].price) * parseInt(state.cart[id].count);
      } else {
        state.cart[id] = { ...itemDetails, count: 1 };
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      if (state.cart[id]) {
        delete state.cart[id];
      }
    },
    updateItemCount: (state, action) => {
      const { id, count } = action.payload;
      if (state.cart[id]) {
        state.cart[id].count = count;
        state.cart[id].currPrice =
          "" +
          parseFloat(state.cart[id].price) * parseInt(state.cart[id].count);
      }
    },
    // Add clearCart action
    clearCart: (state) => {
      state.cart = {};
    },
  },
});

export const { addItem, removeItem, updateItemCount, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
