import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createNGO, createUser, deleteNgoRequest, fetchNGO, signOut } from './authAPI';
import { updateUser } from '../user/userAPI';


const initialState = {
  loggedInUser: null,
  status: 'idle',
  ngo: [],
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

export const createNGOAsync = createAsyncThunk(
  'auth/createNGO',
  async (userdata) => {
    const response = await createNGO(userdata);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const deleteNgoRequestAsync = createAsyncThunk(
  'auth/deleteNgoRequest',
  async (id) => {
    const response = await deleteNgoRequest(id);
    return response.data;
  }
);

export const fetchNGOAsync = createAsyncThunk(
  'auth/fetchNGO',
  async () => {
    const response = await fetchNGO();
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


export const updateUserAsync = createAsyncThunk(
  'auth/updateUser',
  async (user) => {
    const response = await updateUser(user);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const signOutAsync = createAsyncThunk(
  'auth/signOut',
  async (user) => {
    const response = await signOut(user);
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
      .addCase(updateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(signOutAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = null;
      })
      .addCase(createNGOAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createNGOAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.ngo = action.payload;
      })
      .addCase(fetchNGOAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNGOAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.ngo = action.payload;
      })
      .addCase(deleteNgoRequestAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteNgoRequestAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.ngo = action.payload;
      })
      
  },
});

export const { increment } = authSlice.actions;

export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectNGORequest = (state) => state.auth.ngo;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
