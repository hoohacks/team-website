import React from "react";
import owlLogo from "../assets/logo-name-stacked-color.svg";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 md:p-8 lg:p-16 bg-gray-100 font-chakra-petch"> {/* Changed from bg-white to bg-gray-100 */}
      <div className="flex items-center gap-4 md:gap-8 lg:gap-16 pl-4 md:pl-8 lg:pl-20">
        <img
          src={owlLogo}
          alt="Owl Logo"
          className="h-12 mr-4 md:mr-8 lg:mr-20"
        />
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
    </nav>
  );
};

export default Navbar;
