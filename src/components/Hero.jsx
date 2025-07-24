import { Link } from "react-router-dom";



function Hero() {
  return (
    <div className="w-full  dark:bg-black/90 dark:text-white md:py-35 pt-20 md:pt-25 py-10 px-4 ">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl md:my-20  mx-auto">
        
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold mb-4 leading-tight tracking-tight">
            Take Control of Your Subscriptions
          </h1>
          <p className="dark:text-white/70 md:text-xl">
            Say goodbye to forgotten renewals and surprise charges. Keep all your subscriptions in one place.
          </p>
          <div className="space-x-3 mt-5">
            <Link to="/signin">
              <button className="font-semibold outline-none rounded-md border dark:border-white border-black bg-transparent text-center min-w-[130px] py-1.5 cursor-pointer">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="dark:text-black font-semibold outline-none rounded-md dark:bg-white/85 border text-white bg-black/85 text-center py-1.5 cursor-pointer min-w-[130px]">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="dark:bg-amber-100 bg-amber-400 rounded-xl p-4">
            <img className="w-full max-w-sm object-contain" src="/LandingPic.png" alt="Hero Illustration" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero