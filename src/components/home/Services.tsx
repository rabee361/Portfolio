// import bg from "../../assets/images/bg.png"
import { FaTasks } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { FaServer } from "react-icons/fa";
import { GrCubes } from "react-icons/gr";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Tech() {

  const ref = useRef(null)
  const IsInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    console.log(IsInView);
    
    if (IsInView){
      mainControls.start("visible")
      mainControls.start("visible2")
    }

  } , [IsInView])


  const variant = {
    hidden:{opacity:0 , x:-200},
    visible:{opacity:1 , x:0}
  }

  const variant2 = {
    hidden2:{opacity:0 , x:200},
    visible2:{opacity:1 , x:0}
  }

  return (
    <div ref={ref} id="services" className="w-full min-h-screen py-20 flex flex-col items-center justify-center dark:text-white text-[#201E43] px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-lg dark:text-blue-400 text-[#134B70] mb-3">Why choose me?</p>
        <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#134B70] to-[#508C9B] dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          Our Main Services
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto w-full">
        <motion.div variants={variant} initial="hidden" animate={mainControls} transition={{duration:1, delay:0.2}} 
          className="grid grid-rows-2 gap-8"
        >
          <div className="bg-white/5 backdrop-blur-sm dark:bg-slate-800/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 h-[200px] flex items-center">
            <div className="flex flex-col lg:flex-row gap-6 items-center h-full">
              <div className="bg-gradient-to-br from-[#508C9B] to-[#134B70] dark:from-blue-400 dark:to-blue-600 p-4 rounded-2xl text-white shrink-0">
                <IoTimerOutline className="size-12" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-center lg:text-left">Commitment to Deadline</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed hidden lg:block">Building projects and finishing tasks on time with respect to the client's needs and schedule.</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm dark:bg-slate-800/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 h-[200px] flex items-center">
            <div className="flex flex-col lg:flex-row gap-6 items-center h-full">
              <div className="bg-gradient-to-br from-[#508C9B] to-[#134B70] dark:from-blue-400 dark:to-blue-600 p-4 rounded-2xl text-white shrink-0">
                <FaTasks className="size-12" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-center lg:text-left">Various Tasks</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed hidden lg:block">Ability to coperate on different tasks in the development life-cycle and work with team members to complete and deliver the tasks with the accuracy needed.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={variant2} initial="hidden2" animate={mainControls} transition={{duration:1, delay:0.2}} 
          className="grid grid-rows-2 gap-8"
        >
          <div className="bg-white/5 backdrop-blur-sm dark:bg-slate-800/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 h-[200px] flex items-center">
            <div className="flex flex-col lg:flex-row gap-6 items-center h-full">
              <div className="bg-gradient-to-br from-[#508C9B] to-[#134B70] dark:from-blue-400 dark:to-blue-600 p-4 rounded-2xl text-white shrink-0">
                <GrCubes className="size-12" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-center lg:text-left">Scalable Archetictures</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed hidden lg:block">Building Reliable, Performant and Scalable projects or microservices Scaling them to provide a fast and unique user experience</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm dark:bg-slate-800/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 h-[200px] flex items-center">
            <div className="flex flex-col lg:flex-row gap-6 items-center h-full">
              <div className="bg-gradient-to-br from-[#508C9B] to-[#134B70] dark:from-blue-400 dark:to-blue-600 p-4 rounded-2xl text-white shrink-0">
                <FaServer className="size-12" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3 text-center lg:text-left">Deploying on</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed hidden lg:block">The Ability to deploy the project on any hosting platform or service whether paid or free and managing servers on the long run to help maintaine the prject periodically.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-xl text-[#508C9B] dark:text-white font-medium mb-6">What are you waiting for?</p>
        <a 
          href="#contact" 
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#134B70] to-[#508C9B] hover:from-[#508C9B] hover:to-[#134B70] dark:from-blue-500 dark:to-blue-700 transition-all duration-300 hover:shadow-lg"
        >
          Contact Me
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </motion.div>
    </div>
  )
}

export default Tech