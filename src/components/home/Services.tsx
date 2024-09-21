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
    <div ref={ref} id="services"  className="w-full h-screen mt-40 flex flex-col items-center justify-center dark:text-white text-[#201E43]">
      <p className="w-screen text-center dark:text-blue-400 text-[#134B70]">Why choose me ? </p>
      <p className="w-screen text-center text-3xl lg:text-4xl font-bold">Our Main Services</p>
      <div className="mt-16 lg:ml-10 ml-0 gap-16  flex items-center justify-center">
        <motion.div variants={variant} initial="hidden" animate={mainControls} transition={{duration:1 , delay:0.2}} className="flex flex-col gap-20 w-1/3">
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-10 items-center">
            <div className=" w-fit dark:bg-blue-400 bg-[#508C9B] text-[#EEEEEE]  lg:mb-12 mb-0 p-1 rounded-full">
              <IoTimerOutline className=" size-16" />
            </div>
            <div className="">
              <p className="lg:text-2xl text-lg mb-2 text-center lg:text-left font-semibold">Commitment to Deadline</p>
              <p className="text-wrap hidden lg:flex">Building projects and Finishing tasks on time with respect to the client's needs and schedule.</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-1 mt-1 lg:gap-10 items-center">
            <div className=" w-fit mb-2 dark:bg-blue-400 bg-[#508C9B] text-[#EEEEEE] lg:mb-20 p-3 rounded-full">
              <FaTasks className="size-12" />
            </div>
            <div className="">
              <p className="lg:text-2xl text-lg mb-2 text-center lg:text-left font-semibold">Various Tasks</p>
              <p className="text-wrap hidden lg:flex">Ability to coperate on different tasks in the development life-cycle and work with team members to complete and deliver the tasks with the accuracy needed. </p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={variant2} initial="hidden2" animate={mainControls} transition={{duration:1 , delay:0.2}} className="flex flex-col gap-20 w-1/3">
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-10 items-center">
            <div className=" w-fit mb-1 dark:bg-blue-400 bg-[#508C9B] text-[#EEEEEE]  lg:mb-10 p-2 lg:p-3 rounded-full">
              <GrCubes className="size-14"/>
            </div>
            <div className="">
              <p className="lg:text-2xl text-lg mb-2 text-center lg:text-left font-semibold">Scalable Archetictures</p>
              <p className="text-wrap hidden lg:flex">Building Reliable, Performant and Scalable projects or microservices Scaling them to provide a fast and unique user experience</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-10 items-center">
            <div className=" w-fit lg:mb-20 dark:bg-blue-400 bg-[#508C9B] text-[#EEEEEE] ml-1 mb-2 p-3 rounded-full">
              <FaServer className="size-12"/>
            </div>
            <div className="">
              <p className="lg:text-2xl text-lg mb-2 text-center lg:text-left font-semibold">Deploying on </p>
              <p className="text-wrap hidden lg:flex">The Ability to deploy the project on any hosting platform or service whether paid or free and managing servers on the long run to help maintaine the prject periodically.</p>
            </div>
          </div>
        </motion.div>
      </div>
      <p className="w-screen text-center text-[#508C9B] dark:text-white font-semibold mt-3 mb-4">what are you waiting for ?</p>
      <a onClick={()=> {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({
                    behavior:'smooth'
                  })
                }} className="ease-linear duration-300 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center dark:text-white text-[#EEEEEE] rounded-lg bg-[#134B70] hover:bg-[#201E43] dark:bg-blue-500 dark:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 cursor-pointer">
          Contact Me
      </a>
    </div>
  )
}

export default Tech