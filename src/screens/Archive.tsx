import './Archive.css';
import React from "react";
import placementImage from "../assets/hoohacks-placement.png";

const Archive = () => {
  return (
    <div className="archive-container">
      {/* History Section */}
      <div className="history-section">
        <h1 className="history-title">Our History</h1>
        <p className="history-text">
        In the fall of 2013, a group of students founded HackUVA with the mission of fostering a culture of innovation and collaboration at the University of Virginia. They established committees for finance, sponsorship, and technology and hosted the university's first hackathon, attracting students and companies from across the nation. The event was a resounding success and has continued to grow each year. 
        Eventually renamed HooHacks, it has become one of the University of Virginia's most significant and anticipated events, embodying the spirit of creativity and technological advancement.

        </p>
      </div>

      {/* Placement Section */}
      <div className="placement-section">
        <h2 className="placement-title">Beyond HooHacks</h2>
        <p className="placement-text">
          Our members and alumni have continued their success through
          internships and full-time employment across a variety of industries.
        </p>
        <img src={placementImage} alt="Placement Companies" className="placement-image" />
      </div>

      {/* Sponsors Section */}
      <div className="sponsors-section">
        <h3 className="sponsors-title">Our Sponsors</h3>
        <p className="sponsors-text">
          HooHacks wouldn't be possible without the incredible support of our sponsors.
          Their generosity and commitment help us foster innovation and creativity each year.
          Some of our previous sponsors include:
        </p>
        
        {/* First Carousel Row */}
        <div className="sponsors-carousel">
          <div className="sponsors-track">
            {[...Array(8)].map((_, index) => (
              <div className="sponsor-logo" key={`row1-${index}`}></div>
            ))}
            {[...Array(8)].map((_, index) => (
              <div className="sponsor-logo" key={`row1-dup-${index}`}></div>
            ))}
          </div>
        </div>

        {/* Second Carousel Row */}
        <div className="sponsors-carousel">
          <div className="sponsors-track">
            {[...Array(8)].map((_, index) => (
              <div className="sponsor-logo" key={`row2-${index}`}></div>
            ))}
            {[...Array(8)].map((_, index) => (
              <div className="sponsor-logo" key={`row2-dup-${index}`}></div>
            ))}
          </div>
        </div>

        {/* Third Carousel Row */}
        <div className="sponsors-carousel">
          <div className="sponsors-track">
            {[...Array(8)].map((_, index) => (
              <div className="sponsor-logo" key={`row3-${index}`}></div>
            ))}
            {[...Array(8)].map((_, index) => (
              <div className="sponsor-logo" key={`row3-dup-${index}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
