import { useRef , useEffect } from "react"
import { motion , useInView , useAnimation } from "framer-motion"
import img from "../assets/images/img.jpg"

function Projects() {

  const ref = useRef(null)
  const IsInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    
    if (IsInView){
      mainControls.start("visible")
    }
    // else {
    //   mainControls.set("hidden")
    // }
  } , [IsInView])

  const variant = {
    hidden:{opacity:0 , y:200},
    visible:{opacity:1 , y:0}
  }
  
  // const titleVariant = {
  //   hidden:{opacity:0 , x:-200},
  //   visible:{opacity:1 , x:0}
  // }

    return (
      <div className='flex items-center justify-center w-full h-screen bg-black'>
          <div ref={ref} className="flex flex-col gap-10 sm:h-3/4 w-96 sm:w-11/12">
              <motion.span variants={variant} initial="hidden" animate={mainControls} transition={{duration:0.5 , delay:0.5}} className=" text-center text-3xl">
                  Projects
              </motion.span>
              <div  className=" h-full flex justify-between overflow-y-hidden">
                  <motion.div variants={variant} initial="hidden" animate={mainControls} transition={{duration:0.5 , delay:0.5}}  className=" w-3/4 m-3">
                    <img src={img} alt="project image" className=" h-full " />
                  </motion.div>
                  <motion.div  variants={variant} initial="hidden" animate={mainControls} transition={{duration:0.5 , delay:0.4}} className=" w-3/4 m-3">
                    <img src={img} alt="project image" className=" h-full " />
                  </motion.div>
                  <motion.div  variants={variant} initial="hidden" animate={mainControls} transition={{duration:0.5 , delay:0.3}} className=" w-3/4 m-3">
                    <img src={img} alt="project image" className=" h-full " />
                  </motion.div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Projects