import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder, fetchAllOrders, fetchCount } from './orderAPI';
import { updateItem } from '../cart/cartAPI';

const initialState = {
  orders: [],
  status: 'idle',
  currentOrder: null,
  totalOrders: 0
};

export const createOrdertAsync = createAsyncThunk(
  'order/createOrder',
  async (pagination) => {
    const response = await createOrder(pagination);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const updateItemAsync = createAsyncThunk(
  'order/updateItem',
  async (pagination) => {
    const response = await updateItem(pagination);
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
      .addCase(createOrdertAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createOrdertAsync.fulfilled, (state, action) => {
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
      .addCase(updateItemAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateItemAsync.fulfilled, (state, action) => {
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
