import { motion , useInView , useAnimation, useMotionValue, animate, useTransform } from "framer-motion"
import { useRef , useEffect } from "react"
import main1 from "../../assets/images/main1.png"
import main2 from "../../assets/images/main2.png"

function About() {
  const ref = useRef(null);
  const IsInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => { 
    
    if (IsInView){
      mainControls.start("in")
      mainControls.start("in2")
      mainControls.start("in3")
    } 
    // else {
    //   mainControls.set("hidden")
    // }
  } , [IsInView])


  
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
    x: "10%", 
    opacity: 0,
    },
    in3: {
    x: "0%", 
    opacity: 1,
    transition: {
        duration: 1,
        delay: 0.2
    },
    },
};
  


const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};


const baseText = "I'm a Back-end developer with a degree in Informatin Technology from Al-Baath university in Homs, Syria. with 2 years of experience in building fast, performent and scalable APIs and Full-stack applications using tech stacks like Django, React js, Nest js and deploying them on a variety of free/paid platforms";
const count = useMotionValue(0);
const rounded = useTransform(count, (latest) => Math.round(latest));
const displayText = useTransform(rounded, (latest) =>
  baseText.slice(0, latest)
);

useEffect(() => {
  const controls = animate(count, baseText.length, {
    type: "tween", // Not really needed because adding a duration will force "tween"
    duration: 6,
    ease: "easeInOut",
  });
  return controls.stop;
}, []);

  return (
    <div  ref={ref} id="about" className='flex flex-col w-full h-screen'>
      <div className="flex items-center justify-center w-full h-screen ">
        <div className="w-2/3 h-full gap-5 items-start ml-5 pr-16 justify-start pt-40 justify-centertext-3xl font-bold tracking-tight leading-none text-white md:text-2xl lg:text-3xl">
            <motion.span className=" leading-10">
              {displayText}
            </motion.span>
          <motion.div variants={cursorVariants} animate="blinking" className="inline-block h-7 w-[5px] translate-y-1 "></motion.div>

        </div>
        <div className="flex items-center justify-end pr-20 h-full w-1/3">
          <motion.div variants={pageVariants2} initial="initial2" animate={mainControls} className=" absolute shadow-blue-shadow w-[365px] h-[235px]"></motion.div>
          <motion.img variants={pageVariants2} initial="initial2" animate={mainControls}  src={main2} className=" absolute " width={400} alt="" />
          <motion.img variants={pageVariants3} initial="initial3" animate={mainControls}  src={main1} className=" absolute ml-60" width={100} alt="" />
        </div>
      </div>
    </div>


  )
}

export default About