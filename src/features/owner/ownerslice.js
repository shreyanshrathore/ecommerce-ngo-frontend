import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createNgoAdmin, createNgoRequest, deleteNgoRequest, fetchNgoAdmin, fetchNgoRequest} from './ownerapi';


const initialState = {
  status: 'idle',
  ngoreq: [],
  ngolist: [],
  error: null
};


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





export const ownerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
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

export const { increment } = ownerSlice.actions;

export const selectNGORequest = (state) => state.owner.ngoreq;
export const selectNGOList = (state) => state.owner.ngolist;
export const selectError = (state) => state.owner.error;

export default ownerSlice.reducer;
