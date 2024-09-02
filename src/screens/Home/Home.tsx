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
                <h1 className="text-2xl font-bold text-[#121A6A] mb-4 pb-10">What is HooHacks?</h1>
                    <p className="pt-5 text-base text-gray-800 leading-relaxed">
                        HooHacks is a student-run organization at the University of Virginia that fosters innovation and
                        collaboration among students through technology.
                        Each year, we host events that bring together hundreds of students to tackle real-world
                        challenges, encouraging creativity and hands-on problem-solving.

                        We actively partner with industry leaders and student organizations to connect students with
                        opportunities, foster collaboration, and inspire innovation.
                    </p>
                </div>
                <div className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0">
                    <img src={circleImage} alt="Hoohacks Circular Logo" className="w-40 h-40 md:w-52 md:h-52"/>
                </div>
            </div>

            {/* Our Events */}
            <div className="w-full max-w-4xl pb-16 md:pb-32 text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-[#121A6A] mb-8">Our Events</h1>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-10 pt-10">
                    <div className="w-full md:w-2/6">
                        <a href="https://ideathon.hoohacks.io/" target="_blank" rel="noopener noreferrer">
                            <img src={ideathonLogo} alt="Ideathon Logo" className="max-w-full h-auto" />
                        </a>
                    </div>
                    <div className="w-full md:w-2/6 pt-4">
                        <a href="https://www.hoohacks.io/" target="_blank" rel="noopener noreferrer">
                            <img src={hoohacksLogoSmall} alt="HooHacks Logo" className="max-w-full h-auto" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-screen-lg mx-auto px-4 py-12 pb-40">
                <div className="flex flex-col lg:flex-row justify-between items-start">
                    <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                        <h1 className="text-2xl font-bold text-[#121A6A] mb-4 pb-10">HooHacks Team</h1>
                        <div>
                            <Accordion>
                                <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel1-content" id="panel1-header">
                                    <Typography className="text-[#000000]">Technology</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        The Technology Committee is responsible for HooHacks' software infrastructure,
                                        including building our website, developing participant registration systems, and
                                        engineering the project judging software to ensure a smooth experience for
                                        everyone involved.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel2-content" id="panel2-header">
                                    <Typography className="text-[#000000]">Hacker Experience</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        The Hacker Experience Team is responsible for organizing all aspects of the
                                        hackathon's logistics and operations. They ensure the overall flow of the event
                                        runs smoothly, coordinating schedules, managing speaker and mentor outreach, and
                                        providing a seamless experience for all attendees.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel3-content" id="panel3-header">
                                    <Typography className="text-[#000000]">Internal</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        The Internal Committee is tasked with planning engaging social events, managing
                                        internal communication between the executive team and members, organizing
                                        meeting minutes and logistics, and fostering interdisciplinary skills across
                                        various committees to enhance team collaboration.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel4-content" id="panel4-header">
                                    <Typography className="text-[#000000]">Marketing</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        The Marketing Committee is responsible for managing a mailing list of over 5,000
                                        contacts, crafting the event's brand and content, and building the website. They
                                        work with universities nationwide to recruit attendees and promote events
                                        through various channels, including flyers, digital marketing, and email
                                        campaigns.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel5-content" id="panel5-header">
                                    <Typography className="text-[#000000]">Finance</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        The Finance Committee oversees the management of over $100K in corporate
                                        sponsorships, allocates funds for essential needs like food, transportation, and
                                        reimbursements, and interfaces directly with the UVA CS Financial Office to
                                        ensure smooth financial operations.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel6-content" id="panel6-header">
                                    <Typography className="text-[#000000]">Sponsorship</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        The Sponsorship Team is dedicated to building and maintaining relationships with
                                        corporate sponsors like Google, Microsoft, Capital One, and more to secure
                                        funding. They act as the primary point of contact for sponsors and organize
                                        company-sponsored events throughout year to enhance engagement and
                                        collaboration.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 lg:pl-24 flex justify-center">
                        <img src={teamPhoto} alt="HooHacks Team" className="rounded-lg shadow-md max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
