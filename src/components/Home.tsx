//Home component
import Resume from '../assets/final_resume (Soft Dev).pdf';
import ProfilePic from '../assets/profile_pic.jpg';
import { BsPaperclip } from "react-icons/bs";
import ReactLogo from "../assets/react.svg";
import NodeLogo from "../assets/node.svg";
import MySQLLogo from "../assets/mysql.svg";
import { motion } from "framer-motion";

function Home() {
    return (
        <section id="home" className='relative scroll-mt-16 overflow-hidden'>
        {/* Mobile Layout */}
        <div className="bg-neutral-900 h-3/4 w-full flex flex-col justify-around items-center md:hidden mr-2 py-2">
            <div className="h-50 w-50 rounded-full bg-neutral-300 z-25">
                <img 
                    title="Profile Pic"
                    src={ProfilePic}
                    alt='Profile Pic'
                    className='w-full h-full object-cover rounded-full'
                />
            </div>
            <h1 className="text-primary font-mono flex flex-col justify-around items-center z-25">
                <span>Vishal</span>
                <span>Venkatakumar</span>
                </h1>
            <div className="mt-5 text-l flex flex-col items-center justify-center text-center z-25">
                <p>I'm a <span className="text-primary">full-stack developer</span> who enjoys turning complex problems into clean, reliable software.</p>
            </div>
            <p className="mt-2 text-l text-center z-25">Full-Stack Web Development | React | Express | SQL Databases</p>
            <a href={Resume} download="Resume_VishalVenkatakumar z-25" target='_blank'>
                <button className="flex justify-center items-center mt-2 bg-neutral-800 active:bg-white/30 text-white active:text-primary">
                    Resume <BsPaperclip className="ml-2" />
                </button>
            </a>


            <motion.img
            src={ReactLogo}
            alt="React Logo"
            className="absolute opacity-60 w-10 h-10"
            style={{ top: "8%", left: "12%" }}   // start position
            initial={{ x: 0, y: 0 }}
            animate={{
                // wander around
                x: [0, 260, -120, 240, -180, 140, 0],
                y: [0, -160, 220, -90, 260, -40, 0],
                // little jumpy scale
                scale: [1, 1.1, 0.95, 1.05, 1],
                rotate: [0, 10, -10, 5, -5, 0],
            }}
            transition={{
                duration: 50,        // full loop time
                repeat: Infinity,
                ease: "easeInOut",
            }}
            />

            <motion.img
            src={NodeLogo}
            alt="NodeJS Logo"
            className="absolute opacity-90 w-10 h-10"
            style={{ top: "72%", left: "18%" }}   // start position
            initial={{ x: 0, y: 0 }}
            animate={{
                // wander around
                x: [0, -200, 140, -260, 160, -120, 0],
                y: [0, -280, -60, 220, 80, 260, 0],
                // little jumpy scale
                scale: [1, 1.1, 0.95, 1.05, 1],
                rotate: [0, 10, -10, 5, -5, 0],
            }}
            transition={{
                duration: 50,        // full loop time
                repeat: Infinity,
                ease: "easeInOut",
            }}
            />

            <motion.img
            src={MySQLLogo}
            alt="MySQL Logo"
            className="absolute opacity-90 w-10 h-10"
            style={{ top: "15%", left: "78%" }}   // start position
            initial={{ x: 0, y: 0 }}
            animate={{
                // wander around
                x: [0, -240, 220, -160, 180, -80, 0],
                y: [0, 120, -180, 240, -120, 80, 0],
                // little jumpy scale
                scale: [1, 1.05, 0.98, 1.08, 1],
                rotate: [0, -8, 12, -6, 6, 0],
            }}
            transition={{
                duration: 50,        // full loop time
                repeat: Infinity,
                ease: "easeInOut",
            }}
            />
        </div>


        {/* Desktop/Laptop Layout */}
        <div className="bg-neutral-900 h-3/4 w-full hidden md:flex flex-col 2xl:h-[75vh] justify-center xl:gap-4 items-center pb-3 pt-2">
            <div className="h-50 w-50 rounded-full bg-neutral-300 z-25">
                <img 
                    title="Profile Pic"
                    src={ProfilePic}
                    alt='Profile Pic'
                    className='w-full h-full object-cover rounded-full'
                />
            </div>
            <h1 className="text-primary font-mono z-25">Vishal Venkatakumar</h1>
            <div className="mt-5 text-xl flex flex-col items-center justify-center z-25">
                <p>I'm a <span className="text-primary">full-stack developer</span> who enjoys turning complex problems into clean, reliable software.</p>
            </div>
            <p className="mt-2 text-xl z-25">Full-Stack Web Development | React | Express | SQL Databases</p>
            <a href={Resume} download="Resume_VishalVenkatakumar" target='_blank'>
                <button className="flex justify-center items-center mt-2 bg-neutral-800 hover:bg-white/30 text-white hover:text-primary z-25">
                    Resume <BsPaperclip className="ml-2" />
                </button>
            </a>

            <motion.img
            src={ReactLogo}
            alt="React Logo"
            className="absolute opacity-60 w-14 h-14"
            style={{ top: "8%", left: "12%" }}   // start position
            initial={{ x: 0, y: 0 }}
            animate={{
                // wander around
                x: [0, 260, -120, 240, -180, 140, 0],
                y: [0, -160, 220, -90, 260, -40, 0],
                // little jumpy scale
                scale: [1, 1.1, 0.95, 1.05, 1],
                rotate: [0, 10, -10, 5, -5, 0],
            }}
            transition={{
                duration: 70,        // full loop time
                repeat: Infinity,
                ease: "easeInOut",
            }}
            />

            <motion.img
            src={NodeLogo}
            alt="NodeJS Logo"
            className="absolute opacity-90 w-14 h-14"
            style={{ top: "72%", left: "18%" }}   // start position
            initial={{ x: 0, y: 0 }}
            animate={{
                // wander around
                x: [0, -200, 140, -260, 160, -120, 0],
                y: [0, -280, -60, 220, 80, 260, 0],
                // little jumpy scale
                scale: [1, 1.1, 0.95, 1.05, 1],
                rotate: [0, 10, -10, 5, -5, 0],
            }}
            transition={{
                duration: 70,        // full loop time
                repeat: Infinity,
                ease: "easeInOut",
            }}
            />

            <motion.img
            src={MySQLLogo}
            alt="MySQL Logo"
            className="absolute opacity-90 w-14 h-14"
            style={{ top: "15%", left: "78%" }}   // start position
            initial={{ x: 0, y: 0 }}
            animate={{
                // wander around
                x: [0, -240, 220, -160, 180, -80, 0],
                y: [0, 120, -180, 240, -120, 80, 0],
                // little jumpy scale
                scale: [1, 1.05, 0.98, 1.08, 1],
                rotate: [0, -8, 12, -6, 6, 0],
            }}
            transition={{
                duration: 70,        // full loop time
                repeat: Infinity,
                ease: "easeInOut",
            }}
            />
        </div>
        </section>
    );
}

export default Home;