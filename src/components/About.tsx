

function About() {
    return (
        <section id="about" className='scroll-mt-16'>
        {/* Mobile Layout */}
        <div className="bg-neutral-800 h-1/2 w-full flex flex-col justify-center items-center md:hidden mr-2 pt-2 px-2 my-2">
            <h2 className="text-3xl">About Me</h2>
            <p className="text-l text-center my-5 flex flex-col justify-center items-center gap-4">
                <span>I'm a Computing Science graduate who enjoys building clean and practical web apps that help people.</span>
                <span>I love working across the stack and turning ideas into something real, whether it's a simple feature or a full end to end project.</span>
                <span>I’m currently focused on improving my skills as a <span className="text-primary">full stack developer</span>, learning more about good UI design, building <span className="text-primary">scalable backend services</span>, and experimenting with tools that make development more fun.</span>
                <span>I enjoy learning, breaking things, fixing them, and seeing steady progress. Outside of coding, I like music, fitness, and finding small creative projects to unwind with.</span>
            </p>
        </div>


        {/* Desktop/Laptop Layout */}
        <div className="bg-neutral-800 h-1/2 w-full hidden md:flex 2xl:h-[40vh] flex-col justify-around 2xl:justify-start 2xl:pt-3 items-center px-1 my-2">
            <h2 className="text-3xl">About Me</h2>
            <p className="text-xl text-center my-5 flex flex-col justify-center items-center gap-3 flex-1">
                <span className="">I'm a Computing Science graduate who enjoys building clean and practical web apps that help people.</span>
                <span>I love working across the stack and turning ideas into something real, whether it's a simple feature or a full end to end project.</span>
                <span>I’m currently focused on improving my skills as a <span className="text-primary">full stack developer</span>, learning more about good UI design, building <span className="text-primary">scalable backend services</span>, and experimenting with tools that make development more fun.</span>
                <span>I enjoy learning, breaking things, fixing them, and seeing steady progress. Outside of coding, I like music, fitness, and finding small creative projects to unwind with.</span>
            </p>
        </div>
        </section>
    );
}

export default About;