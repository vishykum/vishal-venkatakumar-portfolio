//Navbar component

import { useRef, useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import useClickOutside from "../helpers/useClickOutside";


function Navbar() {

    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const navRef = useRef<HTMLElement | null>(null);

    //(For mobile only) Contract drop down menu if user clicks outside component
    useClickOutside(navRef, () => setHamburgerClicked(false));

    return (
        <>
            <nav ref={navRef} id="navbar" className="fixed w-full h-15 bg-black/90 top-0 z-50">
                {/* Mobile Layout */}
                <div className="flex md:hidden flex-row items-center justify-around h-full w-full">
                    <div id="logo-nav-div-mobile" className="h-full w-1/4 flex justify-center items-center">
                        <h2 className="text-4xl text-primary font-mono">Vishal</h2>
                    </div>
                    <div id="links-nav-div-mobile" className="h-full w-1/4 flex justify-center items-center">
                        <ul className="flex justify-center items-center h-full w-full">
                            <a href="https://www.linkedin.com/in/vishal-venkatakumar-267892257" target="_blank">
                                <li className="mr-1 p-2 hover:rounded-3xl hover:bg-primary/30 text-primary  hover:text-white">
                                    <FaLinkedin title="LinkedIn Profile" size={30}/>
                                </li>
                            </a>
                            <a href="https://github.com/vishykum" target="_blank">
                                <li className="mr-1 p-2 hover:rounded-3xl hover:bg-primary/30 text-primary  hover:text-white">
                                    <FaGithub  title="GitHub Portfolio" size={30}/>
                                </li>
                            </a>
                            <a href="mailto:vishykum@ymail.com">
                                <li className="p-2 hover:rounded-3xl hover:bg-primary/30 text-primary  hover:text-white">
                                    <BiEnvelope title="Email Address" size={30}/>
                                </li>
                            </a>
                            <div id="page-links-nav-div-mobile" className={`ml-1 p-2 rounded-full ${hamburgerClicked ? "bg-neutral-400/30 text-primary" : "text-neutral-400"}`}><GiHamburgerMenu onClick={() => setHamburgerClicked(!hamburgerClicked)} title="Expand" size={30}/></div>
                        </ul>
                    </div>
                </div>
                {/* Mobile Dropdown Menu */}
                <ul className={`absolute left-0 top-full w-full md:hidden bg-neutral-800 text-xl text-primary flex flex-col gap-2 pb-2 items-center justify-around transition-all duration-200 ease-out origin-top
                     ${hamburgerClicked ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`
                }>
                    <a onClick={() => {setHamburgerClicked(false)}} href="#home" className="h-full w-full active:bg-neutral-700/30 active:text-white flex items-center justify-center">
                            Home
                    </a>
                    <a onClick={() => {setHamburgerClicked(false)}} href="#about" className="h-full w-full active:bg-neutral-700/30 active:text-white flex items-center justify-center">
                            About
                    </a>
                    <a onClick={() => {setHamburgerClicked(false)}} href="#experience" className="h-full w-full active:bg-neutral-700/30 active:text-white flex items-center justify-center">
                        Education & Experience
                    </a>
                    <a onClick={() => {setHamburgerClicked(false)}} href="#projects" className="h-full w-full active:bg-neutral-700/30 active:text-white flex items-center justify-center">
                        Projects
                    </a>
                </ul>

                {/* Laptop/Desktop Layout */}
                <div className="hidden md:flex flex-row items-center justify-start h-full w-full">
                    <div id="logo-nav-div-desktop" className="h-full w-1/4 flex justify-center items-center">
                        <h2 className="text-4xl text-primary font-mono">Vishal</h2>
                    </div>
                    <div id="page-links-nav-div-desktop" className="h-full w-1/2 flex justify-center items-center">
                        <ul className="flex justify-around items-center h-full w-full">
                            <a href="#home" className="cursor-pointer">
                                <li className="group/home flex flex-col items-start justify-start">
                                    <span className="flex-1">Home</span>
                                    <span
                                     className="
                                     bg-primary
                                     w-full
                                     h-0.5
                                     origin-center
                                     scale-x-0
                                     transition-transform
                                     duration-300
                                     group-hover/home:scale-x-100"
                                     />
                                </li>
                            </a>
                            <a href="#about" className="cursor-pointer">
                                <li className="group/about flex flex-col items-start justify-start">
                                    <span className="flex-1">About</span>
                                    <span className="
                                     bg-primary
                                     w-full
                                     h-0.5
                                     origin-center
                                     scale-x-0
                                     transition-transform
                                     duration-300
                                     group-hover/about:scale-x-100" />
                                </li>
                            </a>
                            <a href="#experience" className="cursor-pointer">
                                <li className="group/experience flex flex-col items-start justify-start">
                                    <span className="flex-1">Education & Experience</span>
                                    <span className="
                                     bg-primary
                                     w-full
                                     h-0.5
                                     origin-center
                                     scale-x-0
                                     transition-transform
                                     duration-300
                                     group-hover/experience:scale-x-100" />
                                </li>
                            </a>
                            <a href="#projects" className="cursor-pointer">
                                <li className="group/projects flex flex-col items-start justify-start">
                                    <span className="flex-1">Projects</span>
                                    <span className="
                                     bg-primary
                                     w-full
                                     h-0.5
                                     origin-center
                                     scale-x-0
                                     transition-transform
                                     duration-300
                                     group-hover/projects:scale-x-100" />
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div id="external-links-nav-div-desktop" className="h-full w-1/4 flex justify-center items-center">
                        <ul className="flex justify-center items-center h-full w-full">
                            <a href="https://www.linkedin.com/in/vishal-venkatakumar-267892257" target="_blank">
                                <li className="mr-1 p-2 hover:rounded-3xl hover:bg-primary/30 text-primary  hover:text-white">
                                    <FaLinkedin title="LinkedIn Profile" size={30}/>
                                </li>
                            </a>
                            <a href="https://github.com/vishykum" target="_blank">
                                <li className="mr-1 p-2 hover:rounded-3xl hover:bg-primary/30 text-primary  hover:text-white">
                                    <FaGithub  title="GitHub Portfolio" size={30}/>
                                </li>
                            </a>
                            <a href="mailto:vishykum@ymail.com">
                                <li className="p-2 hover:rounded-3xl hover:bg-primary/30 text-primary  hover:text-white">
                                    <BiEnvelope title="Email Address" size={30}/>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;