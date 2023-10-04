import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../../Redux/AdminSlice";
import { DownloadOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Select, Space } from "antd";
import { Input } from "antd";
import {
  fetchAllProductsAsync,
  selectAllProducts,
  selectBrands,
  selectCategories,
} from "../../../product-list/productSlice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { fetchAllProducts } from "../../../product-list/productAPI";

const ProductInfo = () => {
  // useEffect(()=>{
  //   dispatch(fetchAllProductsAsync)
  // }, [])
  const product = useSelector(selectAllProducts);
  console.log(product);
  const dispatch = useDispatch()
  const brands = useSelector(selectBrands);
  const category = useSelector(selectCategories);

  console.log(product);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (product) {
      setValue("title", product.title);
      setValue("description", product.description);
      setValue("price", product.price);
      setValue("discountPercentage", product.discountPercentage);
      setValue("thumbnail", product.thumbnail);
      setValue("stock", product.stock);
      setValue("brand", product.brand);
      setValue("category", product.category);
      setValue("title", product.title);
      setValue("image1", product.images[0]);
      setValue("image2", product.images[1]);
      setValue("image3", product.images[2]);
      setValue("image4", product.images[3]);
    }
  }, [setValue]);

  // useEffect(()=>{
  //   console.log(value)
  // },[setValue])

  return (
    <div className=" p-4">
      <h1 className="text-2xl font-semibold mb-4">Product Settings</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          const products = { ...data };
          products.images = [
            products.image1,
            products.image2,
            products.image3,
            products.image4,
          ];
          products.rating = product.rating;
          delete products["image1"];
          delete products["image2"];
          delete products["image3"];
          delete products["image4"];
          console.log("First", product);
          console.log("Second", products);
          console.log("category", products.category);
        })}
      >
        <div className="flex space-x-4">
          {/* Left Column */}
          <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-4">Image Links</h1>
            <div className="mb-4">
              <Inputcard heading="Thumbnail Image" content={"thumbnail"} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Inputcard heading="First Image" content={"image1"} />
              </div>
              <div>
                <Inputcard heading="Second Image" content={"image2"} />
              </div>
              <div>
                <Inputcard heading="Third Image" content={"image3"} />
              </div>
              <div>
                <Inputcard heading="Fourth Image" content={"image4"} />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg">
            <Inputcard heading="Product Name" content={"title"} />
            <div className="flex justify-between">
              <div className="w-1/2">
                <p className="text-2xl font-serif">Brands</p>
                <select
                    {...register("brand", {
                      required: "Brand is required is Required",
                    })}
                  >
                    <option value="brand name">----Choose Brand Name</option>
                    {brands.map((brand) => (
                      <option value={brand.value}>{brand.label}</option>
                    ))}
                  </select>
              </div>
              <div className="w-1/2">
                <p className="text-2xl font-serif">Categories</p>
                <select
                    {...register("category", {
                      required: "Brand is required is Required",
                    })}
                  >
                    <option value="category name">----Choose category Name</option>
                    {category.map((brand) => (
                      <option value={brand.value}>{brand.label}</option>
                    ))}
                  </select>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <div className="w-1/2">
                <Inputcard heading="Regular Price" content={"price"} />
              </div>
              <div className="w-1/2">
                <Inputcard
                  heading="Discount Percentage"
                  content={"discountPercentage"}
                />
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <div className="w-1/2">
                <Inputcard heading="Current Stock" content={"stock"} />
              </div>
              <div className="w-1/2">
                <Inputcard
                  heading="Discount Percentage"
                  content={product.title}
                />
              </div>
            </div>
            <div className="px-12 justify-center  flex w-full py-4 text-xl font-serif font-semibold text-white">
              <button className=" bg-green-400 rounded-lg py-1 w-72 items-center">
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const Inputcard = ({ heading, content }) => {
  const product = useSelector(selectProduct);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (product) {
      setValue("title", product.title);
      setValue("description", product.description);
      setValue("price", product.price);
      setValue("discountPercentage", product.discountPercentage);
      setValue("thumbnail", product.thumbnail);
      setValue("stock", product.stock);
      setValue("brand", product.brand);
      setValue("category", product.category);
      setValue("title", product.title);
      setValue("image1", product.images[0]);
      setValue("image2", product.images[1]);
      setValue("image3", product.images[2]);
      setValue("image4", product.images[3]);
    }
  }, [setValue]);

  return (
    <div>
      <p className="text-xl text-gray-600 font-semibold font-serif ">
        {heading}
      </p>
      <input
        type="text"
        name="title"
        id="title"
        {...register(content, {
          required: "Title is required is Required",
        })}
        // className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
      />
    </div>
  );
};

export default ProductInfo;
