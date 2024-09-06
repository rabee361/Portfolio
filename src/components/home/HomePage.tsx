import RecentProjects from './RecentProjects'
import About from './About'
import Hero from './Hero'
import Navbar from './Navbar'
import Services from './Services'

function HomePage() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <RecentProjects/>
        <Services/>
    </>
  )
}

export default HomePage