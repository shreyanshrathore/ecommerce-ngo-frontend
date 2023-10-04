import React from "react";
import Chart from "../components/1-Dashboard/Chart";
import PieChart from "../components/1-Dashboard/PieChart";
import TotalInfo from "../components/1-Dashboard/TotalInfo";
import Navbar from "../../adminPanel/components/Navbar";

const AdminDashboard = () => {
  return (
    <div>
        <div className="flex w-full">
          <div className="bg-gray-100 w-full">
            <div className=" w-full flex px-12 h-auto pt-6">
              <Chart />
              <PieChart />
            </div>
            <div className="w-full flex px-12 h-auto p-6">
              <TotalInfo />
            </div>
          </div>
        </div>
    </div>
  );
};

export default AdminDashboard;
