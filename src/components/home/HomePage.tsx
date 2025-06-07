// import RecentProjects from './RecentProjects'
import About from './About'
import Hero from './Hero'
import Navbar from './Navbar'
import Services from './Services'
import Projects from './Projects'

function HomePage() {
  return (
    <div className=' dark:bg-gray-900 bg-[#EEEEEE] ease-in-out duration-500'>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Services/>
    </div>
  )
}

export default HomePage