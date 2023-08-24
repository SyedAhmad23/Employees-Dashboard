import React, { useState } from "react";
import axios from "axios";
import { Dialog } from "@headlessui/react";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteUser = ({ userId, onUserDeleted }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log("Modal opened");
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = async () => {
    console.log("handleDelete called");
    try {
      await axios.delete(`https://dummyjson.com/users/${userId}`);
      onUserDeleted(userId);
      closeModal();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <button onClick={openModal} className="flex gap-3 ">
        <RiDeleteBin6Line />
      </button>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <Dialog.Title className="text-lg font-semibold mb-4">
              Confirm Delete
            </Dialog.Title>
            <p>Are you sure you want to delete this user?</p>
            <div className="mt-4 flex justify-end">
              <button onClick={handleDelete} className="mr-4 text-red-500 ">
                Yes
              </button>
              <button onClick={closeModal}>No</button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DeleteUser;
