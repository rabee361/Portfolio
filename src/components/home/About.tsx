import { motion , useInView , useAnimation } from "framer-motion"
import { useRef , useEffect } from "react"
import main1 from "../../assets/images/main1.png"
import main2 from "../../assets/images/main2.png"
import { Cursor , useTypewriter } from "react-simple-typewriter"

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

  let peace = String.fromCodePoint(9996	)
  let circle = String.fromCodePoint(128311)

  const [text] = useTypewriter({
    words: [` Rabee ${peace}` ,` a Software Engineer` , ` a Back-End Developer`],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 60,
    delaySpeed: 2000
  })



  return (
    <div  ref={ref} id="about" className='flex flex-col w-full h-screen'>
      <div className="flex items-center justify-center w-full h-screen ">
        <div className="w-2/3 h-full gap-5 items-start ml-5 pr-16 justify-start pt-28 justify-centertext-3xl tracking-tight leading-none text-white md:text-2xl lg:text-3xl">
            <span className=" leading-10 flex flex-col items-center">
              <h2 className=" self-start text-5xl mb-5 font-bold">
                Hi, I'm  
                <span className="text-5xl text-blue-400">
                  {text}  
                </span>
                <Cursor cursorColor="white" />
              </h2>

              <motion.span variants={pageVariants} initial="initial" animate={mainControls} id="text" className="slef-start text-lg leading-10 ml-10 font-semibold text-nowrap">
                <p>
                  <span className="font-bold">{circle} Country : </span> Born 2001 in Tartus,Syria .
                </p>
                <p>
                  <span className="font-bold">{circle} Education : </span> A Bachelor Degree in IT from Albaath University in Homs,Syria.
                </p>
                <p>
                  <span className="font-bold">{circle} Experience : </span> 2 years of experience in building applications and websites specializing in Back-End development.
                </p>
                <p>
                  <span className="font-bold">{circle} Languages : </span>Fluent in Arabic and English
                </p>
                <p className="text-wrap">
                  <span className="font-bold">{circle} Projects : </span> Danac E-Store and Employee management system, Expense-Tracker App, Al-Noor haj App and handful of training projects.
                </p>
                <p>
                  <span className="font-bold">{circle} Skills : </span> Python, JS, Django, React js, Nest js, Redis, Linux, Nginx and more.
                </p>

              </motion.span>
            </span>

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