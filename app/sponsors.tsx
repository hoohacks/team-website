import SectionHeader from "./components/SectionHeader";
import Reveal from "./components/Reveal";
import sponsors from "./data/sponsors.json";

type Sponsor = { name: string; logo: string; website: string; scale?: number };

/**
 * Seamless marquee row: the strip is rendered twice and the track translates
 * by exactly -50%, so the loop point is invisible. Edges fade out with a CSS
 * mask instead of clipping logos mid-tile. Pauses for reduced-motion users
 * and while a tile inside has keyboard focus.
 */
function SponsorRow({ items, reverse = false, duration }: { items: Sponsor[]; reverse?: boolean; duration: number }) {
    const strip = (ariaHidden: boolean) => (
        <ul className="flex gap-8 pr-8" aria-hidden={ariaHidden || undefined}>
            {items.map((sponsor) => (
                <li key={sponsor.name} className="shrink-0">
                    <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={ariaHidden ? -1 : undefined}
                        className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B1CCFF]"
                    >
                        <div className="w-60 h-25 px-8 py-4 rounded-xl bg-white transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 hover:shadow-[0_16px_32px_-16px_rgba(0,4,45,0.8)]">
                            <img src={sponsor.logo} alt={sponsor.name} loading="lazy" className="w-full h-full object-contain" style={sponsor.scale ? { transform: `scale(${sponsor.scale})` } : undefined} />
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <div className="overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
                className="flex w-max animate-[marquee_60s_linear_infinite] motion-reduce:[animation-play-state:paused] has-[:focus-visible]:[animation-play-state:paused]"
                style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : undefined }}
            >
                {strip(false)}
                {strip(true)}
            </div>
        </div>
    );
}

export default function Sponsors() {
    const topSponsors = sponsors.slice(0, Math.ceil(sponsors.length / 2));
    const bottomSponsors = sponsors.slice(Math.ceil(sponsors.length / 2));

    return (
        <div id="sponsors" className="w-full mt-16 mb-32 scroll-mt-10">
            <Reveal>
                <SectionHeader>Sponsors</SectionHeader>
            </Reveal>
            <Reveal>
                <SponsorRow items={topSponsors} duration={topSponsors.length * 7} />
                <SponsorRow items={bottomSponsors} duration={bottomSponsors.length * 8} reverse />
            </Reveal>
        </div>
    );
}
