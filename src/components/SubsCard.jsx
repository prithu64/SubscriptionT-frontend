import { useContext, useEffect, useState } from 'react'
import { DarkThemeContext } from '../contexts/DarkThemeContext';
import axios from 'axios';


function SubsCard({refatch}) {
 const {modal,setModal} = useContext(DarkThemeContext)
 const [subs_name,setSubname] = useState(null)
 const [payment_date,setPaymentDate] = useState(null)
 const [payment_plan,setPaymentPlan] = useState(null)
 const [payment_amount,setPaymentAmount] = useState(null);
 const [responseState,setResponseState] = useState(false);
 const [showPopUp,setPopUp] = useState(false)
 const [resMessage,setResMessage] = useState(null)


useEffect(()=>{
 const timeout = setTimeout(()=>{
   setPopUp(false)
 },2000)
 return ()=>clearTimeout(timeout)
},[showPopUp])


const handleCreateSub = async()=>{
 
   if(!subs_name || !payment_amount || !payment_date || !payment_plan){
    alert("All fields required")
    return;
   }
   setResponseState(true)
   try {
    const token =  localStorage.getItem("token")
    console.log("date from frontend user: ",payment_date)
    console.log("ISO with T00:00:00: ", new Date(payment_date + "T00:00:00").toISOString())
    const response = await axios.post("https://subscriptiont-backend.onrender.com/api/v1/subs/makesub",{
      subs_name,
      payment_amount:Number(payment_amount),
      payment_date :new Date(payment_date + "T00:00:00").toISOString(),
      payment_plan
    },{
      headers : {
        authorization : `Bearer ${token}`
      }
    })
    setResMessage(response.data.message)
    setPopUp(true)
    setResponseState(false)
    if(refatch){
      refatch()
    }

   } catch (error) {
    setResponseState(false)
    console.log("error:", error);
    const apiMessage = error.response?.data?.message || "Something went wrong";
    console.log("api error:", apiMessage);
   }
 }


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
            onChange={(e)=>{
              setSubname(e.target.value)
            }}
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
            onChange={(e)=>{
              setPaymentPlan(e.target.value)
            }}
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
           onChange={(e)=>{
              setPaymentAmount(e.target.value)
            }} 
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
           onChange={(e)=>{
              setPaymentDate(e.target.value)
            }}
            type="date" 
            className="px-3 py-2 rounded-md bg-white/10 border border-white/20 text-sm dark:text-white dark:placeholder-white/40 focus:outline-none"
          />
        </div>
      </div>

      <button disabled = {responseState} onClick={handleCreateSub} className={`${responseState ? "cursor-not-allowed opacity-50":"cursor-pointer"}  w-full mt-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-md transition`}>
        Add Subscription
      </button>     
    </div>
        <div className={`fixed top-10 z-80 flex justify-center ${showPopUp?"opacity-100 scale-100":"opacity-0 scale-95"} transition-all duration-300 ease-in-out`}>
         <div className="dark:text-white p-2 shadow-lg rounded">
            🎉{resMessage}
         </div>
       </div>
    
    </div>
  )
    
   
  
}

export default SubsCard;
