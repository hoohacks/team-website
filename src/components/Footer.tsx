import React from 'react';
import xLogo from '../assets/x.png';
import facebookLogo from '../assets/facebook.png';
import instaLogo from '../assets/insta.png';
import linkedinLogo from '../assets/linkedin.png';
import footerOwl from '../assets/footerowl.png';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white p-6 lg:p-12">
      <div className="flex flex-col items-center">
        <img src={footerOwl} alt="Owl Logo" className="h-16 md:h-20 mb-4" />
        <div className="flex gap-4 md:gap-6 mb-4">
          <a href="https://www.instagram.com/hoohacks">
            <img src={instaLogo} alt="Instagram" className="h-4 md:h-6" />
          </a>
          <a href="https://www.x.com/hoohacks">
            <img src={xLogo} alt="X (Twitter)" className="h-4 md:h-6" />
          </a>
          <a href="https://www.facebook.com/hoohacks/">
            <img src={facebookLogo} alt="Facebook" className="h-4 md:h-6" />
          </a>
          <a href="https://www.linkedin.com/company/hoohacks">
            <img src={linkedinLogo} alt="LinkedIn" className="h-4 md:h-6" />
          </a>
        </div>
        <p className="text-center text-xs md:text-sm">
          Made with <span className="text-red-500">❤️</span> by the HooHacks team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
