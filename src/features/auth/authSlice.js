import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser, updateUser } from './authAPI';

const initialState = {
  loggedInUser: null,
  status: 'idle',
  error: null
};

export const createUserAsync = createAsyncThunk(
  'auth/createUser',
  async (userdata) => {
    const response = await createUser(userdata);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const checkUserAsync = createAsyncThunk(
  'auth/checkUser',
  async (loginInfo) => {
    const response = await checkUser(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);



export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser += action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.error = action.error;
        state.status = 'idle';

      })
      
      
  },
});

export const { increment } = authSlice.actions;

export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;