import React from "react";
import Table from "../components/3-Orders/Table";
import Navbar from "../components/Navbar";
import AdminOrders from '../../admin/components/AdminOrders'

const AdminOrder = () => {
  return (
    <div>

      <div className="w-full">
        {/* <Table /> */}
        <AdminOrders/>
      </div>
    </div>
  );
};

export default AdminOrder;
