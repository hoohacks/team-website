import './Archive.css';
import { sponsors } from '../modules/listOfSponsor';
import { useState } from 'react';
import React from "react";
import placementImage from "../assets/hoohacks-placement.png"; // Replace with actual image path


const Archive = () => {

  return (
    <div className="archive-container">
      {/* History Section */}
      <div className="history-section">
        <h1 className="history-title">Our History</h1>
        <p className="history-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
        Cras vehicula tortor a justo vehicula, non cursus magna consectetur. Sed aliquet massa nec urna aliquam, ac laoreet nunc tristique.
        Integer euismod, ligula ut aliquam fringilla, ipsum nulla viverra ligula, a bibendum nisl ante quis lacus. Nam cursus, purus vel pellentesque pharetra, purus quam fermentum lorem,
        a luctus orci nisl sit amet arcu. Fusce id sapien bibendum, pharetra eros id, tempus erat.
        </p>
        <p className="history-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula tortor a justo vehicula, non cursus magna consectetur.
        Sed aliquet massa nec urna aliquam, ac laoreet nunc tristique. Integer euismod, ligula ut aliquam fringilla, ipsum nulla viverra ligula,
        a bibendum nisl ante quis lacus. Nam cursus, purus vel pellentesque pharetra, purus quam fermentum lorem, a luctus orci nisl sit amet arcu.
        Fusce id sapien bibendum, pharetra eros id, tempus erat.
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
            {sponsors.map((sponsor, index) => (
              <div className='sponsor-logo' key={`row1-${index}`}>
              <img
              src={`${process.env.PUBLIC_URL}${sponsor.logo}`}
              alt={sponsor.name}
              />
              </div>
            ))}
            {sponsors.map((sponsor, index) => (
              <div className="sponsor-logo" key={`row1-dup-${index}`}>
                <img
                src={`${process.env.PUBLIC_URL}${sponsor.logo}`}
                alt={sponsor.name}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Carousel Row */}
        <div className="sponsors-carousel">
          <div className="sponsors-track">
            {sponsors.map((sponsor, index) => (
                <div className='sponsor-logo' key={`row2-${index}`}>
                <img
                src={`${process.env.PUBLIC_URL}${sponsor.logo}`}
                alt={sponsor.name}
                />
                </div>
            ))}
            {sponsors.map((sponsor, index) => (
              <div className='sponsor-logo' key={`row2-dup-${index}`} >
                <img
                src={`${process.env.PUBLIC_URL}${sponsor.logo}`}
                alt={sponsor.name}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Third Carousel Row */}
        <div className="sponsors-carousel">
          <div className="sponsors-track">
            {sponsors.map((sponsor, index) => (
              <div className="sponsor-logo" key={`row3-${index}`}>
                <img
                src={`${process.env.PUBLIC_URL}${sponsor.logo}`}
                alt={sponsor.name}
                />
              </div>
            ))}
            {sponsors.map((sponsor, index) => (
              <div className="sponsor-logo" key={`row3-dup-${index}`}>
                <img
                src={`${process.env.PUBLIC_URL}${sponsor.logo}`}
                alt={sponsor.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
