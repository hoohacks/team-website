import { useEffect, useState } from "react";
import Navbar from "../navbar";
import teamData from 'app/data/members.json'
import Footer from "~/footer/footer";

type Committee = {
    committee: string;
    /** Title shown under each leadership headshot, e.g. "Chair" / "President" */
    role?: string;
    members: { name: string; image: string }[];
    /** Non-leadership committee members — names only, no headshots */
    general?: string[];
};

const committees = teamData as Committee[];

function MemberCard({ name, image, role, className = "" }: { name: string; image: string; role?: string; className?: string }) {
    // Fixed frame clips a restrained zoom on hover; the border warms a touch.
    // No lift, no glow — just a portrait quietly coming forward.
    const frame = "w-40 h-48 sm:w-44 sm:h-52 overflow-hidden rounded-xl border border-[#87A2FC]/35 transition-colors duration-300 ease-out group-hover:border-[#87A2FC]/70";
    return (
        // w-fit keeps the hover zone tight to the card, not the surrounding gap
        <div className={`group flex w-fit flex-col items-center text-center space-y-2 ${className}`}>
            {image ? (
                <div className={frame}>
                    <img
                        src={image}
                        alt={name}
                        width={176}
                        height={208}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
                    />
                </div>
            ) : (
                <div className={`${frame} flex items-center justify-center bg-[#87A2FC]/10`} role="img" aria-label={name}>
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-16 h-16 text-[#87A2FC]/40">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5z" />
                    </svg>
                </div>
            )}
            <div>
                <p className="font-medium">{name}</p>
                {role && <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#87A2FC]/80">{role}</p>}
            </div>
        </div>
    );
}

function CommitteeMembers({ names }: { names: string[] }) {
    return (
        <div>
            {/* Quiet tier label — muted so it reads as a section caption, not a title */}
            <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Members
            </p>
            <ul className="space-y-2.5 text-center">
                {names.map((memberName) => (
                    <li
                        key={memberName}
                        className="text-sm text-white/65 transition-colors duration-300 ease-out hover:text-white"
                    >
                        {memberName}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Team() {
    const [active, setActive] = useState(committees[0].committee);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                ticking = false;
                const scrollMiddle = window.scrollY + window.innerHeight / 2;
                let current = committees[0].committee;

                // Loop from last to first, stop at the first section above the viewport middle
                for (let i = committees.length - 1; i >= 0; i--) {
                    const section = document.getElementById(committees[i].committee);
                    if (section && scrollMiddle >= section.offsetTop) {
                        current = committees[i].committee;
                        break;
                    }
                }

                setActive(current);
            });
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <div className="flex min-h-screen bg-transparent text-white mx-4 sm:mx-8 lg:mx-20 mt-30 mb-20">
                <Navbar />

                {/* Sidebar */}
                <aside className="hidden md:flex w-1/4 h-screen sticky top-0 p-4 pt-10 flex-col">
                    <ul className="space-y-6 text-center">
                        {committees.map((c) => (
                            <li key={c.committee}>
                                <a
                                    href={`#${c.committee}`}
                                    className={`block rounded-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B1CCFF] ${active === c.committee
                                        ? "text-[#B1CCFF] font-bold"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {c.committee}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>


                {/* Main content */}
                <main className="flex-1 p-1 space-y-20">
                    {committees.map((c) => {
                        const general = c.general ?? [];
                        // With exactly two execs, seat the general members between them so the
                        // row fills the width on large screens; otherwise stack them underneath.
                        const split = general.length > 0 && c.members.length === 2;
                        return (
                            <section
                                key={c.committee}
                                id={c.committee}
                                className="scroll-mt-24"
                            >
                                <div className="mb-8 text-center">
                                    <h2 className="text-2xl sm:text-3xl font-bold">
                                        <span className="bg-linear-to-b from-white to-[#B1CCFF] bg-clip-text text-transparent">{c.committee}</span>
                                    </h2>
                                    <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-[#87A2FC]/50" />
                                </div>
                                {split ? (
                                    <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-8">
                                        <MemberCard name={c.members[0].name} image={c.members[0].image} role={c.role} className="order-1" />
                                        <div className="order-3 w-full lg:order-2 lg:w-auto lg:min-w-[9rem]">
                                            <CommitteeMembers names={general} />
                                        </div>
                                        <MemberCard name={c.members[1].name} image={c.members[1].image} role={c.role} className="order-2 lg:order-3" />
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
                                            {c.members.map((member) => (
                                                <MemberCard key={member.name} name={member.name} image={member.image} role={c.role} />
                                            ))}
                                        </div>
                                        {general.length > 0 && (
                                            <div className="mt-7">
                                                <CommitteeMembers names={general} />
                                            </div>
                                        )}
                                    </>
                                )}
                            </section>
                        );
                    })}
                </main>

            </div>
            <Footer/>
        </div>
    );
}
