import { motion , useInView } from "framer-motion"
import { useRef , useEffect } from "react"

function About() {
  const ref = useRef(null)
  const IsInView = useInView(ref , {once:true})

  useEffect(() => {
    console.log(IsInView)
  } , [IsInView])

  const variant = {
    hidden:{opacity:0 , x:200},
    visible:{opacity:1 , x:0}
  }

  return (
    <div className='flex items-center justify-center w-full h-screen bg-black'>
        <div className="flex flex-col gap-10 h-3/4 w-11/12">
            <span className=" text-center text-3xl">
                About
            </span>
            <div ref={ref} className=" h-full flex justify-between bg-slate-400">
                <motion.div variants={variant} initial="hidden" animate="visible" transition={{duration:1 , delay:0.9}} className="bg-green-200 w-3/4 m-3">
                  text
                </motion.div>
                <motion.div variants={variant} initial="hidden" animate="visible" transition={{duration:1 , delay:0.6}} className="bg-green-200 w-3/4 m-3">
                  text
                </motion.div>
                <motion.div variants={variant} initial="hidden" animate="visible" transition={{duration:1 , delay:0.3}} className="bg-green-200 w-3/4 m-3">
                  text
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About