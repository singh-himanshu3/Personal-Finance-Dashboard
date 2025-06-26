import React from 'react'

function OverviewCard({ title, amount, icon: Icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-2xl font-bold">${amount}</p>
        </div>
        <Icon size={24} className="text-blue-600" />
      </div>
    </div>
  )
}
export default OverviewCard
