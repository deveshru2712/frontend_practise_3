import React from "react";
import Logo from "../../assets/food-logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white/50">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={Logo} alt="logo" className="max-w-[50px] " />
                Foodie
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                suscipit temporibus vel minima expedita commodi aliquid dolorem
                voluptatum, ea pariatur.
              </p>
              <br />

              <div className="flex items-center gap-3 mt-6">
                <FaLocationArrow />
                <p>Prayagraj,U.P,India</p>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>

                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>

                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Link
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Link
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Link
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
