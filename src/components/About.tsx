import { motion , useInView , useAnimation } from "framer-motion"
import { useRef , useEffect } from "react"

function About() {
  const ref = useRef(null)
  const IsInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    console.log(IsInView);
    
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
  
  return (
    <div className='flex items-center justify-center w-full h-screen bg-black '>
        <div ref={ref} className="flex flex-col gap-10 h-3/4 w-11/12">
            <motion.span variants={variant} initial="hidden" animate={mainControls} transition={{duration:0.5 , delay:0.2}} className="text-center text-3xl">
                About
            </motion.span>
            <div className="h-full flex justify-between">
                <motion.div variants={variant} initial="hidden" animate={mainControls} transition={{duration:0.7 , delay:0.2}}  className="w-full m-3 text-xl">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About