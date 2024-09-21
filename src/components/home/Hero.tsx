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
    <div id='contact' className='w-full h-screen flex flex-col gap-1 sm:gap-5  items-center justify-center dark:text-white text-black '>
      <motion.div variants={pageVariants2} initial="initial" animate="in"  className='avatar rounded-full'>
        <div className=' w-20 sm:w-44 rounded-full shadow-blue-shadow dark:shadow-dark-blue-shadow '>
          <img src={img} />
        </div>
      </motion.div>
      <motion.p variants={pageVariants} initial="initial" animate="in" className='flex items-center text-[#201E43] dark:text-white justify-center text-3xl sm:text-8xl text-nowrap font-bold'><span className='bg-gradient-to-r from-[#508C9B] via-[#134B70] to-[#201E43] dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 text-transparent bg-clip-text ml-1 sm:ml-3'>Rabee</span>Hasan</motion.p>
      <motion.span variants={pageVariants2} initial="initial" animate="in" className='text-sm sm:text-xl dar:text-white text-[#201E43] dark:text-white text-center'>Web Developer | Back-end Developer | Django | Python </motion.span>
      <motion.div variants={pageVariants} initial="initial" animate="in"  className='pt-10'>
          <ul className='flex gap-5 sm:gap-10 dark:text-white text-[#201E43]'> 
              <li><a href="https://github.com/rabee361"><FaGithub className='size-5 sm:size-9'/></a></li>
              <li><a href="rha60540@gmail.com"><MdEmail className='size-5 sm:size-9'/></a></li>
              <li><a href="http://linkedin.com/in/rabee-hasan-145487269"><FaLinkedin className='size-5 sm:size-9 '/></a></li>
              <li><a href=""><FaSquareFacebook className='size-5 sm:size-9 '/></a></li>
              <li><a href=""><FaWhatsapp className='size-5 sm:size-9 '/></a></li>
          </ul>
      </motion.div>
    </div>
  )
}

export default Hero