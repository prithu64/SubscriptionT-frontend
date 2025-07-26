import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"


function Landing() {
  return (
 <div className="flex flex-col min-h-screen dark:bg-black/90 ">
  <Navbar />
  <main className="flex-grow">
    <Hero />
  </main>
  <Footer />
</div>
  )
}

export default Landing