import DisplaySubsCard from "./DisplaySubCard";

const subscriptions = [
  {
    id: 1,
    name: 'Netflix',
    plan: 'Monthly',
    amount: 499,
    date: '2025-08-01',
  },
  {
    id: 2,
    name: 'Spotify',
    plan: 'Annual',
    amount: 999,
    date: '2025-12-20',
  },
  {
    id: 3,
    name: 'Figma Pro',
    plan: 'Monthly',
    amount: 899,
    date: '2025-08-10',
  },
];

function DisplaySubs() {
  return (
    <div className="px-4 max-w-5xl mx-auto py-10 space-y-3 dark:text-white text-black/30">
  <div className="flex items-center justify-center space-x-2">
    
    <div className="text-black dark:text-white text-center border rounded-xl dark:border-white/60 w-[180px] p-2">
      <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
      Active Subscriptions
    </div>
  </div>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {subscriptions.map((sub) => (
      <DisplaySubsCard
        key={sub.id}
        name={sub.name}
        plan={sub.plan}
        amount={sub.amount}
        date={sub.date}
      />
    ))}
  </div>
</div>

  )
}

export default DisplaySubs