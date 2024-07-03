import React from 'react';
import xLogo from './components/x.png';
import facebookLogo from './components/facebook.png';
import instaLogo from './components/insta.png';
import linkedinLogo from './components/linkedin.png';
import footerOwl from './components/footerowl.png';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white p-6 h-70">
      <div className="flex flex-col items-center">
        <img src={footerOwl} alt="Owl Logo" className="h-12 mb-4" />
        <div className="flex gap-6 mb-4">
          <a href="https://www.instagram.com/hoohacks">
            <img src={instaLogo} alt="Instagram" className="h-6" />
          </a>
          <a href="https://www.x.com/hoohacks">
            <img src={xLogo} alt="X (Twitter)" className="h-6" />
          </a>
          <a href="https://www.facebook.com/hoohacks/">
            <img src={facebookLogo} alt="Facebook" className="h-6" />
          </a>
          <a href="https://www.linkedin.com/company/hoohacks">
            <img src={linkedinLogo} alt="LinkedIn" className="h-6" />
          </a>
        </div>
        <p className="text-center text-sm">
        Made with <span className="text-red-500">❤️</span> by the HooHacks team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
