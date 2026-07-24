import { Link } from "react-router";

const base = "inline-block text-center text-black bg-[#B1CCFF] cursor-pointer transition-all duration-200 ease-out hover:bg-[#D6E3FF] hover:shadow-[0_10px_24px_-8px_rgba(0,4,45,0.6)] motion-safe:hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B1CCFF]";

const sizes = {
    sm: "px-4 py-2 rounded-md font-medium",
    md: "px-6 py-3 rounded-lg font-semibold"
};

type ButtonProps = {
    children: React.ReactNode;
    /** Internal route — rendered with react-router's Link */
    to?: string;
    /** External URL — rendered as a plain anchor */
    href?: string;
    size?: keyof typeof sizes;
    className?: string;
};

export default function Button({ children, to, href, size = "md", className = "" }: ButtonProps) {
    const classes = `${base} ${sizes[size]} ${className}`;
    if (to) {
        return <Link to={to} className={classes}>{children}</Link>;
    }
    return <a href={href} className={classes}>{children}</a>;
}
