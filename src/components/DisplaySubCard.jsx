import axios from "axios";
import { useEffect, useState } from "react";

function DisplaySubCard({ name, plan, amount, date ,id,refetch}) {
  
  const [upcomingPayment,setPayment] = useState(null)

  const handleDelete = async()=>{
    try {
         await axios.delete(`https://subscriptiont-backend.onrender.com/api/v1/subs/deletesub/${id}`)
         refetch()
    } catch (error) {
      console.log("error::",error)
    }
 
    
  }
  
  const nextPayment = ()=>{
   const createdDate = new Date(date)
   const today = new Date;
   const nextDate = new Date(createdDate);
   
   const daysPassed = (today - createdDate)/(1000*60*60*24);
  

  
   if(plan.toLowerCase() === "monthly"){
     const monthsPassed  = Math.floor(daysPassed/30);
     nextDate.setDate(nextDate.getDate()+ (monthsPassed+1)*30)
   }else if(plan.toLowerCase()==="yearly"){
    const yearsPassed = Math.floor(daysPassed/365);
     nextDate.setDate(nextDate.getDate()+(yearsPassed+1)*365)
   }
   setPayment(nextDate)
  }

  useEffect(()=>{
    nextPayment()
  },[date,plan])
   
  return (
     <div className="w-full max-w-xs border text-black dark:border-white/30 bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-xl shadow-sm p-5 space-y-4 dark:text-white transition-transform duration-300 hover:scale-105">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{name}</h2>
        <span className="text-sm px-2 py-1 dark:bg-indigo-600 border dark:border-none bg-black/50 text-white rounded-md">{plan}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm dark:text-gray-300">Amount</span>
        <span className="text-sm font-medium">₹{amount}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm dark:text-gray-300">Subscription Start Date</span>
        <span className="text-sm font-medium">{new Date(date).toLocaleDateString()}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm dark:text-gray-300"> Next Payment Date</span>
        <span className="text-sm font-medium">{upcomingPayment? upcomingPayment.toLocaleDateString():"calculating..."}</span>
      </div>

      <div className="flex justify-end items-center dark:text-white/30 text-black/50">
        <span className="text-sm font-medium">mm/dd/yy</span>
      </div>

      <button onClick={handleDelete} className="w-full mt-3 py-2 px-4 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md transition">
        Delete Subscription
      </button>
    </div>
  );
}

export default DisplaySubCard;
