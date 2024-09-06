import { motion } from 'framer-motion';
import img from '../../assets/images/img.jpg'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

function Hero() {  
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
        initial: {
        x: "10%", 
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
        
  return (
    <div id='contact' className='w-screen h-screen flex flex-col gap-1 sm:gap-5  items-center justify-center dark:text-white text-black '>
      <motion.div variants={pageVariants2} initial="initial" animate="in"  className='avatar rounded-full'>
        <div className=' w-20 sm:w-44 rounded-full shadow-blue-shadow '>
          <img src={img} />
        </div>
      </motion.div>
      <motion.p variants={pageVariants} initial="initial" animate="in" className='flex items-center justify-center text-3xl sm:text-8xl text-nowrap font-bold'>Rabee <span className='bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text ml-1 sm:ml-3'>Hasan</span></motion.p>
      <motion.span variants={pageVariants2} initial="initial" animate="in" className='text-sm sm:text-xl text-center'>Web Developer | Back-end Developer | Django | Python </motion.span>
      <motion.div variants={pageVariants} initial="initial" animate="in"  className='pt-10'>
          <ul className='flex gap-10'> 
              <li><a href="https://github.com/rabee361"><FaGithub size={30}/></a></li>
              <li><a href="rha60540@gmail.com"><MdEmail size={30}/></a></li>
              <li><a href="http://linkedin.com/in/rabee-hasan-145487269"><FaLinkedin size={30}/></a></li>
              <li><a href=""><FaSquareFacebook size={30}/></a></li>
              <li><a href=""><FaWhatsapp size={30}/></a></li>
          </ul>
      </motion.div>
    </div>
  )
}

export default Hero