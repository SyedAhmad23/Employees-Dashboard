import React, { useState } from "react";
import "../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); // Changed from userName to username
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    // Changed from handleUserName to handleUsername
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = async () => {
    console.log({ username, password }); // Changed from userName to username

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: username, // Changed from userName to username
        password: password,
      });

      const responseData = await response.data;
      console.log(responseData);
      navigate("/dashboard");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 mt-20 rounded-lg p-8 flex flex-col md:ml-auto w-full md: mx-auto">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
        Sign IN
      </h2>
      <div className="relative mb-4">
        <input
          type="text"
          id="username" // Changed from full-name to username
          name="username"
          placeholder="Username" // Changed from Email Address to Username
          value={username}
          onChange={handleUsername} // Changed from handleEmail to handleUsername
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button
        className="text-white bg-green-800 border-0 py-2 px-8 w-full focus:outline-none hover:bg-green-900 rounded text-lg"
        onClick={handleApi}
      >
        Login
      </button>
      <br />
      <a className="text-xs text-gray-500 mt-3">Create New Account</a>
    </div>
  );
};

export default Login;
