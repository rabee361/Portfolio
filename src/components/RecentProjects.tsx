import video from '../assets/videos/video.mp4'

function RecentProjects() {

  return (
    <div className='flex items-start justify-center'>
        <video src={video} autoPlay muted loop className=" w-fit scale-150 h-72 rounded-lg bg-slate-600 drop-shadow-xl mb-10">

        </video>
    </div>
  )
}

export default RecentProjects