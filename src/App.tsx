import Navbar from './components/Navbar'
import './App.css'
import { motion } from 'framer-motion'
import About from './components/About';
import Projects from './components/Projects';

function App() {


  
  const pageVariants = {
    initial: {
    x: "-10%", 
    opacity: 0,
    },
    in: {
    x: "0%", 
    opacity: 1,
    transition: {
        duration: 1, 
    },
    },
};

  
  const pageVariants2 = {
    initial2: {
    x: "10%", 
    opacity: 0,
    },
    in2: {
    x: "0%", 
    opacity: 1,
    transition: {
        duration: 1, 
    },
    },
};



  return (
    <div className='top-0 left-0 h-svh w-full bg-black overflow-x-hidden'>
      <Navbar/>
      <div className='flex flex-col gap-1 sm:gap-5 h-screen items-center justify-center text-white '>
        <motion.div variants={pageVariants2} initial="initial2" animate="in2"  className='avatar rounded-full'>
          <div className=' w-20 sm:w-44 rounded-full'>
            <img src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
          </div>
        </motion.div>
        <motion.p variants={pageVariants} initial="initial" animate="in" className='flex items-center justify-center text-3xl sm:text-8xl text-nowrap font-bold'>Rabee <span className='text-blue-400 ml-1 sm:ml-3'>Hasan</span></motion.p>
        <motion.span variants={pageVariants2} initial="initial2" animate="in2" className='text-sm sm:text-3xl'>Software Developer</motion.span>
      </div>
      <About/>
      <Projects/>
    </div>

  )
}

export default App
