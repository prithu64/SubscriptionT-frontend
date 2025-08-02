import { useContext, useState } from "react";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { DarkThemeContext } from "../contexts/DarkThemeContext.js";
import HowItWorks from "./HowItWorks.jsx";


function Navbar() { 
  const [showModal, setShowModal] = useState(false)
  const {isDark,setIsDark} = useContext(DarkThemeContext)

  const toggleDarkTheme = ()=>{
    if(isDark === "dark"){
      setIsDark("")
    }else{
      setIsDark("dark")
    }
  }

  return (
    <div className="sticky top-0 z-50 w-full dark:text-white ">
      <div className="px-2 py-4">
        <div className="flex justify-between backdrop-blur-lg  items-center py-2 max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto border px-3 dark:border-white/30 rounded-sm">
          
        <div className="font-semibold   ">
           {isDark ? <img className="w-[100px] h-[30px] md:w-[120px] md:h-[35px]" src="/logoDarknew.png"/>:<img className="w-[100px] h-[30px] md:w-[120px] md:h-[35px]" src="/logoWhitenew.png"/>}
        </div>

        
        <div className="flex items-center gap-x-4">
           <button onClick={toggleDarkTheme}>
          {
            isDark === 'dark'?<FaMoon size={20} />:<MdWbSunny  size={20}/>
          } 
         </button>
         {/* how to ? */}
          <button className="cursor-pointer">
            <BsFillQuestionCircleFill  onClick={() => setShowModal(true)} size={25} />
          </button> 
        </div>
        
        </div>
      </div>

      <HowItWorks isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Navbar;
