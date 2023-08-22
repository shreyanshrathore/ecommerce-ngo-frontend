import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Protected from './features/auth/protected';
import ProtectedAdmin from './features/auth/ProtectedAdmin';
import { useDispatch, useSelector } from 'react-redux';
import PageNotFound from './pages/404'
import OrderSuccess from './pages/OrderSuccess'
import UserOrderPage from './pages/UserOrderPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/cart';
import Checkout from './pages/checkout';
import ProductDetailPage from './pages/ProductDetailPage'
import { useEffect } from 'react';
import { fetchItemsByUserId } from './features/cart/cartAPI';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import LogOut from './features/auth/compponents/LogOut';
import ForgotPasswordPage from './pages/forgotPasswordPage';
import AdminHome from './pages/AdminHome' 
import AdminProductDetailPage from './pages/AdminProductDetailPage'
import ProductForm from './features/admin/components/AdminProductForm';
import AdminProductForm from './features/admin/components/AdminProductForm';
import NavBar from './features/navbar/Navbar';
import AdminProductFormPage from './pages/AdminProductFormPage';
import AdminsOrderPage from './pages/AdminsOrderPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> <Protected> <Home/></Protected></div>,
  },
  {
    path: "/admin",
    element: <div> <ProtectedAdmin> <AdminHome/></ProtectedAdmin></div>,
  },
  {
    path: "/admin/product-form",
    element: <div> <ProtectedAdmin><AdminProductFormPage/></ProtectedAdmin></div>,
  },
  {
    path: "/admin/product-form/edit/:id",
    element: <div> <ProtectedAdmin> <AdminProductFormPage/></ProtectedAdmin></div>,
  },
  {
    path: "/product-detail/:id",
    element: <div><Protected><ProductDetailPage/></Protected></div>,
  },
  {
    path: "admin/product-detail/:id",
    element: <div><ProtectedAdmin><AdminProductDetailPage/></ProtectedAdmin></div>,
  },
  {
    path: "/checkout",
    element: <div><Protected><Checkout/></Protected></div>,
  },
  {
    path: "/cart",
    element: <div><Protected><Cart/></Protected></div>,
  },
  {
    path: "/login",
    element: <div><LoginPage/></div>,
  },
  {
    path: "/signup",
    element: <div><SignupPage/></div>,
  },
  {
    path: "*",
    element: <div><PageNotFound></PageNotFound></div>,
  },
  {
    path: "/order-success/:id",
    element: <div><OrderSuccess></OrderSuccess></div>,
  },
  {
    path: "/user/orders",
    element: <div><UserOrderPage></UserOrderPage></div>,
  },
  {
    path: "/user/profile",
    element: <div><UserProfilePage></UserProfilePage></div>,
  },
  {
    path: "/logout",
    element: <div><LogOut></LogOut></div>,
  },
  {
    path: "/forgot-password",
    element: <div><ForgotPasswordPage></ForgotPasswordPage></div>,
  },
  {
    path: "/admin/orders",
    element: <div><AdminsOrderPage></AdminsOrderPage></div>,
  },
]);


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser)
  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  },[dispatch, user])
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
