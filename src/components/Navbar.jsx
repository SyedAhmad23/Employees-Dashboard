import { FaBars } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 m-0 flex justify-between items-center">
      <div className="flex items-center">
        <FaBars className="text-2xl cursor-pointer " onClick={toggleSidebar} />
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <FaUserCircle className="text-2xl" />
        </div>
        <p className="text-sm">John Doe</p>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Navbar;
