import React from "react";
import hoohacksLogo from "../../assets/hoohacks_website_logo.gif";
import circleImage from "../../assets/circleLogo.png";
import ideathonLogo from "../../assets/ideathonLogo.png";
import hoohacksLogoSmall from "../../assets/longhoohacks.png";
import teamPhoto from "../../assets/teamphoto.png";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Home.css";

const Home = () => {
  return (
      <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Main Logo */}
        <div className="w-full max-w-4xl mx-auto flex justify-center items-center pb-12 md:pb-48">
          <img src={hoohacksLogo} alt="HooHacks Main Logo" className="max-w-full h-auto" />
        </div>

        {/* What is Hoohacks? */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-start pb-24 md:pb-48">
          <div className="w-full md:w-3/5">
            <h1 className="text-lg font-bold text-[#121A6A] mb-4">What is Hoohacks?</h1>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula tortor a justo vehicula, non cursus magna consectetur. Sed aliquet massa nec urna aliquam, ac laoreet nunc tristique. Integer euismod, ligula ut aliquam fringilla, ipsum nulla viverra ligula, a bibendum nisl ante quis lacus. Nam cursus, purus vel pellentesque pharetra, purus quam fermentum lorem, a luctus orci nisl sit amet arcu. Fusce id sapien bibendum, pharetra eros id, tempus erat.
            </p>
          </div>
          <div className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0">
            <img src={circleImage} alt="Hoohacks Circular Logo" className="w-40 h-40 md:w-52 md:h-52" />
          </div>
        </div>

        {/* Our Events */}
        <div className="w-full max-w-4xl pb-16 md:pb-32 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#121A6A] mb-8">Our Events</h1>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-10">
            <div className="w-full md:w-2/5">
              <a href="https://ideathon.hoohacks.io/" target="_blank" rel="noopener noreferrer">
                <img src={ideathonLogo} alt="Ideathon Logo" className="max-w-full h-auto" />
              </a>
            </div>
            <div className="w-full md:w-2/5 pt-4">
              <a href="https://www.hoohacks.io/" target="_blank" rel="noopener noreferrer">
                <img src={hoohacksLogoSmall} alt="HooHacks Logo" className="max-w-full h-auto" />
              </a>
            </div>
          </div>
        </div>

        {/* HooHacks Team */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-start pb-24 md:pb-48">
          <div className="w-full md:w-1/3">
            <h1 className="text-2xl md:text-3xl font-bold text-[#121A6A] mb-4">HooHacks Team</h1>
            <div>
              {["Technology", "Hacker Experience", "Marketing", "Finance", "Sponsorship"].map((team) => (
                  <Accordion key={team}>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls={`panel-${team}-content`}
                        id={`panel-${team}-header`}
                    >
                      <Typography className="colored-text">• {team}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="colored-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
              ))}
            </div>
          </div>
          <div className="w-full md:w-2/3 mt-8 md:mt-0 pl-0 md:pl-8">
            <img src={teamPhoto} alt="HooHacks Team" className="rounded-lg shadow-md w-full h-auto" />
          </div>
        </div>
      </div>
  );
};

export default Home;
