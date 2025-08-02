
import DisplaySubsCard from "./DisplaySubCard";


function DisplaySubs({subscriptions,refetch}) { 

  return (
    <div className="px-4 max-w-5xl mx-auto py-10 space-y-3 dark:text-white text-black/30">
  <div className="flex items-center justify-center space-x-2">
    
    <div className="text-black dark:text-white text-center border rounded-xl dark:border-white/60 w-[180px] p-2">
      <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
      Active Subscriptions
    </div>
  </div>

  {
    subscriptions.length < 1 ? <div className="flex justify-center mt-15 items-center dark:text-white/60">are you poor ? </div>:""
  }

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {subscriptions.map((sub) => (
      <DisplaySubsCard
        id = {sub._id}
        key={sub._id}
        name={sub.subs_name}
        plan={sub.payment_plan}
        amount={sub.payment_amount}
        date={sub.payment_date}
        refetch = {refetch}
      />
    ))}
  </div>
</div>

  )
}

export default DisplaySubs