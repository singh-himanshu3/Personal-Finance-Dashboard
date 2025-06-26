import React, { useState } from 'react'
import { Home, PlusCircle, BarChart3, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {

    const navigation = [
        {name: "Dashboard", icon:Home, path: "/"},
        {name: "Add Expense", icon:PlusCircle, path: "/add-Expense"},
        {name: "Analytics", icon:BarChart3, path: "/analytics" },
        {name: "Settings", icon:Settings, path: "/settings"}
    ]
    // const [activeItem,setActiveItem] = useState('Dashboard');
    const location = useLocation();


    return (
        <div className="w-64 bg-gray-900 min-h-screen">
            <div className="p-6">
                <h2 className="text-white text-xl font-bold">Finance Tracker</h2>
            </div>

            <nav>
                {navigation.map((item)=>{
                    const Icon = item.icon ;
                    const isActive = item.path === location.pathname ;
                    return (
                        <Link
                        to={item.path}
                        key={item.name}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors 
                        ${
                        isActive 
                            ? 'bg-blue-600 text-white shadow-lg' 
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                            }`}>

                        <Icon size={20} />    
                        <span>{item.name}</span>
                        </Link>
                    )
                })}
            </nav>
        </div>
        
    )
}

export default Sidebar
