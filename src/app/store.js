import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product-list/productSlice'
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/cart/cartSlice'
import orderReducer from '../features/order/orderSlice'
import userReducer from '../features/user/userSlice'
import adminReducer from '../features/adminPanel/Redux/AdminSlice'
import ownerReducer from '../features/owner/ownerslice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
    admin: adminReducer,
    owner: ownerReducer
  },
});
