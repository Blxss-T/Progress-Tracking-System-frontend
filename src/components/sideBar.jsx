import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTachometerAlt,
  faProjectDiagram,
  faTasks,
  faChartBar,
  faCog,
  faQuestionCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Dashboard", icon: faTachometerAlt },
    { name: "Projects", icon: faProjectDiagram },
    { name: "Tasks", icon: faTasks },
    { name: "Reports", icon: faChartBar },
  ];

  const generalItems = [
    { name: "Settings", icon: faCog },
    { name: "Help", icon: faQuestionCircle },
    { name: "Logout", icon: faSignOutAlt },
  ];

  return (
    <>
      {/* Toggle button (Mobile only) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-green-900 text-white p-2 rounded-lg"
        onClick={toggleSide}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Background overlay (appears when sidebar is open) */}
      {isOpen && (
       <div
  className={`fixed top-0 left-0 h-full w-64 bg-gray-100 bg-opacity-70 backdrop-blur-md shadow-md p-4 rounded-r-2xl z-50 transform transition-transform duration-300
  ${isOpen ? "translate-x-0" : "-translate-x-full"} 
  md:translate-x-0 md:w-60 md:relative md:rounded-2xl md:mx-3` }
></div>
      )}

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-md p-4 rounded-r-2xl z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:w-60 md:relative md:rounded-2xl md:mx-3`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-4xl text-green-950 font-bold">Tranquil</h1>
          <button onClick={toggleSide} className="md:hidden">
            <FontAwesomeIcon icon={faBars} className="text-gray-700 text-xl" />
          </button>
        </div>

        {/* Menu Section */}
        <div className="mb-6">
          <h2 className="text-black font-semibold mb-3 text-md">MENU</h2>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.name.toLowerCase()}`}
                  onClick={() => setIsOpen(false)} // closes sidebar on mobile
                  className={`flex items-center gap-2 px-6 py-2 rounded hover:bg-gray-200 ${
                    window.location.pathname === `/${item.name.toLowerCase()}`
                      ? "bg-green-100 font-semibold text-green-900"
                      : ""
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-gray-600" />
                  <span className="text-gray-700 font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* General Section */}
        <div>
          <h2 className="text-black font-semibold mb-3 text-md">GENERAL</h2>
          <ul className="space-y-2">
            {generalItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.name.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-6 py-2 rounded hover:bg-gray-200 ${
                    window.location.pathname === `/${item.name.toLowerCase()}`
                      ? "bg-green-100 font-semibold text-green-900"
                      : ""
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-gray-600" />
                  <span className="text-gray-700 font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
