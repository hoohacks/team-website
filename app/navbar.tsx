import { Link } from "react-router";
import hoohacksOwlLogo from "~/assets/hoohacks-owl-logo.svg";
import Button from "~/components/Button";

export default function Navbar() {
    const navItems = [
        { name: "Meet The Team", href: "/team" },
    ];

    return (
        <nav className="w-full absolute top-0 left-0 z-50 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="inline-block rounded-md transition duration-300 ease-out opacity-90 hover:opacity-100 motion-safe:hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B1CCFF]">
                    <img src={hoohacksOwlLogo} alt="Logo"/>
                </a>

                {/* Navigation Links + Button (grouped on right) */}
                <div className="flex items-center space-x-12">
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className="relative text-white transition-colors duration-300 hover:text-[#B1CCFF] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#B1CCFF] after:transition-[width] after:duration-300 hover:after:w-full focus-visible:text-[#B1CCFF] focus-visible:after:w-full focus-visible:outline-none"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Join Button */}
                    <Button to="/join" size="sm">Join</Button>
                </div>
            </div>
        </nav>
    );
}
