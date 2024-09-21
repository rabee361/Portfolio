import RecentProjects from './RecentProjects'
import About from './About'
import Hero from './Hero'
import Navbar from './Navbar'
import Services from './Services'

function HomePage() {
  return (
    <div className=' dark:bg-gray-900 bg-[#EEEEEE]'>
        <Navbar/>
        <Hero/>
        <About/>
        <RecentProjects/>
        <Services/>
    </div>
  )
}

export default HomePage