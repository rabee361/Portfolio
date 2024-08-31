import cartoon3 from "../../../assets/images/cartoon3.png"
import { motion } from "framer-motion";

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

    const pageVariants3 = {
        initial3: {
        opacity: 0,
        },
        in3: {
        opacity: 1,
        transition: {
            duration: 2, 
            delay:1,
        },
        },
    };

  return (
    <section id="home" className='h-screen flex flex-row items-center justify-between overflow-x-hidden'>
        <div className="w-1/2 h-screen pl-20 flex flex-col items-center justify-center">
            <motion.div variants={pageVariants} initial="initial" animate="in" className="justify-centertext-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                All your financial information in one place with
                <motion.small variants={pageVariants3} initial="initial3" animate="in3" className=" font-extrabold text-blue-500 md:text-5xl lg:text-6xl ml-2">
                    Wallet
                </motion.small>
            </motion.div>
            <motion.div variants={pageVariants} initial="initial" animate="in" className="flex flex-col items-center justify-center mr-28 mt-10 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="#" className="ease-linear duration-300 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Download Now
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a onClick={() => {
                    const element = document.getElementById('about')
                    element?.scrollIntoView({
                      behavior: 'smooth'
                    })
                  }} href="#" className="ease-linear duration-300 inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                    see details
                </a>  
            </motion.div>
        </div>
        <motion.div variants={pageVariants2} initial="initial2" animate="in2" className="w-1/2 h-screen flex items-center justify-center overflow-x-hidden">
            <img className="w-4/5 h-fit" src={cartoon3} alt="" />
        </motion.div>
    </section>
  )
}

export default Hero