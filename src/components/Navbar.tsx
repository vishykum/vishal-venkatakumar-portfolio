//Navbar component

import { BiEnvelope } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Navbar() {
    return (
        <nav id="navbar" className="w-full h-15 bg-black top-0 sticky">
            <div className="flex flex-row items-center justify-start h-full w-full">
                <div id="logo-nav-div" className="h-full w-1/4 flex justify-center items-center">
                    <h2 className="text-4xl text-primary font-mono">Vishal</h2>
                </div>
                <div id="page-links-nav-div" className="h-full w-1/2 flex justify-center items-center">
                    <ul className="flex justify-around items-center h-full w-full">
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
                    </ul>
                </div>
                <div id="external-links-nav-div" className="h-full w-1/4 flex justify-center items-center">
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
    );
}

export default Navbar;