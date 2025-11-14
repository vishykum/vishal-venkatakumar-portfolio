//Home component
import Resume from '../assets/final_resume (Soft Dev).pdf';
import ProfilePic from '../assets/profile_pic_2.jpg';
import { BsPaperclip } from "react-icons/bs";


function Home() {
    return (
        <>
        {/* Mobile Layout */}
        <div className="bg-neutral-800 h-3/4 w-full flex flex-col justify-center items-center md:hidden mr-2">
            <div className="h-50 w-50 rounded-full bg-neutral-300">
                <img 
                    title="Profile Pic"
                    src={ProfilePic}
                    alt='Profile Pic'
                    className='w-full h-full object-cover rounded-full'
                />
            </div>
            <h1 className="text-primary font-mono flex flex-col justify-center items-center">
                <span>Vishal</span>
                <span>Venkatakumar</span>
                </h1>
            <div className="mt-5 text-l flex flex-col items-center justify-center text-center">
                <p>I'm a <span className="text-primary">full-stack developer</span> who enjoys turning complex problems into clean, reliable software.</p>
            </div>
            <p className="mt-2 text-l text-center">Full-Stack Web Development | React | Express | SQL Databases</p>
            <a href={Resume} download="Resume_VishalVenkatakumar" target='_blank'>
                <button className="flex justify-center items-center mt-2 text-white active:text-primary">
                    Resume <BsPaperclip className="ml-2" />
                </button>
            </a>
        </div>


        {/* Desktop/Laptop Layout */}
        <div className="bg-neutral-800 h-3/4 w-full hidden md:flex flex-col justify-center items-center">
            <div className="h-50 w-50 rounded-full bg-neutral-300">
                <img 
                    title="Profile Pic"
                    src={ProfilePic}
                    alt='Profile Pic'
                    className='w-full h-full object-cover rounded-full'
                />
            </div>
            <h1 className="text-primary font-mono">Vishal Venkatakumar</h1>
            <div className="mt-5 text-xl flex flex-col items-center justify-center">
                <p>I'm a <span className="text-primary">full-stack developer</span> who enjoys turning complex problems into clean, reliable software.</p>
            </div>
            <p className="mt-2 text-xl">Full-Stack Web Development | React | Express | SQL Databases</p>
            <a href={Resume} download="Resume_VishalVenkatakumar" target='_blank'>
                <button className="flex justify-center items-center mt-2 text-white hover:text-primary">
                    Resume <BsPaperclip className="ml-2" />
                </button>
            </a>
        </div>
        </>
    );
}

export default Home;