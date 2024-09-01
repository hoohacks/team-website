import React, {useState} from "react";
import owlLogo from "../assets/hoohacks-owl-logo.png";

const Navbar = () => {
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isArchiveHovered, setIsArchiveHovered] = useState(false);
  const [isJoinHovered, setIsJoinHovered] = useState(false);
  
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
          style={{ 
            color: "#121A6A",
            textDecoration: isAboutHovered ? "underline" : "none"
          }}
          className="font-semibold text-sm md:text-lg lg:text-xl"
          onMouseEnter={() => setIsAboutHovered(true)}
          onMouseLeave={() => setIsAboutHovered(false)}
        >
          About
        </a>

        <a
          href="/archive"
          style={{ 
            color: "#121A6A",
            textDecoration: isArchiveHovered ? "underline" : "none"
          }}
          className="font-semibold text-sm md:text-lg lg:text-xl"
          onMouseEnter={() => setIsArchiveHovered(true)}
          onMouseLeave={() => setIsArchiveHovered(false)}
        >
          Archive
        </a>
        <a
          href="/join"
          style={{ 
            color: "#121A6A",
            textDecoration: isJoinHovered ? "underline" : "none"
          }}
          className="font-semibold text-sm md:text-lg lg:text-xl"
          onMouseEnter={() => setIsJoinHovered(true)}
          onMouseLeave={() => setIsJoinHovered(false)}
        >
          Join
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
