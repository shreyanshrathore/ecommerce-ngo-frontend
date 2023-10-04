import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createNgoAdmin, createNgoRequest, createUser, deleteNgoRequest, fetchNgoAdmin, fetchNgoRequest, signOut } from './authAPI';
import { updateUser } from '../user/userAPI';


const initialState = {
  loggedInUser: null,
  status: 'idle',
  ngoreq: [],
  ngolist: [],
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

export const createNgoRequestAsync = createAsyncThunk(
  'auth/createNgoRequest',
  async (userdata) => {
    const response = await createNgoRequest(userdata);
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

export const fetchNgoRequestAsync = createAsyncThunk(
  'auth/fetchNgoRequest',
  async () => {
    const response = await fetchNgoRequest();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const createNgoAdminAsync = createAsyncThunk(
  'auth/createNgoAdmin',
  async (userdata) => {
    const response = await createNgoAdmin(userdata);
    // The value we return becomes the `fulfilled` action payload
    // return response.data;
  }
);

export const fetchNgoAdminAsync = createAsyncThunk(
  'auth/fetchNgoAdmin',
  async () => {
    const response = await fetchNgoAdmin();
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
      .addCase(createNgoRequestAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createNgoRequestAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.ngoreq = action.payload;
      })
      .addCase(fetchNgoRequestAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNgoRequestAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.ngoreq = action.payload;
      })
      .addCase(deleteNgoRequestAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteNgoRequestAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.ngoreq = action.payload;
      })
      .addCase(createNgoAdminAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createNgoAdminAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.ngoreq = action.payload;
      })
      .addCase(fetchNgoAdminAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNgoAdminAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.ngolist = action.payload;
      })
      
  },
});

export const { increment } = authSlice.actions;

export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectNGORequest = (state) => state.auth.ngoreq;
export const selectNGOList = (state) => state.auth.ngolist;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
