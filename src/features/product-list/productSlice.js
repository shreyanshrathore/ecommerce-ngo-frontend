import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts,fetchProductsByFilters, fetchBrands, fetchCategories, fetchProductById, createProduct, updateProduct, deleteProduct, fetchProductByAdmin, fetchProductReq, approveProduct } from './productAPI';

const initialState = {
  products: [],
  adminProduct: [],
  productRequest: [],
  brands:[],
  categories:[],
  status: 'idle',
  totalItems:0,
  selectedProduct:null
};


export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchProductReqAsync = createAsyncThunk(
  'product/fetchProductReq',
  async () => {
    const response = await fetchProductReq();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const approveProductAsync = createAsyncThunk(
  'product/approveProduct',
  async (id) => {
    console.log("aagya async k andar")
    const response = await approveProduct(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchProductByAdminAsync = createAsyncThunk(
  'product/fetchProductByAdmin',
  async () => {
    const response = await fetchProductByAdmin();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);


export const fetchAllProductByIdAsync = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
    const response = await fetchProductById(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilters',
  async ({filter,sort,pagination}) => {
    const response = await fetchProductsByFilters(filter,sort,pagination);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const createProductAsync = createAsyncThunk(
  'product/createProduct',
  async (product) => {
    const response = await createProduct(product);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const updateProductAsync = createAsyncThunk(
  'product/updateProduct',
  async (product) => {
    const response = await updateProduct(product);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const deleteProductAsync = createAsyncThunk(
  'product/deleteProduct',
  async (id) => {
    const response = await deleteProduct(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);



export const fetchBrandsAsync = createAsyncThunk(
  'product/fetchBrands',
  async () => {
    const response = await fetchBrands();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchCategoriesAsync = createAsyncThunk(
  'product/fetchCategories',
  async () => {
    const response = await fetchCategories();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);





export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProductByAdminAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByAdminAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.adminProduct = action.payload;
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.brands = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
      .addCase(fetchAllProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedProduct = action.payload;
      })
      .addCase(createProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products.push(action.payload);
      })
      .addCase(updateProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        state.products[index] = action.payload;
      })
      .addCase(deleteProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.products.findIndex((item)=>item.id === action.payload.id)
        state.products.splice(index,1)
      })
      .addCase(fetchProductReqAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductReqAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.productRequest = action.payload;
      })

  },
});

export const { clearSelectedProduct } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;
export const selectAdminProducts = (state) => state.product.adminProduct;
export const selectBrands = (state) => state.product.brands;
export const selectCategories = (state) => state.product.categories;
export const selectProductById = (state) => state.product.selectedProduct;
export const selectproductRequest = (state) => state.product.productRequest;

export const selectTotalItems = (state) => state.product.totalItems;

export default productSlice.reducer;
