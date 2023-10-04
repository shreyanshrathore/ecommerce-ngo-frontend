import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOption: 0,
  currentProduct: {},
  status: "idle",
};

export const cartSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    optionChange: (state, action) => {
      state.currentOption = action.payload;
    },
    productInfo: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { optionChange, productInfo } = cartSlice.actions;

export const selectOptions = (state) => state.admin.currentOption;
export const selectProduct = (state) => state.admin.currentProduct;


export default cartSlice.reducer;
