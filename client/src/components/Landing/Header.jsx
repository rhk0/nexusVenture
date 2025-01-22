import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-6 flex justify-between items-center">
      <div className="text-xl font-bold">
        <img src={logo} alt="Team working" className="h-9 shadow-lg" />
      </div>
      <div className="flex space-x-4 ml-1">
        <Link to="/login">
          <button className="bg-white border-white text-blue-900 md:px-9 px-2 py-1 rounded">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="border md:px-7 px-2 py-1 text-nowrap rounded">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
