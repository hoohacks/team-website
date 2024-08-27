import React from "react";
import owlLogo from "../assets/hoohacks-owl-logo.png";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 md:p-8 lg:p-16 bg-white font-chakra-petch">
      <div className="flex items-center gap-4 md:gap-8 lg:gap-16 pl-4 md:pl-8 lg:pl-20">
        <img
          src={owlLogo}
          alt="Owl Logo"
          className="h-8 mr-4 md:mr-8 lg:mr-20"
        />
        <a
          href="/"
          style={{ color: "#2848BA" }}
          className="font-semibold text-sm md:text-lg lg:text-xl"
        >
          About
        </a>

        <a
          href="/archive"
          style={{ color: "#2848BA" }}
          className="font-semibold text-sm md:text-lg lg:text-xl"
        >
          Archive
        </a>
        <a
          href="/join"
          style={{ color: "#2848BA" }}
          className="font-semibold text-sm md:text-lg lg:text-xl"
        >
          Join
        </a>
      </div>
      <div className="flex gap-4 md:gap-8 lg:gap-16 mt-4 md:mt-0">
        <a
          href="https://ideathon.hoohacks.io/"
          style={{ backgroundColor: "#2848BA" }}
          className="text-white px-4 py-2 md:px-8 md:py-2 lg:px-16 lg:py-2 rounded-md font-semibold text-xs md:text-sm lg:text-base"
        >
          Ideathon
        </a>
        <a
          href="https://www.hoohacks.io/"
          style={{ backgroundColor: "#2848BA" }}
          className="text-white px-4 py-2 md:px-8 md:py-2 lg:px-16 lg:py-2 rounded-md font-semibold text-xs md:text-sm lg:text-base"
        >
          HooHacks
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
