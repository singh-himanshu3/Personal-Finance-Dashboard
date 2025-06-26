import React,{useState, useEffect} from 'react'
import Sidebar from './components/layout/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard'
import Analytics from './components/pages/Analytics'
import Settings from './components/pages/Settings'
import AddExpense from './components/pages/AddExpense'
import Header from './components/layout/Header'

function App() {
  const [totalIncome,setTotalIncome] = useState(0);
  const [totalExpenses,setTotalExpenses] = useState(0);
  const [recentTransactions,setRecentTransactions] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [allTransactions, setAllTransactions] = useState([]);


  useEffect(()=>{
      setTimeout(()=>{
        setTotalIncome(5000);
        setTotalExpenses(3200);
        setRecentTransactions([
        { id: 1, title: "Coffee Shop", amount: -15, category: "Food" },
        { id: 2, title: "Salary Payment", amount: 2500, category: "Income" },
        { id: 3, title: "Gas Station", amount: -45, category: "Transportation" }
        ]); 
        setIsLoading(false);
      }, 1000)
    },[])


  const addTransaction = (newTransaction) => {
  
  setAllTransactions(prev => [...prev, newTransaction]);
  
  
  setRecentTransactions(prev => {
    const updated = [newTransaction, ...prev];
    return updated.slice(0, 5); 
  });
  
  
  if (newTransaction.type === 'income') {
    setTotalIncome(prev => prev + Math.abs(newTransaction.amount));
  } else {
    setTotalExpenses(prev => prev + Math.abs(newTransaction.amount));
  }
};

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