import { useContext } from 'react'
import { DarkThemeContext } from '../contexts/DarkThemeContext';

function SubsCard() {
 const {modal,setModal} = useContext(DarkThemeContext)


  return (
    
        
        <div className={` ${
        modal ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"} w-full h-full fixed bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 inset-0  transition-all duration-300 ease-in-out `}>
         <div className={`relative text-white  max-w-xs md:max-w-sm w-full mx-auto p-6 border dark:border-white/30 bg-white/5 backdrop-blur-lg  rounded-xl shadow-lg space-y-4 
          
          `}>
       
      <h2 className="text-lg font-semibold text-center dark:text-white mb-2">Create New Subscription</h2>
      <button className='absolute cursor-pointer top-3 right-4' onClick={()=>{
        setModal(false)
      }} > X</button>
      
      <div className="flex items-center gap-4">
       
        <div className="flex flex-col w-full">
          <label className="text-sm  dark:text-gray-400 mb-1">Subscription Name</label>
          <input 
            type="text" 
            placeholder="e.g. Netflix" 
            className="px-3 py-2 rounded-md bg-white/10 border border-white/20 text-sm  dark:text-white dark:placeholder-white/40 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        
        <div className="flex flex-col w-full">
          <label className="text-sm  dark:text-gray-400 mb-1">Payment Plan</label>
          <input 
            type="text" 
            placeholder="Monthly / Yearly" 
            className="px-3 py-2 rounded-md bg-white/10 border border-white/20 text-sm  dark:text-white dark:placeholder-white/40 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        
        <div className="flex flex-col w-full">
          <label className="text-sm  dark:text-gray-400 mb-1">Amount</label>
          <input 
            type="number" 
            placeholder="e.g. 999" 
            className="px-3 py-2 rounded-md bg-white/10 border border-white/20 text-sm  dark:text-white dark:placeholder-white/40 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        
        <div className="flex flex-col w-full">
          <label className="text-sm  dark:text-gray-400 mb-1">Payment Date</label>
          <input 
            type="date" 
            className="px-3 py-2 rounded-md bg-white/10 border border-white/20 text-sm dark:text-white dark:placeholder-white/40 focus:outline-none"
          />
        </div>
      </div>

      <button className="w-full mt-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-md transition">
        Add Subscription
      </button>
    </div>
    </div>
  )
    
   
  
}

export default SubsCard;
