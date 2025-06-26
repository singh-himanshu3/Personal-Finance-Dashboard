import React, { useEffect, useState } from 'react'
import OverviewCard from '../ui/OverviewCard'
import { DollarSign, TrendingUp, TrendingDown, Wallet } from 'lucide-react'
import AddExpense from './AddExpense';

function Dashboard({ totalIncome, totalExpenses, recentTransactions, isLoading }) {


  let currentBalance = totalIncome - totalExpenses ;
  if (isLoading) {
  return (
    <div className="flex items-center justify-center h-64">
      <p className="text-gray-600">Loading your financial data...</p>
    </div>
  );
}
    return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <OverviewCard 
          title="Total Income" 
          amount={totalIncome} 
          icon={TrendingUp}
        />
        <OverviewCard 
          title="Total Expenses" 
          amount={totalExpenses} 
          icon={TrendingDown}
        />
        <OverviewCard 
          title="Current Balance" 
          amount={currentBalance} 
          icon={Wallet}
        />
        <OverviewCard 
          title="Monthly Savings" 
          amount={currentBalance} 
          icon={DollarSign}
        />
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          {recentTransactions.map((item) => {
          return (
            <div key={item.id} className='flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0'>
              <div>
                <p className="font-medium text-gray-900">{item.title}</p> 
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
              <p className={`font-semibold ${item.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${Math.abs(item.amount)}
              </p>
            </div>
          )
        })}
        </div>
      </div>
    </div>
    )
}

export default Dashboard
