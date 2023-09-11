import React from "react";
import ngo from "../../../assets/ngo-nongovernmental-organization-serve-specific-social-template-hand-drawn-illustration_2175-7898.avif";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import {
  checkUserAsync,
  selectError,
  selectLoggedInUser,
} from '../authSlice';
import { Link, Navigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const error = useSelector(selectError)
  const user = useSelector(selectLoggedInUser)

  const onSubmit = (data) => {
    dispatch(checkUserAsync({ email: data.email, password: data.password }))
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-pink-400 flex items-center justify-center">
      {user && <Navigate to="/" replace={true}></Navigate>}
      <img className="rounded-3xl h-[600px] ml-32 lg:block hidden mr-96" src={ngo} alt="" />
      <div className="h-[500px] w-96 bg-pink-200 rounded-3xl lg:absolute right-[10%] flex flex-col justify-center">
        <p className="text-2xl text-center mt-3 font-bold">Login Here!</p>
        <form className="mt-4 px-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-lg">Email Address</label>
            <input
              id="email"
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
                  message: "Email is not valid",
                },
              })}
              type="email"
              className="input input-bordered w-full max-w-xs mt-1 rounded-lg"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label className="text-lg mt-4">Password</label>
            <input
              id="password"
              {...register("password", {
                required: "Password must be included",
              })}
              type="password"
              className="input input-bordered w-full max-w-xs mt-1 rounded-lg"
            />
            {error && <p className='text-red-500'>{error.message}</p>}
          </div>
          <div className="w-full flex justify-center mt-8">
            <button type="submit" className="bg-pink-400 p-2 w-24 rounded-lg">Submit</button>
          </div>
          <div className="flex mt-6 gap-4">
            <p>Not a Member?</p> <Link to="/signup" className="text-purple-500 cursor-pointer">Sign up here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
