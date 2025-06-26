import React,{useState, useEffect} from 'react'
import Sidebar from './components/layout/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'
import Analytics from './components/pages/Analytics'
import Settings from './components/pages/Settings'
import AddExpense from './components/pages/AddExpense'
import Header from './components/layout/Header'
import UseTransactions from './hooks/UseTransactions.js'

function App({totalIncome,
        totalExpenses,
        recentTransactions,
        allTransactions,
        isLoading,addTransaction,
        updateTransaction,
        deleteTransaction}) {


  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-8 bg-gray-50 overflow-auto">
          <Routes>
            <Route path='/' element={<Dashboard totalIncome={totalIncome}
                                      totalExpenses={totalExpenses}
                                      recentTransactions={recentTransactions}
                                      isLoading={isLoading}/>} />
            <Route path='/analytics' element={<Analytics/>} />
            <Route path='/settings' element={<Settings/>} />
            <Route path='/add-expense' element={<AddExpense onAddTransaction={addTransaction}/>} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App