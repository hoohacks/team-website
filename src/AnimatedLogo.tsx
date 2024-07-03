import React from 'react';
import hoohacksLogo from './components/hooMain.png'; 

const AnimatedText = () => {
  return (
    <div className="relative flex justify-center items-top h-screen bg-white overflow-hidden pt-16">
      <img src={hoohacksLogo} alt="HooHacks Logo" className="z-10 h-32" />
      
    </div>
  );
};

export default AnimatedText;
