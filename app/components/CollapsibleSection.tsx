import { useState } from "react";
import arrowDown from "../assets/arrowdown.svg";

export default function DropdownSection({ title, children }: { title: string; children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="border border-white/15 px-6 py-4 rounded-md cursor-pointer transition-[border-color,box-shadow] duration-300 ease-out hover:border-[#B1CCFF]/60 hover:shadow-[0_16px_32px_-20px_rgba(0,0,0,0.6)]"
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: "linear-gradient(270deg, #00042D, #121A6A)" }}
        >
            <h2 className="text-lg font-semibold">
                <button
                    type="button"
                    aria-expanded={isOpen}
                    className="flex w-full justify-between items-center gap-4 text-left cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B1CCFF]"
                >
                    {title}
                    <img src={arrowDown} alt="" aria-hidden="true" className={`inline-block transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
            </h2>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className={`overflow-hidden min-h-0 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                    <hr className="my-4 border-white/10" />
                    <div className="pb-1 text-white/85">{children}</div>
                </div>
            </div>
        </div>
    );
}
