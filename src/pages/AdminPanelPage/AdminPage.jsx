import React from "react";
import Navbar from "../../features/adminPanel/components/Navbar";
import { useSelector } from "react-redux";
import { selectOptions } from "../../features/adminPanel/Redux/AdminSlice";
import Dashboard from "../../features/adminPanel/pages/AdminDashboard";
import Orders from "../../features/adminPanel/pages/AdminOrders";
import Products from "../../features/adminPanel/pages/AdminProducts";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../../features/adminPanel/pages/AdminDashboard";
import AdminOrder from "../../features/adminPanel/pages/AdminOrders";
import AdminProducts from "../../features/adminPanel/pages/AdminProducts";
import AdminProductInfo from "../../features/adminPanel/pages/AdminProductInfo";

const AdminPage = () => {
  const option = useSelector(selectOptions);

  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={ <AdminDashboard /> } />
          <Route path="/products" element={<AdminProducts/>} />
          <Route path="/productInfo" element={<AdminProductInfo />} />
          <Route path="/order" element={<AdminOrder />} />
        </Routes>
      </Navbar>
    </div>
  );
};

export default AdminPage;
