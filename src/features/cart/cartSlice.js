import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart, deleteItem, fetchItemsByUserId, resetCart, updateCart } from './cartAPI';

const initialState = {
  items: [],
  adresses: [],
  payment: null,
  status: 'idle',
};

export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
  async (items) => {
    const response = await addToCart(items);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchItemsByUserIdAsync = createAsyncThunk(
  'cart/fetchItemsByUserId',
  async (user) => {
    const response = await fetchItemsByUserId();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);



export const updateCartAsync = createAsyncThunk(
  'cart/updateCart',
  async (update) => {
    const response = await updateCart(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const deleteItemFromCartAsync = createAsyncThunk(
  'cart/deleteItemFromCar',
  async (id) => {
    const response = await deleteItem(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const resetCartAsync = createAsyncThunk(
  'cart/resetCart',
  async () => {
    const response = await resetCart();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);



export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    adressChange: (state, action) => {
      state.adresses = action.payload;
    },
    paymentChange: (state, action) => {
      state.payment = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(fetchItemsByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex((item)=>item.id === action.payload.id)
        state.items[index] = action.payload;
      })
      .addCase(deleteItemFromCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex((item)=>item.id === action.payload.id)
        state.items.splice(index,1)
      })
      .addCase(resetCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(resetCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = []
      });
  },
});

export const { increment, adressChange, paymentChange } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;
export const selectAddress = (state) => state.cart.adresses;
export const selectPayment = (state) => state.cart.payment;


export default cartSlice.reducer;
