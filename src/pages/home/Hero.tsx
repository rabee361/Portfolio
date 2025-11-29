import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Aurora from './Aurora';

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

  const avatarVariants = {
    initial: {
      rotateY: 0,
    },
    animate: {
      rotateY: 360,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3.5, // 3.5s delay + 1.5s duration = 5s total cycle
      },
    },
  };

  return (
    <div id='contact' className='relative w-full h-screen flex flex-col gap-1 sm:gap-5 items-center justify-center dark:text-white text-black transition-colors duration-500 ease-in-out overflow-hidden'>
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={avatarVariants}
        initial="initial"
        animate="animate"
        className='avatar rounded-full perspective-1000 relative z-10'
      >

      </motion.div>
      <motion.p
        variants={pageVariants}
        initial="initial"
        animate="in"
        className='flex items-center text-[#201E43] dark:text-white justify-center text-3xl sm:text-8xl text-nowrap font-bold transition-colors duration-500 ease-in-out relative z-10'
      >
        <span className='bg-gradient-to-r from-[#508C9B] via-[#134B70] to-[#201E43] dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 text-transparent bg-clip-text ml-1 sm:ml-3 transition-all duration-500 ease-in-out'>Rabee</span>
        Hasan
      </motion.p>
      <motion.span
        variants={pageVariants2}
        initial="initial"
        animate="in"
        className='text-sm sm:text-xl text-[#201E43] dark:text-white text-center transition-colors duration-500 ease-in-out relative z-10'
      >
        Software Engineer @ nizam.ae | Back-end Developer | Freelancer
      </motion.span>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="in"
        className='pt-10 relative z-10'
      >
        <ul className='flex gap-5 sm:gap-10 dark:text-white text-[#201E43] transition-colors duration-500 ease-in-out'>
          <li>
            <a href="https://github.com/rabee361" className="block transition-all duration-300 hover:scale-125 hover:text-[#508C9B] dark:hover:text-blue-400 relative group">
              <FaGithub className='size-5 sm:size-9' />
            </a>
          </li>
          <li>
            <a href="mailto:rha60540@gmail.com" className="block transition-all duration-300 hover:scale-125 hover:text-[#508C9B] dark:hover:text-blue-400 relative group">
              <MdEmail className='size-5 sm:size-9' />
            </a>
          </li>
          <li>
            <a href="http://linkedin.com/in/rabee-hasan-145487269" className="block transition-all duration-300 hover:scale-125 hover:text-[#508C9B] dark:hover:text-blue-400 relative group">
              <FaLinkedin className='size-5 sm:size-9' />
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}

export default Hero