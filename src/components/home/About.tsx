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
        delay: 0.2,
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
      <div className="flex lg:flex-row flex-col items-center justify-center w-full h-screen">
        <div className="lg:w-4/6 w-screen h-1/2 lg:h-screen lg:gap-5 flex flex-col ml-5 lg:pt-28 pt-5 justify-centertext-3xl leading-none dark:text-white text-[#201E43] md:text-2xl lg:text-3xl">
            <span className="leading-10 flex flex-col items-center">
              <h2 className="w-full text-center lg:text-left self-start lg:text-5xl text-2xl mb-5 font-bold">
                Hi, I'm
                <span className=" dark:text-blue-400 text-[#508C9B]">
                  {text}
                </span>
                <Cursor cursorColor="white" />
              </h2>

              <motion.span variants={pageVariants} initial="initial" animate={mainControls} id="text" className="hidden lg:flex lg:flex-col lg:w-full self-start text-lg text-center lg:text-left leading-10 font-semibold whitespace-pre-wrap lg:text-wrap">
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
                <p className="lg:text-wrap">
                  <span className="font-bold">{circle} Projects : </span> Danac E-Store and Employee management system, Expense-Tracker App, Al-Noor haj App and a handful of training projects.
                </p>
                <p>
                  <span className="font-bold">{circle} Skills : </span> Python, JS, Django, React js, Nest js, Redis, Linux, Nginx and more.
                </p>

              </motion.span>
              <motion.span variants={pageVariants} initial="initial" animate={mainControls} id="text" className="flex flex-col lg:hidden px-5 lg:self-start text-sm text-center lg:text-left leading-5 lg:text-nowrap">
                I'm a Software Developer specializing in building Back-End applications with frameworks like Django/Nest JS/FAST Api and others, with experience in Basic Front-End frameworks like React JS and Tailwind CSS 
              </motion.span>
            </span>

        </div>
        <div className="flex items-center justify-center lg:justify-end mb-24 lg:pr-20 h-1/2 w-full lg:w-2/6">
          <motion.div variants={pageVariants2} initial="initial2" animate={mainControls} className=" absolute shadow-blue-shadow dark:shadow-dark-blue-shadow w-[120px] lg:w-[365px] lg:h-[235px]"></motion.div>
          <motion.img variants={pageVariants2} initial="initial2" animate={mainControls}  src={main2} alt="main2" className=" absolute w-[250px] lg:w-[400px]" />
          <motion.img variants={pageVariants3} initial="initial3" animate={mainControls}  src={main1} alt="main1" className=" absolute w-[70px] ml-[240px] lg:w-[110px]" />
        </div> 
      </div>
    </div>


  )
}

export default About