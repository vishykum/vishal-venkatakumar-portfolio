import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience';

function App() {

  return (
    <div className='h-screen w-screen overflow-y-auto scroll-smooth'>
      <Navbar />
      <Home />
      <About />
      <Experience />
    </div>
  )
}

export default App;
