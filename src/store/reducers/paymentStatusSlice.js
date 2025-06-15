import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: null,
};

const paymentStatusSlice = createSlice({
  name: 'paymentStatus',
  initialState,
  reducers: {
    setPaymentStatus: (state, action) => {
      state.status = action.payload;
    },
    clearPaymentStatus: (state) => {
      state.status = null;
    },
  },
});

export const { setPaymentStatus, clearPaymentStatus } = paymentStatusSlice.actions;
export default paymentStatusSlice.reducer;
