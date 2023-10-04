import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import FirstPage from "./pages/AdminDashboard";
import Orders from "./pages/AdminOrders";
import Navbar from "./components/Navbar";

const AdminPanel = () => {
  return (
    <div className="flex">
      <Navbar >
        <Orders/>
      </Navbar>
    </div>
  );
};

export default AdminPanel;
