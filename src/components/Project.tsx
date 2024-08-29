// import video from '../assets/videos/video.mp4'
import img3 from '../assets/images/img3.jpg'
import { motion } from 'framer-motion'

function Project() {

  const pageVariants = {
    initial: {
      x: "-5%", 
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
    x: "5%", 
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
    <div className='h-screen w-full bg-red-500'>
      <section style={{ backgroundImage: `url(${img3})` }} className=" h-full w-full bg-blend-multiply bg-no-repeat bg-cover bg-right bg-slate-700 text-white mx-auto">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <motion.h1 variants={pageVariants} initial="initial" animate="in" className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</motion.h1>
            <motion.p variants={pageVariants} initial="initial" animate="in" className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</motion.p>
            <motion.div variants={pageVariants2} initial="initial2" animate="in2" className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Download Now
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    see description
                </a>  
            </motion.div>
          </div>
      </section>
    </div>

  )
}

export default Project