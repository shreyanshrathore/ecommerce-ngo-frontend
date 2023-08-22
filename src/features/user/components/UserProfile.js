import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  fetchLoggedInUserOrdersAsync,
  selectUserInfo,
  selectUserOrders,
  updateUserAsync,
} from "../userSlice";
import { selectLoggedInUser } from "../../auth/authSlice";

export default function UserOrders() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const [edit, setEdit] = useState(0);
  const [Index, setIndex] = useState(null);
  const [showAddress, setShowAdress] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  // useEffect(() => {
  //   dispatch(fetchLoggedInUserOrdersAsync(user.id));
  // }, [dispatch]);

  const handleEdit = (index) => {
    setEdit(Index + 1);
    setIndex(index);
    const address = user.addresses[index];
    setValue("name", address.name);
    setValue("email", address.email);
    setValue("phone", address.phone);
    setValue("street", address.street);
    setValue("state", address.state);
    setValue("city", address.city);
    setValue("pinCode", address.pinCode);
  };



  const handleRemove = (e, index) => {
    const newUser = { ...user, addresses: [...user.addresses] };
    newUser.addresses.splice(index, 1);
    dispatch(updateUserAsync(newUser));
  };

  const orders = useSelector(selectUserOrders);
  return (
    <div>
      <div>
        <div>
          <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
                Name : 
              </h1>
              <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
                Email : {user.email}
              </h3>
              <p>Role: {user.role}</p>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <button
                type="submit"
                className="mb-6 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => setShowAdress(1)}
              >
                Add address
              </button>

              <p className="mt-0.5 text-sm text-gray-500">Your Address :</p>
              {/* dkshgjhjsghksjdbkjhsdjkfjhskljdkfjhskdhfkjsdhfjsdflksjdf */}
              <Form setShowAdress = {setShowAdress} showAddress = {showAddress}  edit={edit} setEdit={setEdit} user={user} Index={Index} setIndex = {setIndex} handleEdit = {handleEdit}/>
              {user.addresses && user.addresses.map((address, index) => (
                <div
                  key={address.id}
                  className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                >
                  <div className="flex gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {address.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {address.street}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {address.pinCode}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      Phone: {address.phone}
                    </p>
                    <p className="text-sm leading-6 text-gray-500">
                      {address.city}
                    </p>
                  </div>
                  <div className="grid grid-rows-2">
                    <button
                      type="button"
                      className="font-bold text-base text-indigo-600 hover:text-indigo-500"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="font-bold text-base text-indigo-600 hover:text-indigo-500"
                      onClick={(e) => handleRemove(e, index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Form = ({edit, setEdit, user, Index, setIndex, showAddress, setShowAdress}) => {
  const dispatch = useDispatch()

  const handleEditForm = (data) => {
    const newUser = { ...user, addresses: [...user.addresses] };
    newUser.addresses.splice(Index, 1, data);
    dispatch(updateUserAsync(newUser));
    setEdit(0);
  };

  const handleEdit = (index) => {
    setEdit(Index + 1);
    setIndex(index);
    const address = user.addresses[index];
    setValue("name", address.name);
    setValue("email", address.email);
    setValue("phone", address.phone);
    setValue("street", address.street);
    setValue("state", address.state);
    setValue("city", address.city);
    setValue("pinCode", address.pinCode);
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const handleCancel = () =>{
    setEdit(0)
    setShowAdress(0)
  }

  const handleAddForm = (data) =>{
    const newUser = { ...user, addresses: [...user.addresses, data] };
    // newUser.addresses.splice(Index, 1, data);
    dispatch(updateUserAsync(newUser));
    setShowAdress(0)
  }

  return(

  <>
    <form
      className={`bg-white px-5 mb-10 mt-12 ${(edit || showAddress) ? "block" : "hidden"}`}
      noValidate
      onSubmit={handleSubmit((data) => {
        if(showAddress){
          handleAddForm(data)
        }
        else{
        handleEditForm(data);
        }
      })}
    >
      {edit && handleEdit(Index)}
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="full-name"
                  id="first-name"
                  {...register("name", {
                    required: "name is required",
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...register("email", {
                    required: "email is required",
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone No
              </label>
              <div className="mt-2">
                <input
                  {...register("phone", {
                    required: "Phone No. is required is required is required",
                  })}
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  {...register("street", {
                    required: "street Adress is required is required",
                  })}
                  type="text"
                  name="street"
                  id="street"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  {...register("city", {
                    required: "City is required",
                  })}
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="state"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                state
              </label>
              <div className="mt-2">
                <input
                  {...register("state", {
                    required: "state is required",
                  })}
                  type="text"
                  name="state"
                  id="state"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="pinCode"
                  id="pinCode"
                  {...register("pinCode", {
                    required: "pin Code is required",
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={handleCancel }
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Edit
          </button>
        </div>
      </div>
    </form>
  </>)
};
