//Home component

function Home() {
    return (
        <div className="bg-neutral-800 h-3/4 w-full flex flex-col justify-center items-center">
            <div className="h-50 w-50 rounded-full bg-neutral-300"></div>
            <h1 className="text-primary">Vishal Venkatakumar</h1>
            <div className="mt-5 text-xl flex flex-col items-center justify-center">
                <p>I'm a <span className="text-primary">full-stack developer</span> who enjoys turning complex problems into clean, reliable software.</p>
            </div>
            <p className="mt-2 text-xl">Full-Stack Web Development | React | Express | SQL Databases</p>
        </div>
    );
}

export default Home;