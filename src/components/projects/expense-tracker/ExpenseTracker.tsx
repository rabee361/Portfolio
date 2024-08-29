import DemoSection from "./DemoSection"
import Navbar from "./NavBar"
import Hero from "./Hero"
import Feauters from "./Feauters"
import About from "./About"

function ExpenseTracker() {
    return (
      <div >
        <Navbar/>
        <Hero/>
        <Feauters/>
        <DemoSection/>
        <About/>
      </div>
  )
}

export default ExpenseTracker