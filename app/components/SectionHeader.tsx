export default function SectionHeader({ children }: { children?: React.ReactNode }) {
    return (
        <h1 className="flex items-center justify-center gap-4 py-15 text-4xl font-bold">
            <span aria-hidden="true" className="text-xl text-[#87A2FC] motion-safe:animate-pulse">✦</span>
            <span className="bg-linear-to-b from-white to-[#B1CCFF] bg-clip-text text-transparent text-center">{children}</span>
            <span aria-hidden="true" className="text-xl text-[#87A2FC] motion-safe:animate-pulse [animation-delay:1s]">✦</span>
        </h1>
    );
}
