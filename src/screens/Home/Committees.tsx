import React, { useState } from 'react';

interface Committee {
    name: string;
    description: string;
    qualifications?: string[];
}

interface CommitteesProps {
    openIconUrl: string;
    closedIconUrl: string;
    dividerIconUrl: string;
}

const committees: Committee[] = [
    {
        name: 'Marketing',
        description: 'Marketing is responsible for...',
        qualifications: [
            'proficiency in Canva',
            'marketing',
            'another qualification'
        ]
    },
    { name: 'Technology', description: 'Technology committee details...',
        qualifications: [
            'proficiency in Canva',
            'marketing',
            'another qualification'
        ]
    },
    { name: 'Hacker Experience', description: 'Hacker Experience committee details...',
        qualifications: [
            'proficiency in Canva',
            'marketing',
            'another qualification'
        ]
    },
    { name: 'Finance', description: 'Finance committee details...',
        qualifications: [
            'proficiency in Canva',
            'marketing',
            'another qualification'
        ]
    },
    { name: 'External Relations', description: 'External Relations committee details...',
        qualifications: [
            'proficiency in Canva',
            'marketing',
            'another qualification'
        ]
    },
];

const Committees: React.FC<CommitteesProps> = ({ openIconUrl, closedIconUrl, dividerIconUrl }) => {
    const [openCommittees, setOpenCommittees] = useState<string[]>([]);

    const toggleCommittee = (name: string) => {
        setOpenCommittees(prev =>
            prev.includes(name)
                ? prev.filter(committee => committee !== name)
                : [...prev, name]
        );
    };

    const isOpen = (name: string) => openCommittees.includes(name);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6 text-[#2948ba]">Committees</h1>
            <div className="space-y-4">
                {committees.map((committee, index) => (
                    <div key={committee.name}
                         className={`bg-[#2848BA] rounded-[10px] overflow-hidden transition-all duration-300 ease-in-out
                           shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
                           ${isOpen(committee.name) ? 'my-4' : 'my-0'}`}>
                        <button
                            className="w-full text-left p-4 text-white font-semibold flex justify-between items-center"
                            onClick={() => toggleCommittee(committee.name)}
                        >
                            {committee.name}
                            <img
                                src={isOpen(committee.name) ? openIconUrl : closedIconUrl}
                                alt={isOpen(committee.name) ? "Open" : "Closed"}
                                className="w-6 h-6 transition-transform duration-300 ease-in-out"
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                isOpen(committee.name) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="p-4 text-white">
                                <p className="mb-2">{committee.description}</p>
                                {committee.qualifications && (
                                    <div>
                                        <h3 className="font-semibold mb-1">Qualifications:</h3>
                                        <ul className="list-disc list-inside">
                                            {committee.qualifications.map((qual, index) => (
                                                <li key={index}>{qual}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Committees;