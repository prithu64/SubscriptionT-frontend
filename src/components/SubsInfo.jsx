import { useEffect, useState } from "react";
import { FaWallet, FaList, FaRegCalendarAlt } from "react-icons/fa";
import { GrDiamond } from "react-icons/gr";

function SubsInfo({subscriptions}) {
  const[totalCost,setTotal] = useState(null)
  const [costliestSub,setSub] = useState(null)
  const [upcomingSubs,setUpcoming] = useState([])

  const totalSpend = ()=>{
      let total = 0 ;
      for(let sub of subscriptions){
        total +=sub.payment_amount;
      }
      setTotal(total)
  } 

  const costlySub = ()=>{
    let maxSub = subscriptions[0]
    for(let sub of subscriptions){
      if(sub.payment_amount > maxSub.payment_amount ){
        maxSub = sub
      }
    }
   setSub(maxSub)
  }

  const UpcomingPayments = ()=>{
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate()+7)
    
    const upcoming = subscriptions.filter((sub)=>{
      const createdDate = new Date(sub.payment_date); //creaated date of the sub
      const timeDiff = today - createdDate;          //time passed between createdDate and current date(gives in milliseconds)
      const daysPassed = Math.floor(timeDiff/(1000*60*60*24));  //convert milliseconds into days
      const monthPassed = Math.floor(daysPassed/30);   //convert days into months passed(30-days cycle)
      
      //.getDate() - gets the day of the month

      const nextPayment = new Date(createdDate);
      nextPayment.setDate(createdDate.getDate() + (monthPassed*30));

      if(nextPayment < today){
        nextPayment.setDate(nextPayment.getDate() + 30);
      }

      return nextPayment >= today && nextPayment <=nextWeek
    })

   setUpcoming(upcoming);
  }

  useEffect(()=>{
   totalSpend()
   costlySub()
   UpcomingPayments()
   console.log("upcoming:",upcomingSubs)
  },[subscriptions])


  return (
    <div className="dark:text-white max-w-xl w-full grid grid-cols-1 md:grid-cols-2 py-10 gap-4 mx-auto text-sm md:text-base">
      
      <div className="border dark:border-white/30 bg-white/5 dark:bg-white/5 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="p-2 rounded-full bg-white/10 dark:bg-white/10 text-gray-700 dark:text-white">
          <FaWallet size={18} />
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Total Spend</p>
          <h2 className="text-lg font-semibold text-black dark:text-white">₹{totalCost}</h2>
        </div>
      </div>

      <div className="border dark:border-white/30 bg-white/5 dark:bg-white/5 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="p-2 rounded-full bg-white/10 dark:bg-white/10 text-gray-700 dark:text-white">
          <FaList size={18} />
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Active Subscriptions Count</p>
          <h2 className="text-lg font-semibold text-black dark:text-white">{subscriptions.length}</h2>
        </div>
      </div>

      <div className="border dark:border-white/30 bg-white/5 dark:bg-white/5 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="p-2 rounded-full bg-white/10 dark:bg-white/10 text-gray-700 dark:text-white">
          <FaRegCalendarAlt size={18} />
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Upcoming Payments</p>
          {
            upcomingSubs.length === 0  ? "None":""
          }
          {
            upcomingSubs.length >=1 && (<h2 className="text-lg font-semibold text-black dark:text-white">{upcomingSubs.length} due in next 7 days</h2>) 
          }
          
        </div>
      </div>

      <div className="border dark:border-white/30 bg-white/5 dark:bg-white/5 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="p-2 rounded-full bg-white/10 dark:bg-white/10 text-gray-700 dark:text-white">
          <GrDiamond size={18} />
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Most Expensive Subscription</p>
          {
            costliestSub ? "":"None"
          }
          {
            costliestSub && (
                <h2 className="text-lg font-semibold text-black dark:text-white">{costliestSub.subs_name}- ₹{costliestSub.payment_amount}</h2>
            )
          }
        
        </div>
      </div>

    </div>
  );
}

export default SubsInfo;
