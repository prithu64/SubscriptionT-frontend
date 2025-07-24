import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import How from "./How"

function Landing() {
  return (
    <div className='min-h-screen overflow-x-hidden '>
      
      <Navbar/>  
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Landing