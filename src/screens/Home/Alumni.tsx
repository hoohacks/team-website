import React from "react";
import { useState } from "react";
import '../../Alumni.css';


const Alumni = () => {
    const [selectedYear, setSelectedYear] = useState(0);

    const handleBarClick = (year: number)=>{
      setSelectedYear(selectedYear === year ? 0 : year);
    }

    const eventsData = [
        { year: 2020, events: ["Event 1 description", "Event 2 description"] },
        { year: 2021, events: ["Event 3 description"] },
        { year: 2022, events: ["Event 4 description", "Event 5 description", "Event 6 description"] },
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
                    {eventsData.map((item, index)=> (
                        <div>
                            {selectedYear === item.year ? (null) : <div
                                key={index}
                                className={`bar ${selectedYear === item.year ? 'active' : ''}`}
                                style={{height: selectedYear === item.year ? '80%' : '20%'}}
                                onClick={() => handleBarClick(item.year)}
                            >
                                {item.year}
                            </div>}
                            {selectedYear === item.year ? (
                                <div className = "dropdown"
                                onClick={() => handleBarClick(item.year)}
                                >
                                    <div className="topRow">
                                        <h3 className="year">{item.year}</h3>
                                        <h3 className="arrow"> _ </h3>
                                    </div>
                                    <h3>
                                        {item.events.map((event, index) => (
                                        <h3 className="info" key={index}>{event}</h3>
                                    ))}
                                    </h3>
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