import React, { useState } from "react";
import owlLogo from "../assets/logo-name-stacked-color.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="bg-white font-chakra-petch p-4 md:p-8 lg:p-16">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4 md:gap-8 lg:gap-16 pl-4 md:pl-8 lg:pl-20">
            <img
                src={owlLogo}
                alt="Owl Logo"
                className="h-12 mr-4 md:mr-8 lg:mr-20"
            />
          </div>

          {/* Hamburger Icon */}
          <div className="block md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#121A6A] focus:outline-none"
            >
              <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                )}
              </svg>
            </button>
          </div>

          {/* Links */}
          <div
              className={`${
                  isOpen ? "block" : "hidden"
              } w-full md:flex md:items-center md:w-auto`}
          >
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-16 mt-4 md:mt-0">
              <a
                  href="/"
                  className="font-bold text-sm md:text-lg lg:text-xl text-[#121A6A] relative overflow-hidden group"
              >
                About
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#121A6A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </a>
              <a
                  href="/archive"
                  className="font-bold text-sm md:text-lg lg:text-xl text-[#121A6A] relative overflow-hidden group"
              >
                Archive
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#121A6A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </a>
              <a
                  href="/join"
                  className="font-bold text-sm md:text-lg lg:text-xl text-[#121A6A] relative overflow-hidden group"
              >
                Join
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#121A6A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
