import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, ...itemDetails } = action.payload;
      console.log(id,itemDetails, '<----- hmmm')
      if (state.cart[id]) {
        state.cart[id].count += 1;
      } else {
        state.cart[id] = { ...itemDetails, count: 1 };
      }
      console.log(state, '<---- state after saving')
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      if (state.cart[id]) {
        if (state.cart[id].count > 1) {
          state.cart[id].count -= 1;
        } else {
          delete state.cart[id];
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
