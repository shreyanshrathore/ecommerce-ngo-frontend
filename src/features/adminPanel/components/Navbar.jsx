import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon1 from "../assets/navicons/Dashboard";
import Icon2 from "../assets/navicons/Product";
import Icon3 from "../assets/navicons/Customer";
import Icon4 from "../assets/navicons/Orders";
import Icon5 from "../assets/navicons/Customer";
import Icon6 from "../assets/navicons/Transaction";
import Icon7 from "../assets/navicons/Settings";
import Icon8 from "../assets/navicons/Logout";
import { useDispatch, useSelector } from "react-redux";
import { selectOptions } from "../Redux/AdminSlice";
import Orders from "../pages/AdminOrders";
import Dashboard from "../pages/AdminDashboard";
import Products from "../pages/AdminProducts";
import {optionChange} from '../Redux/AdminSlice.js'

const data = [
  {
    icon: Icon1,
    title: "Dashboard",
    send: "/admin",
  },
  {
    icon: Icon2,
    title: "Product",
    send: "/admin/products",
  },
  // {
  //   icon: Icon3,
  //   title: "Cutomers",
  //   send: "/customers",
  // },
  {
    icon: Icon4,
    title: "Orders",
    send: "/admin/order",
  },
  // {
  //   icon: Icon5,
  //   title: "shipment",
  //   send: "/shipments",
  // },
  // {
  //   icon: Icon6,
  //   title: "Transactions",
  //   send: "/transactions",
  // },
  // {
  //   icon: Icon7,
  //   title: "Setting",
  //   send: "/setting",
  // },
  {
    icon: Icon8,
    title: "Logout",
    send: "/logout",
  },
];

const optionList = [Dashboard, Orders];
const Navbar = ({children}) => {
  const [state, setState] = useState(0);
  const dispatch = useDispatch()
  const optionHandler = (key) => {
    setState(key);
    dispatch(optionChange(key));
  };
  useEffect(()=>{
    dispatch(optionChange(state));
  },[state])
  return (
    <div>
      <div className=" w-72 pl-12 pt-8 fixed">
        <div>
          <h1 className="text-2xl font-base text-gray-600 font-bold py-6">
            ADMIN PANEL
          </h1>
          {/* <Icon2 fill='orange' stroke='green'/> */}
        </div>

        <div className="space-y-12 ">
          {data.map((item, index) => (
            
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => optionHandler(index)}
              >
            <Link to={`${item.send}`} style={{ textDecoration: 'none' }}>
              <Buttons
                prop={item}
                index={index}
                state={state}
                setState={setState}
                />
                </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-64">
        {children}
      </div>
    </div>
  );
};

const Buttons = ({ prop, index, state, setState }) => {
  const Component = prop.icon;
  let fill = "orange";
  let textCol = "text-orange-500";
  index == state ? (fill = "orange") : (fill = "gray");
  index == state ? (textCol = "text-orange-500") : (textCol = "text-gray-500");
  return (
    <div className="flex space-x-6" onClick={() => setState(index)}>
      <Component fill={fill} />
      <div className={`text-xl font-base font-semibold ${textCol} `}>
        {prop.title}
      </div>
    </div>
  );
};

export default Navbar;
