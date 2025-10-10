import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell, faSearch, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import profilePic from "../assets/hihi.jpg";

function Navbar({ onHamburgerClick }) {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // mobile dropdown
  const [searchOpen, setSearchOpen] = useState(false); // inline search toggle
  const searchRef = useRef(null);

  const profile = {
    name: "Bless",
    email: "bless@example.com",
    imageUrl: profilePic,
  };

  const currentPath = window.location.pathname;

  // Close search if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between p-2 bg-gray-100 shadow-md rounded-2xl md:ml-64 mt-1.5 w-full md:w-[81%] font-Montserrat mr-1.5 relative">
      
      {/* Left: Hamburger + Search */}
      <div className="flex items-center gap-2">
        {/* Hamburger icon (small screens only) */}
        <button
          className="block md:hidden p-2 text-gray-600 hover:text-blue-500"
          onClick={onHamburgerClick}
        >
          <FontAwesomeIcon icon={faEllipsisV} />
        </button>

        {/* Search input */}
        <div ref={searchRef} className="relative">
          {/* Desktop full search */}
          <div className="hidden sm:block relative w-64">
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

          {/* Mobile search icon */}
          <button
            className={`block sm:hidden p-2 text-gray-600 hover:text-blue-500 ${
              searchOpen ? "hidden" : "block"
            }`}
            onClick={() => setSearchOpen(true)}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>

          {/* Mobile inline expanding search */}
          {searchOpen && (
            <div className="absolute top-0 left-10 w-52 bg-white rounded-3xl shadow-md flex items-center pl-10 h-10 sm:hidden transition-all duration-200">
              <input
                type="text"
                placeholder="Search text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full h-full border-0 focus:outline-none"
              />
            </div>
          )}
        </div>
      </div>

      {/* Right: Desktop icons + profile */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/mails"
            className={`rounded-full bg-white p-2.5 ${
              currentPath === "/mails" ? "bg-green-100 text-green-900" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-gray-600 hover:text-blue-500"
            />
          </Link>

          <Link
            to="/notification"
            className={`rounded-full bg-white p-2.5 ${
              currentPath === "/notification" ? "bg-green-100 text-green-900" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faBell}
              className="text-gray-600 hover:text-blue-500"
            />
          </Link>
        </div>

        {/* Profile always visible */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={profile.imageUrl}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden sm:flex flex-col">
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
    </div>
  );
}

export default Navbar;
