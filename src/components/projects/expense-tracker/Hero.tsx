import { useEffect, useRef } from "react";
import cartoon3 from "../../../assets/images/cartoon3.png"
import { motion, useAnimation, useInView } from "framer-motion";
import { AiFillAndroid } from "react-icons/ai";
import { FaApple } from "react-icons/fa";

function Hero() {

    const ref = useRef(null);
    const IsInView = useInView(ref);
    const mainControls = useAnimation();
  
    useEffect(() => { 
      
      if (IsInView){
        mainControls.start("in");
        mainControls.start("in2");
        mainControls.start("in3");
    
      } 
    } , [IsInView])

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
    <section ref={ref} id="home" className='h-screen flex flex-row items-center justify-between overflow-x-hidden'>
        <div className="w-1/2 h-screen pl-20 flex flex-col items-center justify-center">
            <motion.div variants={pageVariants} initial="initial" animate="in" className="justify-centertext-4xl font-extrabold tracking-tight leading-none dark:text-white text-black md:text-5xl lg:text-6xl">
                All your financial information in one place with
                <motion.small variants={pageVariants3} initial="initial3" animate="in3" className=" font-extrabold text-blue-500 md:text-5xl lg:text-6xl ml-2">
                    Wallet
                </motion.small>
            </motion.div>
            <motion.div variants={pageVariants} initial="initial" animate="in" className="flex gap-2 items-center justify-start mr-[270px] mt-10 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="#" className="ease-linear duration-300 inline-flex justify-center items-center gap-2 py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Play Store
                    <AiFillAndroid size={30}/>
                </a>
                <a href="#" className="ease-linear duration-300 inline-flex justify-center items-center gap-2 py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    App Store
                    <FaApple size={30}/>
                </a>  
            </motion.div>
        </div>
        <motion.div variants={pageVariants2} initial="initial2" animate="in2" className="w-1/2 h-screen lg:flex items-center justify-center overflow-x-hidden hidden">
            <img className="w-4/5 h-fit" src={cartoon3} alt="test" />
        </motion.div>
    </section>
  )
}

export default Hero