import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  newProduct,
  selectProduct,
  selectnewProduct,
} from "../../Redux/AdminSlice";
import { DownloadOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Select, Space } from "antd";
import { Input } from "antd";
import {
  createProductAsync,
  fetchAllProductsAsync,
  selectAllProducts,
  selectBrands,
  selectCategories,
} from "../../../product-list/productSlice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { fetchAllProducts } from "../../../product-list/productAPI";
import { selectCurrentOrder } from "../../../order/orderSlice";
import { selectLoggedInUser } from "../../../auth/authSlice";

const AddnnewProduct = () => {
  // useEffect(()=>{
  //   dispatch(fetchAllProductsAsync)
  // }, [])
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const category = useSelector(selectCategories);
  const state = useSelector(selectnewProduct);
  const setState = (prop) => {
    dispatch(newProduct(prop));
  };

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const user = useSelector(selectLoggedInUser);
  console.log(user);
  return state ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setState(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="py-3 sm:flex">
            <div className="p-4 ">
              <h1 className="mb-4 text-2xl font-semibold">Product Settings</h1>
              <form
                onSubmit={handleSubmit((data) => {
                  // console.log(data);
                  const products = { ...data };
                  products.images = [
                    products.image1,
                    products.image2,
                    products.image3,
                    products.image4,
                  ];
                    delete products.image1;
                    delete products.image2;
                    delete products.image3;
                    delete products.image4;
                    (products.rating = 0);
                  console.log(products);
                  dispatch(createProductAsync(products))
                })}
              >
                <div className="flex space-x-4">
                  <div className="w-1/2 p-4 bg-white rounded-lg shadow-lg">
                    <h1 className="mb-4 text-2xl font-semibold">Image Links</h1>
                    <div className="mb-4">
                      <div>
                        <p className="font-serif text-xl font-semibold text-gray-600 ">
                          Thumbnail Image
                        </p>
                        <input
                          type="text"
                          name="thumbnail"
                          id="thumbnail"
                          {...register("thumbnail", {
                            required: `thumbnail is required`,
                          })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div>
                          <p className="font-serif text-xl font-semibold text-gray-600 ">
                            Image 1
                          </p>
                          <input
                            type="text"
                            name="image1"
                            id="image1"
                            {...register("image1", {
                              required: `image1 is required`,
                            })}
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="font-serif text-xl font-semibold text-gray-600 ">
                            Image 2
                          </p>
                          <input
                            type="text"
                            name="image2"
                            id="image2"
                            {...register("image2", {
                              required: `image2 is required`,
                            })}
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="font-serif text-xl font-semibold text-gray-600 ">
                            Image 1
                          </p>
                          <input
                            type="text"
                            name="image3"
                            id="image3"
                            {...register("image3", {
                              required: `image3 is required`,
                            })}
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className="font-serif text-xl font-semibold text-gray-600 ">
                            Image 4
                          </p>
                          <input
                            type="text"
                            name="image4"
                            id="image4"
                            {...register("image4", {
                              required: `image4 is required`,
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-1/2 p-4 bg-white rounded-lg shadow-lg">
                    <div>
                      <p className="font-serif text-xl font-semibold text-gray-600 ">
                        Product Title
                      </p>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        {...register("title", {
                          required: `title is required`,
                        })}
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="w-1/2">
                        <p className="font-serif text-2xl">Brands</p>
                        <select
                          {...register("brand", {
                            required: "Brand is required is Required",
                          })}
                        >
                          <option value="brand name">
                            ----Choose Brand Name
                          </option>
                          {brands.map((brand) => (
                            <option value={brand.value}>{brand.label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="w-1/2">
                        <p className="font-serif text-2xl">Categories</p>
                        <select
                          {...register("category", {
                            required: "Brand is required is Required",
                          })}
                        >
                          <option value="category name">
                            ----Choose category Name
                          </option>
                          {category.map((brand) => (
                            <option value={brand.value}>{brand.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex mt-4 space-x-4">
                      <div className="w-1/2">
                        <div>
                          <p className="font-serif text-xl font-semibold text-gray-600 ">
                            Regular Price
                          </p>
                          <input
                            type="text"
                            name="price"
                            id="price"
                            {...register("price", {
                              required: `price is required`,
                            })}
                          />
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div>
                          <p className="font-serif text-xl font-semibold text-gray-600 ">
                            Discount Percentage
                          </p>
                          <input
                            type="text"
                            name="discount"
                            id="discount"
                            {...register("discountPercentage", {
                              required: `image1 is required`,
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-4 space-x-4">
                      <div className="w-1/2">
                        <div>
                          <p className="font-serif text-xl font-semibold text-gray-600 ">
                            Current Stock
                          </p>
                          <input
                            type="text"
                            name="stock"
                            id="stock"
                            {...register("stock", {
                              required: `stock is required`,
                            })}
                          />
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div>
                          <p className="font-serif text-xl font-semibold text-gray-600 ">
                            Rating
                          </p>
                          <input
                            type="text"
                            name="rating"
                            id="rating"
                            {...register("rating", {
                              required: `rating is required`,
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center w-full px-12 py-4 font-serif text-xl font-semibold text-white">
                      <button
                        type="submit"
                        className="items-center py-1 bg-green-400 rounded-lg w-72"
                        // onClick={() => setState(false)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default AddnnewProduct;
