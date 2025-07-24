import { Link } from "react-router-dom"


function Hero() {
  return (
    <div className='flex flex-col md:flex-row overflow-hidden md:max-w-5xl max-w-xl px-4 space-x-2 justify-center md:my-30 my-3 dark:text-white '>
      
      <div>
       <div className="">
         <h1 className='text-4xl sm:text-5xl lg:text-7xl font-semibold mb-4 leading-tight tracking-tight '>Take Control of Your Subscriptions</h1>
       </div>
       <div>
           <p className='dark:text-white/70 md:text-xl'> Say goodbye to forgotten renewals and surprise charges. Keep all your subscriptions in one place.</p>
       </div>
        <div className="space-x-3 mt-5">
          <Link to={"/signin"}>
             <button className="font-semibold outline-none rounded-md border dark:border-white border-black bg-transparent text-center min-w-[130px] py-1.5  cursor-pointer">Log In</button>
          </Link>
          <Link to={"/signup"}>
             <button className="dark:text-black font-semibold outline-none rounded-md dark:bg-white/85 border text-white bg-black/85 text-center  py-1.5 cursor-pointer min-w-[130px]">Get Started </button>
          </Link>
        </div>
      </div>

        <div className="dark:bg-amber-100 bg-amber-400 rounded-xl mt-6 md:mt-0" >
          <img className="h-2xl w-2xl" src="/LandingPic.png"/>
        </div>

    </div>
  )
}

export default Hero