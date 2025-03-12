/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { FiBell, FiMenu, FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="w-full md:h-[73px] py-2 flex px-3 justify-between items-center bg-[#333399] border-b  z-10 pl-7 rounded-md">
      {/* Hamburger menu for mobile */}
      <div className="">
        <button
          className="md:hidden text-gray-500 text-2xl"
          onClick={toggleSidebar}
        >
          <FiMenu />
        </button>
      </div>

      {/* Profile section */}
      <div className="flex space-x-2 ml-auto items-center">
        <div className="mr-5 border border-white rounded-md p-2">
          <FiBell className="w-8 h-8 text-white" />
        </div>
        <div className="flex items-center border border-white rounded-md p-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
            <FiUser className="text-white w-6 h-6" />
          </div>
          <span className="text-white text-lg">Islam</span>
          <button className="text-white ml-2 text-lg">
            <IoIosArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
