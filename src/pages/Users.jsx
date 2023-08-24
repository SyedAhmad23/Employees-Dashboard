import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import DeleteUser from "../components/DeleteUser";
import { GrUpdate } from "react-icons/gr";
import AddUser from "../components/AddUser";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const handleUserAdded = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setFilteredUsers((prevFilteredUsers) => [...prevFilteredUsers, newUser]);
  };
  const handleUserDeleted = (deletedUserId) => {
    console.log("handleUserDeleted called");
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== deletedUserId)
    );
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        const userList = response.data.users;
        setUsers(userList);
        setFilteredUsers(userList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (filteredUsers) => {
    setFilteredUsers(filteredUsers);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={true} />
      <div className="flex-1 ml-52">
        <div className="flex justify-between items-center">
          <h2 className="font-bold mb-2 text-3xl">Users</h2>
          <div className="relative">
            <div className="absolute top-0 right-0">
              <AddUser onUserAdded={handleUserAdded} />
            </div>
          </div>
        </div>
        <SearchBar onSearch={handleSearch} users={users} />
        <div className="text-start font-bold">
          <div
            className="grid p-2 border bg-gray-200"
            style={{
              gridTemplateColumns: "7% 13% 13% 7% 20% 20% 10% 7%",
            }}
          >
            <span>Id</span>
            <span>First Name</span>
            <span>Last Name</span>
            <span>Gender</span>
            <span>Department</span>
            <span>Email</span>
            <span>Upadted At</span>
            <span>Action</span>
          </div>
        </div>
        {users.length > 0 ? (
          <ul>
            {filteredUsers.map((user) => (
              <li key={user.id} className="text-start">
                <div
                  className="grid p-2  mb-4 border-2"
                  style={{
                    gridTemplateColumns: "7% 13% 13% 7% 20% 20% 10% 7%",
                  }}
                >
                  <p>{user.id}</p>
                  <p>{user.firstName}</p>
                  <p>{user.lastName}</p>
                  <p>{user.gender}</p>
                  <p>{user.company.department}</p>
                  <p>{user.email}</p>
                  <p>10/08/2023</p>
                  <div className="flex items-center gap-3 cursor-pointer">
                    <DeleteUser
                      userId={user.id}
                      onUserDeleted={handleUserDeleted}
                    />
                    <GrUpdate />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading users...</p>
        )}

        {users.length > 0 && filteredUsers.length === 0 && (
          <h1 className="flex justify-center mt-12">No users found.</h1>
        )}
      </div>
    </div>
  );
};

export default Users;
