import React, { useEffect } from "react";
import ProductList from "../components/2-product/ProductList";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { fetchProductByAdmin } from "../../product-list/productAPI";

const AdminProducts = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default AdminProducts;
