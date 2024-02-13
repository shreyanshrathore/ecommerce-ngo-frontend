import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOption: 0,
  currentProduct: null,
  newProduct: false,
  status: "idle",
};

export const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    optionChange: (state, action) => {
      state.currentOption = action.payload;
    },
    productInfo: (state, action) => {
      state.currentProduct = action.payload;
    },
    newProduct: (state, action) => {
      state.newProduct = action.payload;
    },
  },
});

export const { optionChange, productInfo, newProduct } = optionSlice.actions;

export const selectnewProduct = (state) => state.option.newProduct;
export const selectOptions = (state) => state.option.currentOption;
export const selectProduct = (state) => state.option.currentProduct;


export default optionSlice.reducer;
