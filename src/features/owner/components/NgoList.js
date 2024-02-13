import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNgoAdminAsync, deleteNgoRequestAsync, fetchNgoAdminAsync, selectNGOList } from "../../owner/ownerslice";
import {
  PencilIcon,
  EyeIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";


const NgoList = () => {
  const[state, setState] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNgoAdminAsync());
  }, []);
  const adminList = useSelector(selectNGOList);
  console.log(adminList)
  return (
    <div>
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
                        <th className="px-6 py-3 text-center">Serial Num.</th>
                        <th className="px-6 py-3 text-center">NGO Name</th>
                        <th className="px-6 py-3 text-center">Admin Name</th>
                        <th className="px-6 py-3 text-left">View </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-light text-gray-600">
                      {adminList.map((admin, index) => (
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                          <td className="px-6 py-3 text-center">{index+1  }</td>

                          <td className="px-6 py-3 text-center">
                            {admin.ngoInformation[0].name}
                          </td>

                          <td className="px-6 py-3 text-center">
                            {admin.ngoInformation[0].details}
                          </td>

                          <td className="px-6 py-3 text-center">
                            <div className="w-6">
                              <EyeIcon onClick={()=>setState(true)}/>
                            </div>
                            <RequestPage state={state} setState= {setState} num = {index} ans = {admin} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default NgoList;






const RequestPage = ({ state, setState, ans }) => {
  const dispatch = useDispatch();
  const handleit = () => {
    const updatedObject = { ...ans, role: "admin" };

    console.log(updatedObject);
    dispatch(createNgoAdminAsync(updatedObject));
    dispatch(deleteNgoRequestAsync(updatedObject.id))
  };

  return state ? (
    <div className="fixed inset-0 z-10 overflow-y-auto h-[100vh]">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setState(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full  max-w-6xl p-4 mx-auto bg-white rounded-md h-[90vh] shadow-lg">
          <div className="container p-5 mx-auto my-5">
            <div className="md:flex no-wrap md:-mx-2">
              <div className="w-full md:w-3/12 md:mx-2">
                <div className="p-3 bg-white border-t-4 border-green-400">
                  <div className="overflow-hidden image">
                    <img
                      className="w-full h-auto mx-auto"
                      src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                      alt=""
                    />
                  </div>
                  <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">
                    {ans.NGOName}
                  </h1>
                  <p className="h-4 text-sm leading-6 text-gray-500 hover:text-gray-600">
                    {ans.About}
                  </p>
                  <ul className="px-3 py-2 mt-3 text-gray-600 bg-gray-100 divide-y rounded shadow-sm hover:text-gray-700 hover:shadow">
                    <li className="flex items-center py-3">
                      <span>Status</span>
                      <span className="ml-auto">
                        <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
                          Active
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center py-3">
                      <span>Member since</span>
                      <span className="ml-auto">Nov 07, 2016</span>
                    </li>
                  </ul>
                </div>
                <div className="my-4"></div>
              </div>
              <div className="w-full h-64 mx-2 md:w-9/12">
                <div className="p-3 bg-white rounded-sm shadow-sm">
                  <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                    <span clas="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">About</span>
                  </div>
                  <div className="text-gray-700">
                    <div className="grid text-sm md:grid-cols-2">
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Name -</div>
                        <div className="px-4 py-2">{ans.NGOName}</div>
                      </div>

                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Contact No.
                        </div>
                        <div className="px-4 py-2">{ans.contact}</div>
                      </div>

                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Payment Method
                        </div>
                        <div className="px-4 py-2">{ans.payment}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Current Address
                        </div>
                        <div className="px-4 py-2">{ans.adress}</div>
                      </div>

                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">City</div>
                        <div className="px-4 py-2">{ans.city}</div>
                      </div>

                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">State</div>
                        <div className="px-4 py-2">{ans.state}</div>
                      </div>

                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">
                          Zip/Postal Code
                        </div>
                        <div className="px-4 py-2">{ans.zip}</div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="px-4 py-2 font-semibold">Email</div>
                        <div className="px-4 py-2">
                          <a
                            className="text-blue-800"
                            href="mailto:jane@example.com"
                          >
                            {ans.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-4"></div>
                <div className="p-3 bg-white rounded-sm shadow-sm">
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="flex items-center mb-3 space-x-2 font-semibold leading-8 text-gray-900">
                        <span className="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Experience</span>
                      </div>
                      <ul className="space-y-2 list-inside">
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-xs text-gray-500">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-xs text-gray-500">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-xs text-gray-500">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Owner at Her Company Inc.
                          </div>
                          <div className="text-xs text-gray-500">
                            March 2020 - Now
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center mb-3 space-x-2 font-semibold leading-8 text-gray-900">
                        <span className="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              fill="#fff"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">Education</span>
                      </div>
                      <ul className="space-y-2 list-inside">
                        <li>
                          <div className="text-teal-600">
                            Masters Degree in Oxford
                          </div>
                          <div className="text-xs text-gray-500">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div className="text-teal-600">
                            Bachelors Degree in LPU
                          </div>
                          <div className="text-xs text-gray-500">
                            March 2020 - Now
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute flex gap-8 mt-20 right-4">
                  <button
                    className="px-3 py-1 text-xl bg-yellow-300 rounded-lg hover:bg-yellow-200"
                    onClick={() => setState(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-3 py-1 text-xl bg-red-500 rounded-lg hover:bg-red-300"
                    onClick={() => dispatch(deleteNgoRequestAsync(ans.id))}
                  >
                    Reject
                  </button>
                  <button
                    className="px-3 py-1 text-xl bg-green-400 rounded-lg hover:bg-green-500"
                    onClick={() => handleit()}
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};