/* eslint-disable no-unused-vars */
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/features/auth/authSlice";
import LogoImage from "../../../assets/auth/Logo.png";
import { RiLogoutCircleRLine, RiSettings2Fill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { AiFillProduct } from "react-icons/ai";
import { MdWindow } from "react-icons/md";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// Sidebar items
const dynamicSidebarItems = [
  {
    path: "/",
    name: "Dashboard",
    icon: <AiFillProduct className="size-6" />,
  },
  {
    path: "/users",
    name: "User",
    icon: <FaUserTie className="size-6" />,
  },
  {
    path: "/property",
    name: "Property",
    icon: <MdWindow className="size-6" />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <RiSettings2Fill  className="size-6" />,
  },
];

import PropTypes from 'prop-types';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/auth");
  };

  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-[330px] h-[100vh] bg-[#E6E6F299] fixed shadow-2xl z-20 ">
        <div className="flex-col flex justify-between items-center py-3 text-white flex-grow">
          <img src={LogoImage} alt="logo" className="w-32 h-[89px]" />
        </div>
        <div className="border-b border-[#8f8f9499]"></div>
        <div className="flex flex-col justify-between h-[85%]">
          <div>
            <ul className="w-full flex flex-col gap-3 mt-[15px]">
              {dynamicSidebarItems.map((item) =>
                item.name !== "Settings" ? (
                  <NavLink
                    to={item.path}
                    key={item.name}
                    className={({ isActive }) =>
                      `w-[60%] mx-auto px-2 py-2 flex justify-start items-center gap-3 transition duration-100 ease-linear hover:pl-3 ${
                        isActive
                          ? "bg-[#5454AA80] text-white rounded-md border-l-4 border-[#98DED9]" // Active Link Style
                          : "text-[#383838]" // Non-active Link Style
                      }`
                    }
                  >
                    {item.icon}
                    <h>{t(item.name)}</h>
                  </NavLink>
                ) : (
                  <div key={item.name}>
                    {/* Settings Dropdown */}
                    <button
                      onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                      className="w-[60%] mx-auto px-2 py-2 flex justify-start items-center gap-3 text-[#383838] transition duration-100 ease-linear hover:pl-3"
                    >
                      {item.icon}
                      <h>{t(item.name)}</h>
                      <span className="ml-auto">
                        {isSettingsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </span>
                    </button>

                    {isSettingsOpen && (
                      <ul className="w-[50%] mx-auto mt-2">
                        <NavLink
                          to="/settings/personal-info"
                          className={({ isActive }) =>
                            `mt-3 flex justify-start items-center gap-3 px-2 py-1 text-[#383838] transition duration-100 ease-linear  ${
                              isActive
                                ? "bg-[#5454AA80] text-white rounded-md border-l-4 border-[#98DED9] py-2"
                                : "text-[#383838]"
                            }`
                          }
                        >
                          <h>{t("Personal Information")}</h>
                        </NavLink>
                        <NavLink
                          to="/settings/privacy-terms"
                          className={({ isActive }) =>
                            ` mt-3 flex justify-start items-center gap-3 px-2 py-1 text-[#383838] transition duration-100 ease-linear ${
                              isActive
                                ? "bg-[#5454AA80] text-white rounded-md border-l-4 border-[#98DED9] py-2"
                                : "text-[#383838]"
                            }`
                          }
                        >
                          <h>{t("Privacy Terms")}</h>
                        </NavLink>
                      </ul>
                    )}
                  </div>
                )
              )}
            </ul>
          </div>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-10 py-4 text-rose-500 mt-4 ml-9"
            >
              <RiLogoutCircleRLine className="size-8" />
              <span>{t("Logout")}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-full bg-[#E6E6F299] shadow-lg flex flex-col justify-between transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4 bg-[#5454AA80]">
          <img src={LogoImage} alt="logo" className="w-32 h-[89px]" />
        </div>
        <div className="border-b border-[#8f8f9499]"></div>
        <div className="flex flex-col justify-between h-[85%]">
          <div className="px-4 py-3">
            <ul className="w-full flex flex-col gap-3">
              {dynamicSidebarItems.map((item) =>
                item.name !== "Settings" ? (
                  <NavLink
                    to={item.path}
                    key={item.name}
                    className={({ isActive }) =>
                      `flex justify-start items-center gap-3 px-2 py-2 transition duration-100 ease-linear ${
                        isActive
                          ? "bg-[#5454AA80] text-white rounded-md border-l-4 border-[#98DED9]" // Active Link Style
                          : "text-[#2c2c2c]" // Non-active Link Style
                      }`
                    }
                  >
                    {item.icon}
                    <h>{t(item.name)}</h>
                  </NavLink>
                ) : (
                  <div key={item.name}>
                    {/* Settings Dropdown */}
                    <button
                      onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                      className="flex justify-between items-center gap-3 px-2 py-2 text-[#383838] transition duration-100 ease-linear "
                    >
                      {item.icon}
                      <h>{t(item.name)}</h>
                      <span>
                        {isSettingsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </span>
                    </button>

                    {isSettingsOpen && (
                      <ul className="w-full px-4">
                        <NavLink
                          to="/settings/personal-info"
                          className={({ isActive }) =>
                            `mt-3 flex justify-start items-center gap-3 px-2 py-1 text-[#383838] transition duration-100 ease-linear hover:pl-3 ${
                              isActive
                                ? "bg-[#5454AA80] text-white rounded-md border-l-4 border-[#98DED9] py-2"
                                : "text-[#2c2c2c]"
                            }`
                          }
                        >
                          <h>{t("Personal Information")}</h>
                        </NavLink>
                        <NavLink
                          to="/settings/privacy-terms"
                          className={({ isActive }) =>
                            `mt-3 flex justify-start items-center gap-3 px-2 py-1 text-[#383838] transition duration-100 ease-linear hover:pl-3 ${
                              isActive
                                ? "bg-[#5454AA80] text-white rounded-md border-l-4 border-[#98DED9] py-2"
                                : "text-[#2c2c2c]"
                            }`
                          }
                        >
                          <h>{t("Privacy Terms")}</h>
                        </NavLink>
                      </ul>
                    )}
                  </div>
                )
              )}
            </ul>
          </div>
        </div>
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-10 py-4 text-rose-500 mt-4 ml-9"
          >
            <RiLogoutCircleRLine className="size-8" />
            <span>{t("Logout")}</span>
          </button>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h3 className="text-lg font-bold mb-4">{t("Confirm Logout")}</h3>
            <p className="mb-6">{t("Are you sure you want to log out?")}</p>
            <div className="flex justify-between">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                {t("Yes")}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                {t("No")}
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    );
  };

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
