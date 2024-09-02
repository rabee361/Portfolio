import bell from "../../../assets/images/bell.png"
import chart from "../../../assets/images/bar-graph.png"
import money from  "../../../assets/images/money.png"
import { motion , useInView , useAnimation } from "framer-motion"
import { useRef , useEffect } from "react"

function Feauters() {

  const ref = useRef(null);
  const IsInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => { 
    
    if (IsInView){
      mainControls.start("in");
      mainControls.start("in2");
  
    } 
  } , [IsInView])

  const pageVariants = {
    initial: {
    x: -200, 
    opacity: 0,
    },
    in: {
    x: 0, 
    opacity: 1,
    transition: {
        duration: 1, 
    },
    },
};

  const pageVariants2 = {
    initial2: {
    x: 200, 
    opacity: 0,
    },
    in2: {
    x: 0, 
    opacity: 1,
    transition: {
        duration: 1, 
    },
    },
};


  return (
      <div id="features" ref={ref} className="h-screen w-full text-white flex items-center justify-evenly overflow-x-hidden">
        <motion.div variants={pageVariants} initial="initial" animate={mainControls} className=" flex flex-col items-center justify-center h-full w-1/4 ">
          <div className="h-1/2 w-full flex items-end mb-10 justify-center text-4xl font-bold">
            {/* <GiReceiveMoney size={140}/> */}
            <img src={money} width={120} alt="" />
          </div>
          <div className="h-1/2 mb-36 px-7">
            save your money  
          </div>
        </motion.div>
        <motion.div variants={pageVariants} initial="initial" animate={mainControls} className="flex flex-col items-end justify-center h-full w-1/4">
          <div className="h-1/2 w-full flex items-end mb-10 justify-center text-4xl text-center font-bold">
              {/* <IoIosNotificationsOutline size={140}/> */}
              <img src={bell} width={100} alt="" />
          </div>
          <div className="h-1/2 mb-36 px-7 text-center">
            set notification and reminders for upcoming payments like rent, car payment or any kind of payments.
            powered by firebase's push notifications and integrated into django with fcm-django library
          </div>
        </motion.div>
        <motion.div variants={pageVariants2} initial="initial2" animate={mainControls} className=" flex flex-col items-center justify-center text-center h-full w-1/4">
          <div className="h-1/2 w-full flex items-end mb-10 justify-center text-4xl font-bold text-center">
              {/* <FaChartLine size={140}/> */}
              <img src={chart} width={100} alt="" />
          </div>
          <div className="h-1/2 mb-36 px-7 text-center">
            see visuale representation of your expenses and data through various charts and diagrams, to help you get 
            certain info you might need to provide better insight about your expenses and know when you're losing/saving money.
            powered by the charts libraries in django and the complex aggregation in the DB.
          </div>
        </motion.div>
      </div>
  )
}

export default Feauters