import React from "react";
import ngo from "../../../assets/ngo-nongovernmental-organization-serve-specific-social-template-hand-drawn-illustration_2175-7898.avif";
import { useSelector, useDispatch } from "react-redux";
import { createUserAsync, selectLoggedInUser } from "../authSlice";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FactoryIcon from "@mui/icons-material/Factory";
import PersonIcon from "@mui/icons-material/Person";
import { selectUserInfo } from "../../user/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useSelector(selectUserInfo);

  return (
    <div>
      {user && <Navigate to="/" replace={true}></Navigate>}
      <div className="w-[100vw] h-[100vh]  flex items-center justify-center">
        <img
          className="rounded-3xl h-[600px] ml-32 lg:block hidden mr-96"
          src={ngo}
          alt=""
        />
        <div className="h-auto py-4 w-96 bg-[#C9C2FF] rounded-3xl lg:absolute right-[10%] flex flex-col justify-center">
          <p className="mt-3 text-2xl font-bold text-center">
            Create a new Account
          </p>
          <form
            noValidate
            className="px-5 mt-4 space-y-6"
            onSubmit={handleSubmit((data) => {
              dispatch(
                createUserAsync({
                  email: data.email,
                  password: data.password,
                  role: "user",
                  addresses: []
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
          <div className="flex flex-col px-4 mt-4">

          <p className="flex mt-4 text-sm text-left text-gray-500">
              <div className="p-1 bg-blue-200 rounded-full w-min">
                <PersonIcon />
              </div>
              <div className="mt-1 ml-2">
                Already a member !
                <span className="ml-3 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  <Link to={"/login"}>Login</Link>
                </span>
              </div>
            </p>


            <p className="flex mt-4 text-sm text-left text-gray-500">
              <div className="p-1 bg-blue-200 rounded-full w-min ">
                <FactoryIcon />
              </div>
              <div className="mt-1 ml-2">
                Register a new NGO
                <span className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  <Link to={"/Ngo-Register"}>Regsiter</Link>
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
