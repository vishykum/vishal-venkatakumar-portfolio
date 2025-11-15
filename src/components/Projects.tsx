//Projects section

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useState } from "react";
import ProjectItems from "../helpers/projects.json";
import {  AnimatePresence, motion } from "framer-motion";

type ProjectItem = {
    img_url: string;
    name: string;
    description: string[];
    tech: string[];
};

const projects = ProjectItems as ProjectItem[];

function Projects() {
    const [projIndex, setProjIndex] = useState(0);

    return (
        <section id="projects" className='scroll-mt-16'>
        {/* Mobile Layout */}
        <div className="bg-neutral-800 h-1/2 w-full flex flex-col justify-center items-center md:hidden mr-2 pt-2 px-2 my-2">
            <div className="w-full flex justify-around items-center">
                <button onClick={() => {setProjIndex((prev) => (prev - 1 + projects.length) % projects.length)}} className="text-primary"><BiLeftArrow size={30}/></button>
                <h2 className="text-3xl">Projects</h2>
                <button onClick={() => setProjIndex((prev) => (prev + 1) % projects.length)} className="text-primary"><BiRightArrow size={30}/></button>
            </div>
            <div className="h-full w-full flex flex-col justify-center items-center">
                <div className="w-full h-1/10 text-center">
                    <span>{projIndex+1}/{projects.length}</span>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={projects[projIndex].name}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="h-[70vh] w-full flex flex-col justify-center items-center border border-primary rounded-sm"
                    >
                        <div className="h-1/2 w-full">
                            <img 
                                title="Project Pic"
                                src={new URL(`../assets/${projects[projIndex].img_url ? projects[projIndex].img_url : "default-project-pic.jpg"}`, import.meta.url).href}
                                alt='Project Pic'
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className="w-full h-1/2 border-t border-primary flex flex-col justify-around items-center">
                            <h2 className="text-primary text-xl font-bold font-mono">{projects[projIndex].name}</h2>
                            <div className="flex flex-wrap justify-center items-center">
                                {projects[projIndex].tech && projects[projIndex].tech.map((item, idx) => (
                                    <div key={idx} className=" my-1 text-sm mx-0.5 text-center border-2 rounded-lg p-px bg-white/20 hover:bg-white/90 text-white hover:text-black hover:border-primary cursor-pointer">{item}</div>
                                ))}
                            </div>
                            <ul className="ml-5 list-disc">
                                {projects[projIndex].description && projects[projIndex].description.map((item, idx) => (
                                    <li key={idx} className="text-sm mb-1">{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>


        {/* Desktop/Laptop Layout */}
        <div className="bg-neutral-800 hover:bg-neutral-900 transition-colors duration-300 ease-in-out h-[75vh] w-full hidden md:flex 
            flex-col justify-around 2xl:justify-start 2xl:pt-3 items-center px-1 my-2"
        >
            <h2 className="text-3xl">Projects</h2>
            <div className="h-full w-full flex flex-col justify-center items-center">
                <div className="h-full w-full py-2  flex items-center justify-between gap-2 px-5">
                    <button onClick={() => {setProjIndex((prev) => (prev - 1 + projects.length) % projects.length)}} className="text-primary"><BiLeftArrow size={30}/></button>
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={projects[projIndex].name}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="h-full w-4/5 flex justify-center items-center border border-primary rounded-sm"
                        >
                            <div className="h-full w-1/2">
                                <img 
                                    title="Project Pic"
                                    src={new URL(`../assets/${projects[projIndex].img_url ? projects[projIndex].img_url : "default-project-pic.jpg"}`, import.meta.url).href}
                                    alt='Project Pic'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className="h-full w-1/2 border-l border-primary flex flex-col justify-around items-center">
                                <div className="w-full h-1/4" />
                                <h2 className="text-primary text-xl 2xl:text-3xl font-bold font-mono">{projects[projIndex].name}</h2>
                                <div className="h-full w-full flex flex-col justify-center items-center gap-3">
                                    <div className="flex justify-center items-center">
                                        {projects[projIndex].tech && projects[projIndex].tech.map((item, idx) => (
                                            <div key={idx} className="text-sm 2xl:text-lg mx-0.5 text-center border-2 rounded-lg p-px bg-white/20 hover:bg-white/90 text-white hover:text-black hover:border-primary cursor-pointer">{item}</div>
                                        ))}
                                    </div>
                                    <ul className="ml-5 list-disc">
                                        {projects[projIndex].description && projects[projIndex].description.map((item, idx) => (
                                            <li key={idx} className="text-sm 2xl:text-lg mb-1">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    <button onClick={() => setProjIndex((prev) => (prev + 1) % projects.length)} className="text-primary"><BiRightArrow size={30}/></button>
                </div>
                <div className="w-full h-1/10 text-center">
                    <span>{projIndex+1}/{projects.length}</span>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Projects;