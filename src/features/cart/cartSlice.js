import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart, deleteItem, fetchItemsByUserId, updateCart, updateItem } from './cartAPI';

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
    console.log(user);
    const response = await fetchItemsByUserId(user);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);



export const updateItemAsync = createAsyncThunk(
  'cart/updateItem',
  async (update) => {
    const response = await updateItem(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const deleteItemAsync = createAsyncThunk(
  'cart/deleteItem',
  async (id) => {
    const response = await deleteItem(id);
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
      .addCase(updateItemAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex((item)=>item.id === action.payload.id)
        state.items[index] = action.payload;
      })
      .addCase(deleteItemAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex((item)=>item.id === action.payload.id)
        state.items.splice(index,1)
      });
  },
});

export const { increment, adressChange, paymentChange } = cartSlice.actions;

export const selectItems = (state) => state.cart.items;
export const selectAddress = (state) => state.cart.adresses;
export const selectPayment = (state) => state.cart.payment;


export default cartSlice.reducer;
