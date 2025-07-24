import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import How from "./How"

function Landing() {
  return (
    <div className='overflow-x-hidden'>
      <div className="">
        <Navbar/>
      </div>
       

       <div>
         <Hero/>
       </div>

       <div>
        <How/>
       </div>

       <Footer/>

    </div>
  )
}

export default Landing