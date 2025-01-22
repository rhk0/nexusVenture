import React from "react";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaSkype } from "react-icons/fa";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 px-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section - Logo & Description */}
        <div className="md:w-1/3">
          <div className="flex items-center">
            <img src={logo} alt="Team working" className=" h-16 shadow-lg" />
          </div>
          <p className="text-lg mt-3 text-gray-300 leading-6">
            Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit.
            Dolorum, eligendi, voluptatibus <br /> deleniti ipsum officiis alias
            ex impedit.
          </p>
        </div>

        {/* Middle Section - Important Links */}
        <div className="md:w-1/3 mt-6 md:mt-0">
          <h3 className="text-2xl font-semibold">Important Links</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Social Icons */}
        <div className="md:w-1/3 space-y-2 mt-6 md:mt-0">
          <h3 className="text-lg ">Term & Conditions</h3>
          <h3 className="text-lg ">Contact Support</h3>
          <div className="flex space-x-4 mt-3">
            <a
              href="#"
              className="p-2 text-white text-3xl rounded-full hover:scale-110 transition"
            >
              <AiOutlineFacebook />
            </a>
            <a
              href="#"
              className="p-2 text-white text-2xl rounded-full hover:scale-110 transition"
            >
              <BsInstagram />
            </a>
            <a
              href="#"
              className="p-2 text-white text-3xl text-bold rounded-full hover:scale-110 transition"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              href="#"
              className="p-2 text-white text-3xl rounded-full hover:scale-110 transition"
            >
              <FaSkype />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-16 text-gray-100 text-lg border-t-2 border-white pt-4">
        Copyright © 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
