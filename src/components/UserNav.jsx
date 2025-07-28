import { CgProfile } from "react-icons/cg";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useContext} from "react";
import { DarkThemeContext } from "../contexts/DarkThemeContext.js";
import { IoIosLogOut } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";

function UserNav() {
    
    const {isDark,setIsDark,setModal} = useContext(DarkThemeContext)
    
    const toggleModal = ()=>{
        setModal(true)
    }
  
    const toggleDarkTheme = ()=>{
      if(isDark === "dark"){
        setIsDark("")
      }else{
        setIsDark("dark")
      }
    }  
  return (
 <div className="py-5 sticky z-[50] top-0">
     <div
  className="  flex dark:border dark:border-white/30  items-center justify-between dark:text-white text-gray-600 bg-opacity-80 backdrop-blur-md rounded-full px-6 py-2 shadow-lg max-w-3xl mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90 z-50"
>
  <button
    className=" dark:text-white mx-2 transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full font-semibold"
  >
   SubTrack
  </button>

  <button
    className="hover:text-gray-800 dark:hover:text-white mx-2 transition-all duration-200 ease-in-out hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full"
  >
     <CgProfile size={25} />
  </button>

  <button
    onClick={toggleDarkTheme}
    className=" hover:text-gray-800 mx-2 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:shadow-md rounded-full p-1 focus:outline-none "
  >
     {
                isDark === 'dark'?<FaMoon size={20} />:<MdWbSunny  size={20}/>
     } 
  </button>

   <button
    onClick={toggleModal}
    className=" hover:text-gray-800 dark:hover:text-white mx-2 transition-transform duration-200 ease-in-out hover:-translate-y-1 focus:outline-none focus:ring-2  rounded-full"
  >
   <CiCirclePlus size={25}/>
  </button>

  <button
    className=" hover:text-gray-800 dark:hover:text-white mx-2 transition-transform duration-200 ease-in-out hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full"
  >
   <IoIosLogOut size={25}/>
  </button>
 
</div>
 </div>
 

  )
}

export default UserNav