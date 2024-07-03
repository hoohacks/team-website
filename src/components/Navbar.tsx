import React from 'react';
import owlLogo from "../assets/hoohacks-owl-logo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-16 bg-white">
      <img src={owlLogo} alt="Owl Logo" className="h-10 mr-10" />
      <div className="flex flex-grow gap-8">
        <a href="/" className="font-chakra-petch text-primary-blue font-semibold text-xl">About</a>
        <a href="/team" className="font-chakra-petch text-primary-blue font-semibold text-xl">Meet the Team</a>
        <a href="/archive" className="font-chakra-petch text-primary-blue font-semibold text-xl">Archive</a>
        <a href="/join" className="font-chakra-petch text-primary-blue font-semibold text-xl">Join</a>
      </div>
      <div className="flex gap-4">
        <a href="https://ideathon.hoohacks.io/" className="font-chakra-petch text-white bg-secondary-blue px-4 py-2 rounded-md font-semibold">Ideathon</a>
        <a href="https://www.hoohacks.io/" className="font-chakra-petch text-white bg-secondary-blue px-4 py-2 rounded-md font-semibold">HooHacks</a>
      </div>
    </nav>
  );
};

export default Navbar;
