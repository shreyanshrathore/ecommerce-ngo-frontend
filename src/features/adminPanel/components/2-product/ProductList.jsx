import React from "react";
import { LuPencil } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts } from "../../../product-list/productSlice";
import { Link } from "react-router-dom";
import {productInfo} from '../../Redux/AdminSlice'

const ProductList = () => {
  const products = useSelector(selectAllProducts);
  console.log(products)
  return (
    <div className="bg-gray-100 p-4 flex justify-center w-full ">
      <div className="grid grid-cols-3 gap-4 flex-wrap">
        {products.map((item, index) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  const dispatch = useDispatch()
  return (
    // <div className="p-3 bg-orange-200 rounded-2xl w-max">
    //   <img
    //     className="w-52 rounded-2xl"
    //     src="https://i.dummyjson.com/data/products/3/thumbnail.jpg"
    //     alt=""
    //   />
    //   <div className="text-xl font-semibold">
    //     <div>Samsun Galaxy Fold</div>
    //     <div className="text-blue-600 flex justify-between pr-2 py-2">
    //       <div>$2500/-</div>
    //       <div className="flex gap-2">
    //         <div className="bg-orange-100 hover:bg-orange-300 h-8 w-8 rounded-full flex justify-center items-center p-1 cursor-pointer">
    //           <LuPencil />
    //         </div>
    //         <div className="bg-red-100 hover:bg-red-400 h-8 w-8 rounded-full flex justify-center items-center p-1 cursor-pointer">
    //           <MdOutlineDeleteOutline />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-72 pb-4 shadow-md bg-white">
      <div className="flex justify-center py-2">
        <img
          className="shadow-sm p-3 h-44"
          src={item.thumbnail}
          alt=""
        />
      </div>

      <div className="p-3 space-y-[-10px] h-52">
        {/* Name */}
        <div className="font-bold text-xl text-black p-2 w-full">
          {item.title}
        </div>
        <div className="font-semibold text-xl p-2 text-green-500">
          Current Price - $5500
        </div>
        <div className="font-semibold text-xl p-2 text-blue-500">
          Discounted Price - $5500
        </div>
        <div className="font-semibold text-xl p-2 text-gray-600">
          Stock - 12
        </div>
      </div>

      <div className="flex px-8 justify-between">
        <Link to={`/admin/productInfo`} onClick={()=>dispatch(productInfo(item))}>
          <div className="px-2 py-1 border-2 border-blue-400 rounded-3xl flex items-center gap-2 hover:bg-blue-400 hover:text-white text-blue-500 cursor-pointer">
            <p className="">
              <LuPencil />
            </p>
            <p className="text-lg font-semibold">Edit</p>
          </div>
        </Link>
        <div className="px-2 py-1 border-2 border-red-400 rounded-3xl flex items-center gap-2 cursor-pointer text-red-400 hover:bg-red-400 hover:text-white ">
          <p className="text-lg font-semibold">Delete</p>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
