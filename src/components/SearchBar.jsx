import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch, users }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredUsers(users);
    } else {
      const newFilteredUsers = users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(newFilteredUsers);
    }
  }, [searchTerm, users]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchUsers = async (searchQuery) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/users/search?q=${searchQuery}`
      );
      const searchData = response.data;
      return searchData.users;
    } catch (error) {
      console.error("Error searching users:", error);
      return [];
    }
  };

  const handleSearchClick = async () => {
    const foundUsers = await searchUsers(searchTerm);
    onSearch(foundUsers);
  };

  return (
    <div className="p-1 rounded-lg shadow-md relative w-96 flex mb-8">
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent text-black placeholder-gray-400 rounded-lg focus:outline-none pl-8"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="search-icon absolute top-1/3 left-3 pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
      <button
        className="bg-gradient-to-r from-green-700 to-gray-700 rounded-lg text-white py-2 px-4 ml-2"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
