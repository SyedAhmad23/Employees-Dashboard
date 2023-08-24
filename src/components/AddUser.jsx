import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import axios from "axios";
import React from "react";
import { FaUser, FaBuilding, FaGenderless, FaMailBulk } from "react-icons/fa";

export default function AddUser({ onUserAdded }) {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("male");
  const [department, setDepartment] = useState("Legal");
  const [email, setEmail] = useState("");
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const generateRandomId = () => {
    return Math.floor(Math.random() * 999) + 1;
  };
  const AddUser = async () => {
    try {
      const url = "https://dummyjson.com/users/add";

      const userData = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        department: department,
        email: email,
      };

      const response = await axios.post(url, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const newUserId = generateRandomId();
      const newUser = { ...response.data, id: newUserId };
      onUserAdded(newUser);

      console.log("User added:", response.data);
      closeModal();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 p-4">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-gradient-to-r from-green-700 to-gray-700 bg-opacity-20 px-4 m-2 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          Add User
        </button>

        <Transition appear show={isOpen} as={Fragment}>
          <div className="fixed inset-0 overflow-y-auto z-50">
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={closeModal}
            />

            <div className="flex justify-center items-center min-h-screen p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Add User
                    </h3>
                    <div className="space-y-2">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="border border-gray-300 px-3 py-2 rounded-md w-full pl-10"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        <div className="absolute left-3 top-3">
                          <FaUser className="text-gray-400" />
                        </div>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="border border-gray-300 px-3 py-2 rounded-md w-full pl-10"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                        <div className="absolute left-3 top-3">
                          <FaUser className="text-gray-400" />
                        </div>
                      </div>
                      <div className="relative">
                        <select
                          className="border border-gray-300 px-3 py-2 rounded-md w-full pl-10"
                          defaultValue="male"
                          placeholder="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="" disabled>
                            Select a Gender
                          </option>
                          <option value="Male">male</option>
                          <option value="FeMale">female</option>
                        </select>
                        <div className="absolute left-3 top-3">
                          <FaGenderless className="text-gray-400" />
                        </div>
                      </div>
                      <div className="relative">
                        <select
                          className="border border-gray-300 px-3 py-2 rounded-md w-full pl-10"
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                        >
                          <option value="" disabled>
                            Select a department
                          </option>
                          <option value="legal">Legal</option>
                          <option value="marketing">Marketing</option>
                          <option value="services">Services</option>
                          <option value="business Development">
                            Business Development
                          </option>
                          <option value="accounting">Accounting</option>
                        </select>
                        <div className="absolute left-3 top-3">
                          <FaBuilding className="text-gray-400" />
                        </div>
                      </div>

                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Email"
                          className="border border-gray-300 px-3 py-2 rounded-md w-full pl-10"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="absolute left-3 top-3">
                          <FaMailBulk className="text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md bg-gradient-to-r from-green-700 to-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={AddUser}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center ml-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
}
