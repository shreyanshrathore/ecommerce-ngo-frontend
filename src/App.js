import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Protected from './features/auth/protected';
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> <Protected> <Home/></Protected></div>,
  },
  {
    path: "/product-detail/:id",
    element: <div><Protected><ProductDetailPage/></Protected></div>,
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
]);


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser)
  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
    console.log(user);
  },[dispatch, user])
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;