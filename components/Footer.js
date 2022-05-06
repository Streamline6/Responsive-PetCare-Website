import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-black h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-white font-bold text-3xl pb-6">
              Pet<span className="text-orange-500">Care</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer text-white hover:text-orange-500" />
              <FaTwitter className="text-2xl cursor-pointer text-white hover:text-orange-500" />
              <FaLinkedin className="text-2xl cursor-pointer text-white hover:text-orange-500" />
              <FaYoutube className="text-2xl cursor-pointer text-white hover:text-orange-500" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Platform</p>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Feature
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Integration
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Telemedicine
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Solutions</p>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Independent Practices
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Corporate Groups
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Specialists
            </li>

            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Smart Forms
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-orange-500 cursor-pointer">
              FAQ's
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-black">
        <h1 className="text-sm text-gray-200 font-semibold">
          © 2019-2021 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-orange-500 font-semibold cursor-pointer">
            streamline{" "}
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
