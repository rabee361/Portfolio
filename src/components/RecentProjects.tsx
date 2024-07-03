import { VerticalTimeline , VerticalTimelineElement  }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from '../assets/elements'


function RecentProjects() {
    let IconStyle = { background:'#FFFFFF' }

    return (
      <div className=' mt-36 flex flex-col items-center justify-center w-full h-screen'>

      <h1 className='text-center mb-16'>Timeline</h1>

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
            icon={<svg height="326" preserveAspectRatio="xMidYMid" viewBox="0 0 256 326" width="256" xmlns="http://www.w3.org/2000/svg"><g fill="#2ba977"><path d="m114.78426 0h53.277999v244.191113c-27.290404 5.162172-47.381078 7.193079-69.117404 7.193079-65.0718413-.067924-98.944855-29.139102-98.944855-84.972068 0-53.795267 35.9300792-88.7078508 91.6079875-88.7078508 8.6396755 0 15.2222855.6792329 23.1762725 2.7169325zm1.867183 124.426648c-6.239766-2.0377-11.38243-2.716934-17.9650395-2.716934-26.9475597 0-42.5126892 16.437443-42.5126892 45.243722 0 28.045536 14.8794413 43.532053 42.1698442 43.532053 5.8969215 0 10.6967405-.332825 18.3078845-1.351675z"/><path d="m255.186899 84.2605714v122.2619686c0 42.105664-3.154168 62.353604-12.410963 79.809896-8.639675 16.783852-20.022104 27.366305-43.541221 39.055907l-49.438144-23.297697c23.519117-10.928862 34.901547-20.587558 42.169846-35.326917 7.611142-15.072184 10.011052-32.528476 10.011052-78.444637v-104.0585206z"/><path d="m196.608 0h53.277999v54.1348831h-53.277999z"/></g></svg>}
            >
            <div className=''>
              <h3 className="text-black">
                {element.title}
              </h3>
              <h5 className="text-black">
                {element.location}
              </h5>
              <p className='text-black' >
                {element.description}
              </p>
              {showButton && (
                <a
                  className={`button ${
                    isDjangoIcon ? "workButton" : "schoolButton"
                  } text-black bg-slate-500 `}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
              
            </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      </div>
  )
}

export default RecentProjects