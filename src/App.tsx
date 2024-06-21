import Navbar from './components/Navbar'
import './App.css'
import About from './components/About';
// import Projects from './components/Projects';
import Hero from './components/Hero';
import RecentProjects from './components/RecentProjects';


function App() {

  return (
    <div className='top-0 left-0 h-svh w-full overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <RecentProjects/>
    </div>

  )
}

export default App
