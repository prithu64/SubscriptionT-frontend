import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

function Landing() {
  return (
    <div className='dark:bg-black/90 h-screen'>
       <Navbar/>
       <div className="md:flex md:justify-center md:items-center">
         <Hero/>
       </div>
       
    </div>
  )
}

export default Landing