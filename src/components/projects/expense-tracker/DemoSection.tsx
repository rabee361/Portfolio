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
    } 
  } , [IsInView])

  const pageVariants = {
    initial: {
    y: 200, 
    opacity: 0,
    },
    in: {
    y: 0, 
    opacity: 1,
    transition: {
        duration: 1, 
    },
    },
};

  return (
        <section ref={ref} id="demo" className='h-screen w-full flex flex-row items-center justify-between overflow-x-hidden overflow-y-hidden'>
        <motion.div variants={pageVariants} initial="initial" animate={mainControls} className="w-2/3 h-screen pl-20 flex flex-col justify-center">
            <div className="justify-centertext-3xl font-extrabold tracking-tight leading-none flex flex-col gap-5 text-white md:text-3xl lg:text-4xl">
              A unique UI built with Flutter to provide the best user experience possible
            </div>
            <div className="mt-10 w-full space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="#" className="ease-linear duration-300 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Download full Demo
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </motion.div>
        <motion.div variants={pageVariants} initial="initial" animate={mainControls} className="w-1/3 h-full mt-10 mr-10  flex items-center justify-center overflow-x-hidden overflow-y-hidden pb-10">
          <img src={m2} width={200} className=" absolute " alt="" />
          <img src={m1} width={160} className="absolute ml-56 mt-52 object-cover" alt="" />
        </motion.div>
    </section>
  )
}

export default DemoSection