import video from '../assets/videos/video.mp4'

function RecentProjects() {
    return (
    <div className='flex h-svh items-start justify-center'>
        <video src={video} autoPlay muted loop className=" w-fit h-[75svh] rounded-lg bg-slate-600 drop-shadow-xl"></video>

        {/* <svg height="3130" className="w-full h-svh pl-10 bg-red-200" >
        <path id="svgPath" stroke="#1085c7" strokeWidth="4px" stroke-dasharray="20, 10" fill="none" d="M106,50 L106,350"></path>
        </svg> */}
        
    </div>
  )
}

export default RecentProjects