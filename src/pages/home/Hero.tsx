import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import LightPillar from '../../components/LightPillar';

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

      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(80,140,155,0.18),_transparent_42%),linear-gradient(180deg,_rgba(255,255,255,0.82)_0%,_rgba(255,255,255,0.36)_45%,_rgba(19,75,112,0.08)_100%)] dark:bg-[radial-gradient(circle_at_top,_rgba(80,140,155,0.2),_transparent_42%),linear-gradient(180deg,_rgba(32,30,67,0.24)_0%,_rgba(19,75,112,0.16)_55%,_rgba(32,30,67,0.5)_100%)]' />
      <LightPillar
        className='opacity-75 dark:opacity-90'
        topColor='#508C9B'
        bottomColor='#201E43'
        intensity={1}
        rotationSpeed={0.3}
        glowAmount={0.0026}
        pillarWidth={2.8}
        pillarHeight={0.42}
        noiseIntensity={0.16}
        pillarRotation={24}
        interactive={false}
        mixBlendMode='screen'
        quality='high'
      />
      <div className='absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/45 dark:from-slate-950/10 dark:via-transparent dark:to-slate-950/55' />

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
          Software Engineer @ nizam.ae | Back-end Developer | Tech Enthusiast
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
            <li>
              <a href="/src/assets/files/cv.pdf" download="Rabee_Hasan_CV.pdf" className="block transition-all duration-300 hover:scale-125 hover:text-[#508C9B] dark:hover:text-blue-400 relative group">
                <FaFileDownload className='size-5 sm:size-8' />
              </a>
            </li>
          </ul>
        </motion.div>
    </div>
  )
}

export default Hero