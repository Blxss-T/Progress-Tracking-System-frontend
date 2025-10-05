import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBell,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import profilePic from "../assets/hihi.jpg";

function Navbar() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const profile = {
    name: "Bless",
    email: "bless@example.com",
    imageUrl: profilePic,
  };

  const currentPath = window.location.pathname;

  return (
    <div className="flex items-center justify-between p-2 bg-gray-100 shadow-md rounded-2xl md:ml-64 mt-1.5 w-full md:w-[81%] font-Montserrat mr-1.5">
      {/* 🔎 Search Bar (hidden on small, shown on md+) */}
      <div className="relative w-1/3 hidden sm:block">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 border-0 bg-white rounded-3xl w-full h-10 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* 🔎 Search Icon (mobile) */}
      <button className="block sm:hidden p-2 text-gray-600 hover:text-blue-500">
        <FontAwesomeIcon icon={faSearch} />
      </button>

      {/* 🍔 Hamburger Menu */}
      <button
        className="block md:hidden p-2 text-gray-600 hover:text-blue-500"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Desktop Icons + Profile */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          to="/mails"
          className={`rounded-full bg-white p-2.5 ${
            currentPath === "/mails" ? "bg-green-100 text-green-900" : ""
          }`}
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 hover:text-blue-500" />
        </Link>

        <Link
          to="/notification"
          className={`rounded-full bg-white p-2.5 ${
            currentPath === "/notification" ? "bg-green-100 text-green-900" : ""
          }`}
        >
          <FontAwesomeIcon icon={faBell} className="text-gray-600 hover:text-blue-500" />
        </Link>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={profile.imageUrl}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <Link to="/profile">
              <span
                className={`font-semibold ${
                  currentPath === "/profile" ? "text-green-900" : ""
                }`}
              >
                {profile.name}
              </span>
            </Link>
            <span className="text-sm text-gray-500">{profile.email}</span>
          </div>
        </div>
      </div>

      {/* 📱 Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-2 bg-white shadow-md rounded-xl p-4 flex flex-col gap-3 md:hidden">
          <Link
            to="/mails"
            className={`flex items-center gap-2 text-gray-600 hover:text-blue-500 ${
              currentPath === "/mails" ? "font-semibold text-green-900" : ""
            }`}
          >
            <FontAwesomeIcon icon={faEnvelope} /> Mails
          </Link>

          <Link
            to="/notification"
            className={`flex items-center gap-2 text-gray-600 hover:text-blue-500 ${
              currentPath === "/notification" ? "font-semibold text-green-900" : ""
            }`}
          >
            <FontAwesomeIcon icon={faBell} /> Notifications
          </Link>

          <Link
            to="/profile"
            className={`flex items-center gap-2 text-gray-600 hover:text-blue-500 ${
              currentPath === "/profile" ? "font-semibold text-green-900" : ""
            }`}
          >
            <img
              src={profile.imageUrl}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            {profile.name}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
