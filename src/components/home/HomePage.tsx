import RecentProjects from './RecentProjects'
import About from './About'
import Hero from './Hero'
import Navbar from '../Navbar'

function HomePage() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <RecentProjects/>
    </>
  )
}

export default HomePage