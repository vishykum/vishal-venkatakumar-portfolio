import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {

  return (
    <div className='h-screen overflow-y-auto scroll-smooth w-full'>
      <Navbar />
      <main className='pt-15 md:pt-0'>
        <Home />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}

export default App;
