import { FaUserPlus, FaListAlt, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const How = () => {
  return (
    <section className="py-16 px-4 md:px-8 w-screen  dark:text-white dark:bg-black/90 ">
      
     <h2 className="text-xl mx-auto  w-[170px]  py-3 dark:bg-white/85 dark:text-black rounded-md flex items-center justify-center border dark:border-white/60 font-semibold text-center my-12">
        <GoDotFill className="mr-1" />
        How It Works
      </h2>
      
      

      <div className="grid gap-8 md:grid-cols-3 mx-auto md:my-20 max-w-4xl justify-center">
        {/* Step 1 */}
        <div className="  max-w-3xs py-8 px-3 border dark:border-white/30  rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300">
          <FaUserPlus className="text-7xl text-black dark:hover:text-white dark:text-white/60 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">1. Sign Up</h3>
          <p>Create your account and set up your profile in seconds.</p>
        </div>

        {/* Step 2 */}
        <div className=" max-w-3xs p-6 border dark:border-white/30 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300">
          <FaListAlt className="text-7xl text-black dark:hover:text-white dark:text-white/60 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">2. Add Subscriptions</h3>
          <p>Add all your recurring services and track due dates easily.</p>
        </div>

        {/* Step 3 */}
        <div className="  max-w-3xs p-6 border rounded-xl dark:border-white/30  shadow-md text-center hover:shadow-xl transition-shadow duration-300">
          <FaBell className="text-7xl text-black dark:hover:text-white dark:text-white/60 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">3. Get Reminders</h3>
          <p>Receive timely alerts before renewals or unexpected charges.</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center my-12 ">
        <Link to={"/signup"}>
           <button className="dark:text-black font-semibold outline-none rounded-md dark:hover:bg-white/85 dark:bg-white/60 border text-white bg-black/85 text-center py-1.5 cursor-pointer min-w-[130px] p-2">
          Start Tracking Now
           </button>
        </Link>
      </div>
    </section>
  );
};

export default How;
