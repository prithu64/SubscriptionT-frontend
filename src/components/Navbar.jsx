import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [showMenu,setShowMenu] = useState(false)
  return (
 <div className='dark:text-white w-screen relative'>

   <div className="px-2 py-4">
       <div className='flex justify-between py-2 max-w-sm md:max-w-3xl sm:max-w-2xl mx-auto border px-3 dark:border-white/30 rounded-sm'>
         {/*logo*/}
         <div className="">
          SubTrack
         </div>
          {/*menu icon*/}
         <button onClick = {()=>{setShowMenu(true)}}>
          <GiHamburgerMenu size={20}/>
         </button>  
      </div>
   </div>

  
   
   <div className={ `md:hidden fixed h-screen  dark:bg-white/10 backdrop-blur-xs w-[60%]  dark:text-white/60  top-0 right-0 shadow-lg border-l dark:border-white/30 transform transition-transform duration-300 ease-in-out z-50 ${showMenu?"translate-x-0":"translate-x-full"}`}>
         <div className="flex flex-col  px-2 pt-5">
             <div>
                <button onClick={()=>{setShowMenu(false)}}><IoClose size={25} /></button>
             </div>
              <ul className="text-center mt-6">
                 <li className=" underline mb-2">Home</li>
                 <li className=" underline mb-2">How it works?</li>
                 <li className=" underline mb-2">Features</li>
              </ul>
         </div>      
    </div>

     {showMenu && (
  <div
    onClick={() => setShowMenu(false)}
    className="fixed inset-0 dark:bg-black/50 bg-white/50  bg-opacity-40 z-40 transition-opacity duration-300 md:hidden"
  />
)}
   
      
  </div>
  )
}

export default Navbar