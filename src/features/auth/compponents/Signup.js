import React from "react";
import ngo from "../../../assets/ngo-nongovernmental-organization-serve-specific-social-template-hand-drawn-illustration_2175-7898.avif";
import { useSelector, useDispatch } from "react-redux";
import { createUserAsync, selectLoggedInUser } from "../authSlice";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useSelector(selectLoggedInUser);

  return (
    <div>
      {user && <Navigate to="/" replace={true}></Navigate>}
      <div className="w-[100vw] h-[100vh] bg-pink-400 flex items-center justify-center">
        <img
          className="rounded-3xl h-[600px] ml-32 lg:block hidden mr-96"
          src={ngo}
          alt=""
        />
        <div className="h-[500px] w-96 bg-pink-200 rounded-3xl lg:absolute right-[10%] flex flex-col justify-center">
          <p className="text-2xl text-center mt-3 font-bold">
            Create a new Account
          </p>
          <form
            noValidate
            className="space-y-6 px-5 mt-4"
            onSubmit={handleSubmit((data) => {
              dispatch(
                createUserAsync({
                  email: data.email,
                  password: data.password,
                  role: "",
                })
              );
            })}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register("password", {
                    required: "Password must be included",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: `- at least 8 characters \n
                      - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number \n
                      - Can contain special characters`,
                    },
                  })}
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="Confirm password"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Confirm your password",
                    validate: (value, formValues) =>
                      value === formValues.password ||
                      "Password is not matching",
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>


          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Register a NGO{"   "}
            <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              <Link to={"/Ngo-Register"}>Regsiter</Link>
            </span>
          </p>
          <p className="mt-4 text-center text-sm text-gray-500">
            Already a member{" "}
            <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              <Link to={"/login"}>Login</Link>
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
