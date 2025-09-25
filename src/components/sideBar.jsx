import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTachometerAlt, 
  faProjectDiagram, 
  faTasks, 
  faChartBar, 
  faCog, 
  faQuestionCircle, 
  faSignOutAlt 
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
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
    <div className="md:w-60 h-full mx-3 rounded-2xl bg-gray-200 shadow-md p-4 fixed top-1.5">
      <h1 className="text-4xl">Tranquil</h1>
      {/* Menu Section */}
      <div className="mb-6">
        <h2 className="text-gray-700 font-semibold mb-5 ml=8">Menu</h2>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.name.toLowerCase()}`}
                className="flex items-center gap-3 px-6 py-2 rounded hover:bg-gray-200"
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
        <h2 className="text-gray-700 font-semibold mb-5 ml-8 ">General</h2>
        <ul className="space-y-2">
          {generalItems.map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.name.toLowerCase()}`}
                className="flex items-center gap-3 px-6 py-2 rounded hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={item.icon} className="text-gray-600" />
                <span className="text-gray-700 font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
