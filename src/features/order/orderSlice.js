import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder, fetchAllOrders, fetchCount } from './orderAPI';
import { updateCart } from '../cart/cartAPI';

const initialState = {
  orders: [],
  status: 'idle',
  currentOrder: null,
  totalOrders: 0
};

export const createOrderAsync = createAsyncThunk(
  'order/createOrder',
  async (pagination) => {
    const response = await createOrder(pagination);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const updateCartAsync = createAsyncThunk(
  'order/updateCart',
  async (pagination) => {
    const response = await updateCart(pagination);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const fetchAllOrdersAsync = createAsyncThunk(
  'order/fetchAllOrders',
  async ({ pagination, sort}) => {
    const response = await fetchAllOrders(pagination, sort);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const orderSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    resetCart: (state) => {
      state.currentOrder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload);
        state.currentOrder = action.payload
      })
      .addCase(fetchAllOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders = action.payload.orders;
        state.totalOrders = action.payload.totalOrders
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.orders.findIndex((item)=>item.id === action.payload.id)
        state.orders[index] = action.payload;
      })
  },
});

export const { resetCart } = orderSlice.actions;
export const selectCurrentOrder = (state) => state.order.currentOrder;
export const selectOrders = (state) => state.order.orders;
export const selectTotalOrder = (state) => state.order.totalOrders;

export default orderSlice.reducer;
