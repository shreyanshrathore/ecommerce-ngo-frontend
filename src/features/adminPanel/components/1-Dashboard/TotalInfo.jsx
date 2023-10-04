import React from "react";

import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidShoppingBags } from "react-icons/bi";
import { BsFillPrinterFill } from "react-icons/bs";
const TotalInfo = () => {
  const data = [
    {
      icon: BsPerson,
      title: "Total Visits",
      value: 200,
      iconCol: "text-orange-500",
    },
    {
      icon: AiOutlineShoppingCart,
      title: "Total Sales",
      value: 480,
      iconCol: "text-purple-600",
    },
    {
      icon: BiSolidShoppingBags,
      title: "Total Made",
      value: 500,
      iconCol: "text-orange-500",
    },
    {
      icon: BsFillPrinterFill,
      title: "Orders Completed",
      value: 2000,
      iconCol: "text-red-400",
    },
  ];
  const TopProducts = [
    {
      item: "Samsung Phone",
      sale: 4,
      price: "$340",
      discPrice: "$260",
    },
    {
      item: "Apple Phone",
      sale: 4,
      price: "$340",
      discPrice: "$240",
    },
  ];

  return (
    <div className="w-[700px] bg-white p-4 rounded-2xl shadow-md ">
      <div className="flex justify-between">
        {data.map((item, index) => (
          <Info props={item} />
        ))}
      </div>

      <div>
        <h1 className="text-2xl text-gray-500 font-semibold py-1">
          Top Products
        </h1>
        <div className="space-y-2">
          {TopProducts.map((item, index) => (
            <TopProduct props={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Info = ({ props }) => {
  const Content = props.icon;
  return (
    <div>
      <div className="flex bg-gray-200 w-32 h-20 rounded-2xl px-1 py-3 gap-2">
        <div className={`${props.iconCol} text-4xl`}>
          <Content />
        </div>
        <div className="text-gray-500 text-sm font-semibold">
          <h1 className="text-xs">{props.title}</h1>
          <p>{props.value}</p>
        </div>
      </div>
    </div>
  );
};

const TopProduct = ({ props }) => {
  const heading = "text-xl text-gray-400 font-semibold ";
  return (
    <div className="flex bg-gray-200 px-2 py-1 rounded-lg">
      <div className="w-52">
        <h1 className={`${heading}`}>Item</h1>
        <p className="font-semibold">{props.item}</p>
      </div>
      <div className="font-semibold flex justify-between w-full px-4">
        <div>
          <h1 className={`${heading}`}>Sale</h1>
          <p>{props.sale}</p>
        </div>
        <div>
          <h1 className={`${heading}`}>Price</h1>
          <p>{props.price}</p>
        </div>
        <div>
          <h1 className={`${heading}`}>Discounted Price</h1>
          <p>{props.discPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default TotalInfo;
