import React from 'react';
import owlLogo from "../assets/hoohacks-owl-logo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-16 bg-white font-chakra-petch">
      <div className="flex items-center pl-20 gap-16"> 
        <img src={owlLogo} alt="Owl Logo" className="h-8 mr-20" />
        <a href="/" className="text-primary-blue font-semibold text-xl">About</a>
        <a href="/team" className="text-primary-blue font-semibold text-xl">Meet the Team</a>
        <a href="/archive" className="text-primary-blue font-semibold text-xl">Archive</a>
        <a href="/join" className="text-primary-blue font-semibold text-xl">Join</a>
      </div>
      <div className="flex gap-16">
        <a href="https://ideathon.hoohacks.io/" style={{ backgroundColor: '#121A6A' }} className="text-white px-16 py-2 rounded-md font-semibold">Ideathon</a>
        <a href="https://www.hoohacks.io/" style={{ backgroundColor: '#121A6A' }} className="text-white px-16 py-2 rounded-md font-semibold">HooHacks</a>
      </div>
    </nav>
  );
};

export default Navbar;