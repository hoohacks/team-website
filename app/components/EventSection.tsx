import { Link } from "react-router";

export default function EventSection({ children, title, date, logo, href, image, logoStyles }: { children: React.ReactNode, title: string, date: string, logo: string, href: string, image: string | null, logoStyles?: React.CSSProperties }) {
    return (
        <Link to={href} className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B1CCFF]">
            <div className="p-12 rounded-lg border border-transparent transition-all duration-300 ease-out group-hover:border-[#87A2FC]/60 group-hover:shadow-[0_24px_48px_-24px_rgba(0,4,45,0.7)] motion-safe:group-hover:-translate-y-1" style={{ background: "linear-gradient(83.38deg, rgba(0, 4, 45, 0.35) 0.63%, rgba(135, 162, 252, 0.5) 96.67%) border-box" }}>
                <div className="flex gap-12 md:flex-row flex-col">
                    <div className="flex-4">
                        <img src={logo} alt={`${title}`} className="w-80 my-10" style={{ ...logoStyles }} />
                        <div>
                            <p className="text-xl pb-10">{date}</p>
                            <span className="font-[Josefin Sans] font-medium">
                                {children}
                            </span>
                        </div>
                    </div>
                    <div className="flex-5 self-center">
                        {image ? <div className="overflow-hidden rounded-md"><img src={image} alt={`${title} event image`} className="w-full h-80 object-cover rounded-md transition-transform duration-500 motion-safe:group-hover:scale-105" /></div> : <div className="bg-gray-200 w-full h-80 rounded-lg" />}
                    </div>
                </div>
            </div>
        </Link>
    );
}
