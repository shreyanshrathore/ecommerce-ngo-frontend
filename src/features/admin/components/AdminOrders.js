import React, { useEffect, useState } from "react";
import {
  fetchAllOrdersAsync,
  selectOrders,
  selectTotalOrder,
  updateCartAsync,
} from "../../order/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { ITEMS_PER_PAGE, discountedPrice } from "../../../app/constants";
import { PencilIcon, EyeIcon, ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import Pagination from "../../common/Pagination";

const AdminOrders = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const totalOrders = useSelector(selectTotalOrder);
  const [editableOrderId, setEditableOrderId] = useState(-1);
  const [sort, setSort] = useState({});
  const handleEdit = (order) => {
    setEditableOrderId(order.id);
  };
  const handleShow = () => {
    // console.log('handleShow');
  };

  // console.log(orders);

  const handleUpdate = (e, order) => {
    const updatedOrder = { ...order, status: e.target.value };
    dispatch(updateCartAsync(updatedOrder));
    setEditableOrderId(-1);
  };

  const handlePage = (page) => {
    setPage(page);
  };
  const handleSort = (sortOption) => {
    const sort = { _sort: sortOption.sort, _order: sortOption.order };
    // console.log({ sort });
    setSort(sort);
  };
  const chooseColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-purple-200 text-purple-600";
      case "dispatched":
        return "bg-yellow-200 text-yellow-600";
      case "delivered":
        return "bg-green-200 text-green-600";
      case "cancelled":
        return "bg-red-200 text-red-600";
      default:
        return "bg-purple-200 text-purple-600";
    }
  };

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync({ sort, pagination }));
  }, [dispatch, page, sort]);
  return (
    <div>
      <>
        {/* component */}
        <div className="overflow-x-auto">
          <div className="flex items-center justify-center overflow-hidden font-sans bg-gray-100 ">
            <div className="w-full lg:w-5/6">
              <div className="my-6 bg-white rounded shadow-md">
                <table className="w-full table-auto ">
                  <thead>
                    <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                      <th className="px-6 py-3 text-left">Order Number</th>
                      <th className="px-6 py-3 text-left">Items</th>
                      <th
                        className="px-6 py-3 text-center"
                        onClick={(e) =>
                          handleSort({
                            sort: "total",
                            order: sort?._order === "asc" ? "desc" : "asc",
                          })
                        }
                      >
                        Total Amount
                        {sort._sort === 'totalAmount' &&
                      (sort._order === 'asc' ? (
                        <ArrowUpIcon className="inline w-4 h-4"></ArrowUpIcon>
                      ) : (
                        <ArrowDownIcon className="inline w-4 h-4"></ArrowDownIcon>
                      ))}
                      </th>
                      <th className="px-6 py-3 text-center">
                        Shipping Address
                      </th>
                      <th className="px-6 py-3 text-center">Status</th>
                      <th className="px-6 py-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-light text-gray-600">
                    {orders.map((order) => (
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="px-6 py-3 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-medium">{order.id}</span>
                          </div>
                        </td>
                        <td className="px-6 py-3 text-left">
                          {order.products.map((item) => (
                            <div className="flex items-center">
                              <div className="mr-2">
                                <img
                                  className="w-6 h-6 rounded-full"
                                  src={item.thumbnail}
                                  alt="not found"
                                />
                              </div>
                              <span>
                                {item.title} - #{item.quantity} -- $
                                {discountedPrice(item)}
                              </span>
                            </div>
                          ))}
                        </td>
                        <td className="px-6 py-3 text-center">
                          <div className="flex items-center justify-center">
                            ${order.total}
                          </div>
                        </td>
                        <td className="px-6 py-3 text-center">
                          <div className="items-center justify-center ">
                            <div>{order.address.name}</div>
                            <div>{order.address.email}</div>
                            <div>{order.address.phone}</div>
                            <div>{order.address.street}</div>
                            <div>{order.address.city}</div>
                            <div>{order.address.state}</div>
                            <div>{order.address.pinCode}</div>
                          </div>
                        </td>
                        <td className="px-6 py-3 text-center">
                          {order.id !== editableOrderId ? (
                            <span
                              className={`${chooseColor(
                                order.status
                              )}  py-1 px-3 rounded-full text-xs`}
                            >
                              {order.status}
                            </span>
                          ) : (
                            <select onChange={(e) => handleUpdate(e, order)}>
                              <option value="pending">Pending</option>
                              <option value="dispatched">Dispatched</option>
                              <option value="delivered">Delivered</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          )}
                        </td>
                        <td className="px-6 py-3 text-center">
                          <div className="flex justify-center item-center">
                            <div
                              onClick={(e) => handleShow(order)}
                              className="w-6 mr-2 transform hover:text-purple-500 hover:scale-110"
                            >
                              <EyeIcon />
                            </div>
                            <div
                              onClick={(e) => handleEdit(order)}
                              className="w-6 mr-2 transform hover:text-purple-500 hover:scale-110"
                            >
                              <PencilIcon />
                            </div>
                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Pagination
            page={page}
            setPage={setPage}
            handlePage={handlePage}
            totalItems={totalOrders}
          ></Pagination>
        </div>
      </>
    </div>
  );
};

export default AdminOrders;
