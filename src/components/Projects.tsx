import { useRef , useEffect } from "react"
import { motion , useInView , useAnimation } from "framer-motion"
import img from "../assets/images/img.jpg"
import { Link } from "react-router-dom";

function Projects() {

  const ref = useRef(null);
  const IsInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
  if (IsInView){
      mainControls.start("visible");
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
      <div className='flex items-center justify-center w-full h-screen'>
          <div ref={ref} className="flex flex-col gap-10 sm:h-3/4 w-96 sm:w-11/12">
              <motion.span variants={variant} initial="hidden" animate={mainControls} transition={{duration:0.5 , delay:0.5}} className=" text-center text-3xl">
                  Projects
              </motion.span>
              <div className="h-full grid sm:grid-cols-3 grid-cols-1 gap-3 justify-between overflow-y-hidden">
                  <Link to={'/Al-Noor'}>
                    <motion.div className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-2xl shadow-xl" variants={variant} initial="hidden" animate={mainControls} transition={{duration:0.5 , delay:0.6}}>
                      <div className=" w-full h-full rounded-2xl">
                        <img src={img} alt="project image" className="h-full w-full rounded-2xl group-hover:scale-125 transition-transform duration-500"  />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/50"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                        <h1 className="text-2xl font-bold mb-40">Al-Noor Hajj Campaign App</h1>
                        <p className="text-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150"></p>
                      </div>
                    </motion.div>
                  </Link >
                  <Link to={'/Danac-Store'}>
                    <motion.div className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-2xl shadow-xl" variants={variant} initial="hidden" animate={mainControls} transition={{duration:0.5 , delay:0.5}}>
                      <div className=" w-full h-full rounded-2xl">
                        <img src={img} alt="project image" className="h-full w-full rounded-2xl group-hover:scale-125 transition-transform duration-500"  />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                        <h1 className="text-2xl font-bold mb-6 group-hover:mb-5">Danac E-commerce and Employee managment system</h1>
                        <p className="text-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150">A Project for a local wholesale store consisting of multiple apps for managing products and clients's orders offering features like real-time chat with store managers, track deliveries, managing product, discounts, sales and much more with organizing HR work and staff info all in one place. </p>
                      </div>
                    </motion.div>
                  </Link>
                  <Link to={'/Book-Review'}>
                    <motion.div className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-2xl shadow-xl" variants={variant} initial="hidden" animate={mainControls} transition={{duration:0.5 , delay:0.4}}>
                      <div className=" w-full h-full rounded-2xl">
                        <img src={img} alt="project image" className="h-full w-full rounded-2xl group-hover:scale-125 transition-transform duration-500"  />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500">
                        <h1 className="text-2xl font-bold">Book Review Website</h1>
                        <p className="text-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-150">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quae explicabo blanditiis culpa deleniti maiores deserunt delectus laudantium quam minima doloremque, possimus exercitationem, aliquid iusto eaque similique accusamus quaerat quas.</p>
                      </div>
                    </motion.div>
                  </Link>
              </div>
          </div>
      </div>
    )
  }
  
  export default Projects