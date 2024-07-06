import { VerticalTimeline , VerticalTimelineElement  }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from '../assets/elements'
import { motion , useInView , useAnimation } from "framer-motion"
import { useEffect , useRef } from 'react';
import { SiDjango , SiNginx , SiRedis } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython , FaDocker , FaBootstrap } from "react-icons/fa";
import GraduationIcon from '../icons/GraduationIcon'
import MosqueIcon from '../icons/MosqueIcon'
import StoreIcon from '../icons/StoreIcon'


function RecentProjects() {


    interface TechIcons {
      [key: string]: JSX.Element; // This allows any string key, with the value being a JSX.Element
    }


    interface Icons {
      [key: string]: JSX.Element; // This allows any string key, with the value being a JSX.Element
    }
  
    let techs: TechIcons = {
      'django':<SiDjango color='black' size={20}/>,
      'python':<FaPython color='black' size={20}/>,
      'nginx':<SiNginx color='black' size={20}/>,
      'html':<FaHtml5 color='black' size={20}/>,
      'bootstrap':<FaBootstrap color='black' size={20}/>,
      'docker':<FaDocker color='black' size={20}/>,
      'redis':<SiRedis color='black' size={20}/>,
      'postgresql': <BiLogoPostgresql color='black' size={20}/>
    }

    let icons: Icons = {
      'store' : <StoreIcon/>,
      'mosque' : <MosqueIcon/>,
      'graduation': <GraduationIcon/>
    }

    let IconStyle = { background:'#FFFFFF' }

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
      hidden:{opacity:0 , x:200},
      visible:{opacity:1 , x:0}
    }

    return (
      <div ref={ref} className=' mt-36 flex flex-col items-center justify-center w-full h-screen'>

      {/* <motion.span variants={variant} initial="hidden" animate={mainControls} transition={{duration:0.5 , delay:0.2}} className="text-center text-3xl mb-16">
            Recent Projects
      </motion.span> */}
      <motion.span id='projects' variants={variant} initial="hidden" animate={mainControls} transition={{duration:0.5 , delay:0.2}} className="text-center text-3xl mb-16">
            Recent Projects
      </motion.span>

      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isDjangoIcon = element.icon === "django";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
            className='text-white'
            key={element.id}
            date={element.date}
            iconStyle={IconStyle}
            icon={icons[element.icon]}
            >
            <div className='flex flex-col gap-1'>
              <h3 className="text-black font-medium text-xl">
                {element.title}
              </h3>
              <h5 className="text-black font-medium">
                {element.location}
              </h5>
              <p className='text-black' >
                {element.description}
              </p>

              <div className='relative top-4 flex gap-6 items-end'>
                <div className=' w-full flex gap-4'>
                  {
                    element.tech.map((x) => (
                      techs[x.name]
                    ))
                  }
                  
                </div>
                {showButton && (
                  <a
                    className={`button ${
                      isDjangoIcon ? "workButton" : "schoolButton"
                    } text-black text-nowrap self-end rounded-md font-medium bg-blue-400 hover:bg-blue-500 pl-4 pr-4 pt-1 pb-1  shadow-lg hover:shadow-none transition-all ease-linear duration-100`}
                    href="/"
                  >
                    {element.buttonText}
                  </a>
                )}
              </div>


              
            </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      </div>
  )
}

export default RecentProjects