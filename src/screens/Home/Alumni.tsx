import React from "react";
import { useState } from "react";
import '../../Alumni.css';
import profileImage from '../../assets/profile_image.png';
import downArrow from '../../assets/downArrow.png';
import upArrow from '../../assets/upArrow.png';


const Alumni = () => {
    const [selectedYear, setSelectedYear] = useState(0);

    const handleBarClick = (year: number)=>{
      setSelectedYear(selectedYear === year ? 0 : year);
    }

    const peopleData = [
        { year: 2024, people: ["Year 1 Alum","Year 1 Alum", "Year 1 Alum"], linkedIn: ["linkedin.com", "linkedin.com", "linkedin.com"] },
        { year: 2022, people: ["Year 2 Alum", "Year 2 Alum", "Year 2 Alum"], linkedIn: ["linkedin.com", "linkedin.com", "linkedin.com"] },
        { year: 2021, people: ["Year 3 Alum", "Year 3 Alum", "Year 3 Alum"], linkedIn: ["linkedin.com", "linkedin.com", "linkedin.com"] },
        { year: 2020, people: ["Year 4 Alum", "Year 4 Alum", "Year 4 alum"], linkedIn: ["linkedin.com", "linkedin.com", "linkedin.com"] },
      ];

    return (
        <div>
            <div>
                <h2
                    style={{ color: "#121A6A" }}
                    className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-8"
                >
                    Our Alumni
                </h2>
                <p className="flex flex-col items-center md:flex-row-reverse md:justify-center"> Where are they now? </p>
            </div>

            <div className="timeline">
                <div className="bars">
                    {peopleData.map((item, index)=> (
                        <div>
                            {selectedYear === item.year ? (null) : <div
                                key={index}
                                className={`bar ${selectedYear === item.year ? 'active' : ''}`}
                                style={{height: selectedYear === item.year ? '80%' : '20%'}}
                                onClick={() => handleBarClick(item.year)}
                            >
                                {item.year}
                                <img className="arrow" src={upArrow}/>
                            </div>
                            }
                            {selectedYear === item.year ? (
                                <div className = "dropdown"
                                onClick={() => handleBarClick(item.year)}
                                >
                                    <div className="topRow">
                                        <h3 className="year">{item.year}</h3>
                                        <img className="arrow" src={downArrow}/>
                                    </div>
                                    <div className="peopleCol">
                                        <div className="peopleRow">
                                                {item.people.map((person, index)=>(
                                                    <div className = "person">
                                                        <img className="profileImage" src={profileImage}/>
                                                        <h3 className="info" key={index}>{person}</h3>
                                                    </div>
                                                ))}
                                        </div>
                                        <div className="peopleRow">
                                                {item.people.map((person, index)=>(
                                                    <div className = "person">
                                                        <img className="profileImage" src={profileImage}/>
                                                        <h3 className="info" key={index}>{person}</h3>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            ) : null }
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Alumni;