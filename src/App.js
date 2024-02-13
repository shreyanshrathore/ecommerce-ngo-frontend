import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Protected from "./features/auth/protected";
import ProtectedAdmin from "./features/auth/ProtectedAdmin";
import { useDispatch, useSelector } from "react-redux";
import PageNotFound from "./pages/404";
import OrderSuccess from "./pages/OrderSuccess";
import UserOrderPage from "./pages/UserOrderPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Cart from "./features/cart/cart";
import Checkout from "./pages/checkout";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useEffect } from "react";
import { fetchItemsByUserId } from "./features/cart/cartAPI";
import {
  checkUserAsync,
  entity,
  selectEntity,
  selectLoggedInUser,
} from "./features/auth/authSlice";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import UserProfilePage from "./pages/UserProfilePage";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import LogOut from "./features/auth/compponents/LogOut";
import ForgotPasswordPage from "./pages/forgotPasswordPage";
import AdminProductDetailPage from "./pages/AdminProductDetailPage";
// import NavBar from './features/navbar/Navbar';
import Navbar from "./features/adminPanel/components/Navbar";
import AdminProductFormPage from "./pages/AdminProductFormPage";
import AdminsOrderPage from "./pages/AdminsOrderPage";
import NgoRegisterPage from "./pages/NgoRegisterPage";
import NGO_request from "./features/owner/components/NGORequest";
import ProductInfo from "./features/adminPanel/components/2-product/ProductInfo";
import AdminDashboard from "./features/adminPanel/pages/AdminDashboard";
import AdminProducts from "./features/adminPanel/pages/AdminProducts";
import AdminOrders from "./features/adminPanel/pages/AdminOrders";
import AdminPage from "./pages/AdminPanelPage/AdminPage";
import {
  fetchAllProductsAsync,
  fetchProductByAdminAsync,
} from "./features/product-list/productSlice";
import { fetchProductByAdmin } from "./features/product-list/productAPI";
import Navu from "./features/adminPanel/components/Navbar";
import AdminLayout from "./pages/AdminPanelPage/AdminLayout";
import ProductRequest from "./features/owner/components/ProductRequest";

// const AdminRoute = () => (
//   <div>
//     <ProtectedAdmin>
//       <div className="flex">
//         <Navbar />
//         <div className="w-full ml-64">
//           <Routes>
//             <Route path="/admin/dashboard" element={<Dashboard />} />
//             <Route path="/admin/adminOrders" element={<Orders />} />
//           </Routes>
//         </div>
//       </div>
//     </ProtectedAdmin>
//   </div>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {" "}
        <Protected>
          {" "}
          <Home />
        </Protected>
      </div>
    ),
  },
  {
    path: "/admin/*",
    element: (
      <AdminLayout> <AdminPage /> </AdminLayout>
    ),
  },

  {
    path: "/product_request",
    element: (
      <ProductRequest/>
    ),
  },


  {
    path: "/product-detail/:id",
    element: (
      <div>
        {/* <Protected> */}
          <ProductDetailPage />
        {/* </Protected> */}
      </div>
    ),
  },
  {
    path: "admin/product-detail/:id",
    element: (
      <div>
        <ProtectedAdmin>
          <AdminProductDetailPage />
        </ProtectedAdmin>
      </div>
    ),
  },
  {
    path: "/checkout",
    element: (
      <div>
        <Protected>
          <Checkout />
        </Protected>
      </div>
    ),
  },
  {
    path: "/cart",
    element: (
      <div>
        <Protected>
          <Cart />
        </Protected>
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <LoginPage />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <SignupPage />
      </div>
    ),
  },
  {
    path: "/Ngo-Register",
    element: (
      <div>
        <NgoRegisterPage />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <PageNotFound></PageNotFound>
      </div>
    ),
  },
  {
    path: "/order-success/:id",
    element: (
      <div>
        <OrderSuccess></OrderSuccess>
      </div>
    ),
  },
  {
    path: "/user/orders",
    element: (
      <div>
        <UserOrderPage></UserOrderPage>
      </div>
    ),
  },
  {
    path: "/user/profile",
    element: (
      <div>
        <UserProfilePage></UserProfilePage>
      </div>
    ),
  },
  {
    path: "/logout",
    element: (
      <div>
        <LogOut></LogOut>
      </div>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <div>
        <ForgotPasswordPage></ForgotPasswordPage>
      </div>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <div>
        <AdminsOrderPage></AdminsOrderPage>
      </div>
    ),
  },
  {
    path: "/admin/ngo_request",
    element: (
      <div>
        <NGO_request />
      </div>
    ),
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    if (user && user.role == "user") {
      dispatch(fetchLoggedInUserAsync());
      dispatch(fetchItemsByUserIdAsync());
      dispatch(fetchAllProductsAsync());
    }
  }, [dispatch, user]);
  const entity = useSelector(selectEntity);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
