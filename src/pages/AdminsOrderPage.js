import React from "react";
import AdminOrders from "../features/admin/components/AdminOrders";
import NavBar from "../features/navbar/Navbar";

const AdminsOrderPage = () => {
  return (
    <div>
      <NavBar>
        <AdminOrders></AdminOrders>
      </NavBar>
    </div>
  );
};

export default AdminsOrderPage;
