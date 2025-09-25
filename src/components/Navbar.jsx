import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import profilePic from "../assets/hihi.jpg";
import { faHamburger } from "@fortawesome/free-solid-svg-icons/faHamburger";

function Navbar() {
  const [query, setQuery] = useState("");
  
  const profile = {
    name: "Bless",
    email: "bless@example.com",
    imageUrl: profilePic,
  };

  return (
    <div className=" flex items-center justify-between p-2 bg-gray-300 shadow-md rounded-2xl md:ml-64 mt-1.5 w-[81%] font-Montserrat">
        <div className="relative w-1/3 hidden sm:block">
        {/* <button className="hidden sm:block">
       <FontAwesomeIcon
       icon={faHamburger}
       className=" "
       />
       </button> */}
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

       <button className="block md:hidden p-2 text-gray-600 hover:text-blue-500">
        <FontAwesomeIcon icon={faSearch} className="text-gray-600 hover:text-blue-500" />
        </button>

      {/* Icons and profile */}
      <div className="flex items-center gap-6">
        
        {/* Icons */}
        <Link to='./mails' className="rounded-full bg-white p-2.5">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 hover:text-blue-500" />
        </Link>
        <Link to='./notification' className="rounded-full bg-white p-2.5">
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
            <Link to='/profile'> <span className="font-semibold">{profile.name}</span></Link>
            <span className="text-sm text-gray-500">{profile.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
