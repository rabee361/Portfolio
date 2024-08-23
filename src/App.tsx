import Navbar from './components/Navbar'
import './App.css'
import About from './components/About';
// import Project from './components/Project';
import Hero from './components/Hero';
import RecentProjects from './components/RecentProjects';
// import { BrowserRouter as Routes, Route } from "react-router-dom";
// import Al_Noor from './components/projects/Al_Noor';
// import Danac from './components/projects/Danac';
// import ExpenseTracker from './components/projects/ExpenseTracker';


function App() {


  return (
    <div className='top-0 left-0 h-svh w-full overflow-x-hidden'>
      {/* <Project/> */}
      <Navbar/>
      <Hero/>
      <About/>
      <RecentProjects/>
    </div>

  )
}

export default App
