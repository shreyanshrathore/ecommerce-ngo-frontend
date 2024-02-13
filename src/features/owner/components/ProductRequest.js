import React, { useEffect, useState } from "react";
import { LuPencil } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductAsync,
  fetchProductReqAsync,
  selectAdminProducts,
  selectproductRequest,
} from "../../product-list/productSlice";
import { Link } from "react-router-dom";
import { newProduct, productInfo } from "../../adminPanel/Redux/AdminSlice";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import AddnnewProduct from "../../adminPanel/components/2-product/AddnewProduct";
import NavBar from "../../navbar/Navbar";
const ProductRequest = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductReqAsync());
  }, []);
  const products = useSelector(selectproductRequest);
  console.log(products);
  return (
    <div>
      <NavBar >


      <div className="relative flex justify-center w-full p-4 bg-gray-100 ">
        <div className="grid flex-wrap grid-cols-3 gap-4">

          {products && products.map((item, index) => (
            <Card item={item} />
          ))}

          {products.length == 0 && "No product Request is here"}
        </div>
      </div>
      </NavBar>

    </div>
  );
};

const Card = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className={`${
          item.approved ? "bg-green-100" : "bg-red-100"
        } pb-4 shadow-md w-72`}
        onClick={() => console.log(item)}
      >
        <div className="flex justify-center py-2">
          <img className="p-3 shadow-sm h-44" src={item.thumbnail} alt="" />
        </div>

        <div className="p-3 space-y-[-10px] h-52">
          {/* Name */}
          <div className="w-full p-2 text-xl font-bold text-black">
            {item.title}
          </div>
          <div className="p-2 text-xl font-semibold text-green-500">
            Current Price - $5500
          </div>
          <div className="p-2 text-xl font-semibold text-blue-500">
            Discounted Price - $5500
          </div>
          <div className="p-2 text-xl font-semibold text-gray-600">
            Stock - 12
          </div>
        </div>

        <div className="flex justify-between px-8">
          <Link to={`/product-detail/${item.id}`} key={item.id}>
            <div className="flex items-center gap-2 px-2 py-1 text-blue-500 border-2 border-blue-400 cursor-pointer rounded-3xl hover:bg-blue-400 hover:text-white">
              <p className="">
                <LuPencil />
              </p>
              <p className="text-lg font-semibold">View</p>
            </div>
          </Link>
          <div
            className="flex items-center gap-2 px-2 py-1 text-red-400 border-2 border-red-400 cursor-pointer rounded-3xl hover:bg-red-400 hover:text-white "
            onClick={() => dispatch(deleteProductAsync(item.id))}
          >
            <p className="text-lg font-semibold">Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRequest;
