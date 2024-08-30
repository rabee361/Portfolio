import video from "../../../assets/videos/charts.mp4"

function DemoSection() {
  return (
    // <section className='h-screen w-full flex items-center justify-center'>
          // <video src={video} autoPlay muted loop className=" w-fit scale-150 h-72 rounded-lg bg-slate-600 drop-shadow-xl mb-10">

          // </video>


    // </section>
        <section className='h-screen w-full flex flex-row items-center justify-between overflow-x-hidden overflow-y-hidden'>
        <div className="w-2/3 h-screen pl-20 flex flex-col items-center justify-center">
            <div className="justify-centertext-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                All your financial information in one place with
            </div>
            <div className="mt-10 w-full space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a href="#" className="ease-linear duration-300 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Download full Demo
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
        <div className="w-1/3 h-full mt-24 flex items-center justify-center overflow-x-hidden overflow-y-hidden pb-10">
          <video src={video} autoPlay muted loop className="w-full scale-150 h-3/5 pr-10"></video>
        </div>
    </section>
  )
}

export default DemoSection