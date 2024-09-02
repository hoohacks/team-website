import React from "react";
import hoohacksLogo from "../../assets/hoohacks_website_logo.gif"; // Big HooHacks GIF
import circleImage from "../../assets/circleLogo.png"; // Circular image (placeholder for actual image)
import ideathonLogo from "../../assets/ideathonLogo.png"; // Ideathon logo
import hoohacksLogoSmall from "../../assets/longhoohacks.png"; // Small HooHacks logo
import teamPhoto from "../../assets/teamphoto.png"; // Team photo
//accordion imports
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//css import
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="w-4/5 mx-auto flex justify-center items-center pb-48">
          <img src={hoohacksLogo} alt="HooHacks Main Logo" className="max-w-full h-auto" />
        </div>

        <div className="w-1/2 flex justify-center items-start pb-48">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="w-3/5">
              <h1 className="text-2xl font-bold text-[#121A6A] mb-2">What is Hoohacks?</h1>
              <p className="pt-5 text-base text-gray-800 leading-relaxed">
              HooHacks is a student-run organization at the University of Virginia that fosters innovation and collaboration among students through technology. 
        Each year, we host events that bring together hundreds of students to tackle real-world challenges, encouraging creativity and hands-on problem-solving.

        We actively partner with industry leaders and student organizations to connect students with opportunities, foster collaboration, and inspire innovation.
              </p>
            </div>
            <div className="w-2/5 flex justify-center">
              <img src={circleImage} alt="Hoohacks Circular Logo" className="w-52 h-52" />
            </div>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-start pb-32">
          <div className="w-full">
            <h1 className="text-2xl font-bold text-[#121A6A] mb-2 text-left">Our Events</h1>
          </div>
        </div>


        <div className="w-1/2 flex flex-col md:flex-row justify-center items-center pb-48 space-y-5 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-2/5 text-center">
            <a href="https://ideathon.hoohacks.io/" target="_blank" rel="noopener noreferrer">
              <img src={ideathonLogo} alt="Ideathon Logo" />
            </a>
          </div>

          <div className="w-full md:w-2/5 text-center pt-4">
            <a href="https://www.hoohacks.io/" target="_blank" rel="noopener noreferrer">
              <img src={hoohacksLogoSmall} alt="HooHacks Logo" />
            </a>
          </div>
        </div>




        <div className="w-1/2 flex justify-between items-start pb-48">
          <div className="w-1/3">
            <h1 className="text-2xl font-bold text-[#121A6A] mb-4 pb-10">HooHacks Team</h1>
            <div>
              <Accordion //className="colored-container"
              >
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  //className="space-y-2 text-lg text-[#121A6A]"
                >
                  <Typography className="colored-text">Technology</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="colored-text">
                  The Technology Committee is responsible for HooHacks' software infrastructure, including building our website, developing participant registration systems, and engineering the project judging software to ensure a smooth experience for everyone involved.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              
              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography className="colored-text">Hacker Experience</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="colored-text">
                  The Hacker Experience Team is responsible for organizing all aspects of the hackathon's logistics and operations. 
                  They ensure the overall flow of the event runs smoothly, coordinating schedules, managing speaker and mentor outreach, and providing a seamless experience for all attendees.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography className="colored-text">Internal</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="colored-text">
                  The Internal Committee is tasked with planning engaging social events, managing internal communication between the executive team and members, organizing meeting minutes and logistics, and fostering interdisciplinary skills across various committees to enhance team collaboration.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography className="colored-text">Marketing</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="colored-text">
                  The Marketing Committee is responsible for managing a mailing list of over 5,000 contacts, crafting the event's brand and content, and building the website. 
                  They work with universities nationwide to recruit attendees and promote events through various channels, including flyers, digital marketing, and email campaigns.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography className="colored-text">Finance</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="colored-text">
                    
The Finance Committee oversees the management of over $100K in corporate sponsorships, allocates funds for essential needs like food, transportation, and reimbursements, and interfaces directly with the UVA CS Financial Office to ensure smooth financial operations.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography className="colored-text">Sponsorship</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="colored-text">
                  The Sponsorship Team is dedicated to building and maintaining relationships with corporate sponsors like Google, Microsoft, Capital One, and more to secure funding. 
                  They act as the primary point of contact for sponsors and organize company-sponsored events throughout the Fall semester to enhance engagement and collaboration.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>

          <div className="w-2/3 pl-8">
            <img src={teamPhoto} alt="HooHacks Team" className="rounded-lg shadow-md" />
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
