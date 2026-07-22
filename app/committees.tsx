import SectionHeader from "./components/SectionHeader";
import DropdownSection from "./components/CollapsibleSection";
import Button from "./components/Button";
import Reveal from "./components/Reveal";
import committees from "./data/committees.json";

export default function Events() {
    return (
        <div id="committees" className="w-250 max-w-full flex flex-col mx-auto my-16 scroll-mt-10">
            <Reveal>
                <SectionHeader>Committees</SectionHeader>
            </Reveal>
            <div className="flex flex-col gap-3 p-4">
                {
                    committees.map((committee, i) => (
                        <Reveal key={committee.name} delay={i * 75}>
                            <DropdownSection title={committee.name}>
                                {committee.description}
                            </DropdownSection>
                        </Reveal>
                    ))
                }
            </div>
            <Reveal className="flex">
                <Button to="/team" className="my-4 w-fit m-auto">Meet the Team</Button>
            </Reveal>
        </div>
    );
}
