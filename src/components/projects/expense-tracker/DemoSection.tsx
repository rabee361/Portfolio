import { useEffect, useRef } from "react";
import m1 from "../../../assets/images/m1.png"
import m2 from "../../../assets/images/m2.png"
import { motion, useAnimation, useInView } from "framer-motion"


function DemoSection() {

  const ref = useRef(null);
  const IsInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => { 
    
    if (IsInView){
      mainControls.start("in")
      mainControls.start("in2")
      mainControls.start("in3")
    } 
  } , [IsInView])

  const pageVariants = {
    initial: {
    x: -200, 
    opacity: 0,
    },
    in: {
    x: 0, 
    opacity: 1,
    transition: {
        duration: 1, 
    },
    },
};

  const pageVariants2 = {
    initial2: {
    x: 100, 
    opacity: 0,
    },
    in2: {
    x: 0, 
    opacity: 1,
    transition: {
        duration: 1.5, 
    },
    },
};

  const pageVariants3 = {
    initial3: {
    x: 80, 
    opacity: 0,
    },
    in2: {
    x: 0, 
    opacity: 1,
    transition: {
        duration: 1.5,
        // delay:0.2
    },
    },
};

  return (
        <section ref={ref} id="demo" className='h-screen w-full flex flex-row items-center justify-between overflow-hidden overflow-x-hidden'>
          <motion.div variants={pageVariants} initial="initial" animate={mainControls} className="w-2/3 h-screen pl-20 flex flex-col justify-center">
              <div className="justify-centertext-3xl font-extrabold tracking-tight leading-none flex flex-col gap-5 dark:text-white text-black md:text-3xl lg:text-4xl">
                A unique UI built with Flutter to provide the best user experience possible
              </div>
              <div className="mt-10 w-full space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                  <a href="#" className="ease-linear duration-300 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                      Download Demo
                      <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
              </div>
          </motion.div>
          <div className="w-1/3 h-full mt-10  flex items-center justify-center overflow-hidden overflow-x-hidden pb-10">
            <div className="flex items-center justify-center w-fit h-full ">
              <motion.div variants={pageVariants2} initial="initial2" animate={mainControls} className=" absolute dark:shadow-dark-blue-shadow  w-[170px] h-[400px] mr-5 z-10"></motion.div>
              <motion.img variants={pageVariants2} initial="initial2" animate={mainControls}  src={m2} width={200} className=" absolute z-10" alt="test" />
            </div>
            <div className="flex items-center justify-center w-fit h-full ml-32 mt-52">
              <motion.div variants={pageVariants3} initial="initial3" animate={mainControls} className=" absolute dark:shadow-dark-blue-shadow w-[130px] h-[400px] mt-5 z-10"></motion.div>
              <motion.img variants={pageVariants3} initial="initial3" animate={mainControls}  src={m1} width={160} className="absolute z-20" alt="test" />
            </div>
          </div> 
        </section>
  )
}

export default DemoSection