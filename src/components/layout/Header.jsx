import React from 'react'
import { useLocation } from 'react-router-dom'
import { Bell, User } from 'lucide-react';

function Header() {
    

     return (
    <header className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
    
      <div>
        <h1 className="text-xl font-bold text-gray-800">Finance Tracker</h1>
      </div>
      

      <div className="flex items-center space-x-4">
        <Bell size={20} className="text-gray-600 cursor-pointer hover:text-gray-800" />
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
          <span className="text-gray-700 font-medium">John Doe</span>
        </div>
      </div>
    </header>
  )
}

export default Header
