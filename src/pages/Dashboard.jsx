import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex m-0 p-0 ">
      <Sidebar isOpen={sidebarOpen} />
      <div className={`flex-1 ${sidebarOpen ? "" : "w-full"}`}>
        <Navbar toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default Dashboard;
