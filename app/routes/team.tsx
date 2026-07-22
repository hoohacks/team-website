import { useEffect, useState } from "react";
import Navbar from "../navbar";
import teamData from 'app/data/members.json'
import Footer from "~/footer/footer";

function MemberCard({ name, image, committee }: { name: string; image: string; committee: string }) {
    return (
        <div className="flex justify-center">
            {/* w-fit keeps the hover zone tight to the card instead of the whole grid cell */}
            <div className="group flex w-fit flex-col items-center text-center space-y-2">
                <img
                    src={image}
                    alt={name}
                    width={180}
                    height={200}
                    loading="lazy"
                    decoding="async"
                    className="w-45 h-50 object-cover rounded-xl border border-[#87A2FC]/40 transition-all duration-300 ease-out group-hover:border-[#B1CCFF]/70 group-hover:shadow-[0_18px_32px_-16px_rgba(0,4,45,0.7)] motion-safe:group-hover:-translate-y-1"
                />
                <p className="font-medium transition-colors duration-300 group-hover:text-[#B1CCFF]">{name}</p>
                <p className="text-sm text-white/55">{committee}</p>
            </div>
        </div>
    );
}

export default function Team() {
    const [active, setActive] = useState(teamData[0].committee);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                ticking = false;
                const scrollMiddle = window.scrollY + window.innerHeight / 2;
                let current = teamData[0].committee;

                // Loop from last to first, stop at the first section above the viewport middle
                for (let i = teamData.length - 1; i >= 0; i--) {
                    const section = document.getElementById(teamData[i].committee);
                    if (section && scrollMiddle >= section.offsetTop) {
                        current = teamData[i].committee;
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
            <div className="flex min-h-screen bg-transparent text-white mx-0 sm:mx-20 my-30">
                <Navbar />

                {/* Sidebar */}
                <aside className="hidden md:flex w-1/4 h-screen sticky top-0 p-4 pt-10 flex-col">
                    <ul className="space-y-6 text-center">
                        {teamData.map((c) => (
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
                <main className="flex-1 p-1 space-y-24">
                    <h1 className="text-5xl font-bold text-center mb-12">
                        <span className="bg-linear-to-b from-white to-[#B1CCFF] bg-clip-text text-transparent">Meet The Team</span>
                    </h1>
                    {teamData.map((c) => (
                        <section
                            key={c.committee}
                            id={c.committee}
                            className="scroll-mt-24"
                        >
                            <h2 className="text-3xl font-bold text-center mb-10">
                                <span className="bg-linear-to-b from-white to-[#B1CCFF] bg-clip-text text-transparent">{c.committee}</span>
                            </h2>
                            <div className={`grid grid-cols-1 ${c.members.length > 1 ? "md:grid-cols-2" : ""} gap-10`}>
                                {c.members.map((member) => (
                                    <MemberCard key={member.name} name={member.name} image={member.image} committee={c.committee} />
                                ))}
                            </div>
                        </section>
                    ))}
                </main>

            </div>
            <Footer/>
        </div>
    );
}
