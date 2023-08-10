import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder, fetchCount } from './orderAPI';

const initialState = {
  orders: [],
  status: 'idle',
};

export const createOrdertAsync = createAsyncThunk(
  'order/createOrder',
  async (order) => {
    const response = await createOrder(order);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrdertAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrdertAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
      });
  },
});

export const { increment } = orderSlice.actions;

export const selectCount = (state) => state.counter.value;

export default orderSlice.reducer;
