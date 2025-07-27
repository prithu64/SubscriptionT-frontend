import React from 'react'
import { FaWallet, FaList, FaRegCalendarAlt } from "react-icons/fa";
import { GrDiamond } from "react-icons/gr";

function SubsInfo() {
  return (
    <div className="dark:text-white max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto text-sm md:text-base">
      
      <div className="border dark:border-white/30 bg-white/5 dark:bg-white/5 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="p-2 rounded-full bg-white/10 dark:bg-white/10 text-gray-700 dark:text-white">
          <FaWallet size={18} />
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Total Monthly Cost</p>
          <h2 className="text-lg font-semibold text-black dark:text-white">₹2,340</h2>
        </div>
      </div>

      <div className="border dark:border-white/30 bg-white/5 dark:bg-white/5 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="p-2 rounded-full bg-white/10 dark:bg-white/10 text-gray-700 dark:text-white">
          <FaList size={18} />
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Active Subscriptions Count</p>
          <h2 className="text-lg font-semibold text-black dark:text-white">6</h2>
        </div>
      </div>

      <div className="border dark:border-white/30 bg-white/5 dark:bg-white/5 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="p-2 rounded-full bg-white/10 dark:bg-white/10 text-gray-700 dark:text-white">
          <FaRegCalendarAlt size={18} />
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Upcoming Payments</p>
          <h2 className="text-lg font-semibold text-black dark:text-white">2 due in next 7 days</h2>
        </div>
      </div>

      <div className="border dark:border-white/30 bg-white/5 dark:bg-white/5 p-4 rounded-xl shadow-sm flex items-center gap-4">
        <div className="p-2 rounded-full bg-white/10 dark:bg-white/10 text-gray-700 dark:text-white">
          <GrDiamond size={18} />
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400 font-medium text-sm">Most Expensive Subscription</p>
          <h2 className="text-lg font-semibold text-black dark:text-white">Netflix – ₹999</h2>
        </div>
      </div>

    </div>
  );
}

export default SubsInfo;
