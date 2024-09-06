import RecentProjects from './RecentProjects'
import About from './About'
import Hero from './Hero'
import Navbar from './Navbar'
import Tech from './Tech'

function HomePage() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <RecentProjects/>
        <Tech/>
    </>
  )
}

export default HomePage