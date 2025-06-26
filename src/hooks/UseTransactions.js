import {useState,useEffect} from 'react'

function UseTransactions() {
     const [totalIncome,setTotalIncome] = useState(0);
      const [totalExpenses,setTotalExpenses] = useState(0);
      const [recentTransactions,setRecentTransactions] = useState([]);
      const [isLoading,setIsLoading] = useState(true);
      const [allTransactions, setAllTransactions] = useState([]);


      useEffect(()=>{
      setTimeout(()=>{
        setTotalIncome(5000);
        setTotalExpenses(3200);
        setRecentTransactions([]); 
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

    const updateTransaction = (updatedTransaction) => {
        setAllTransactions(prev => prev.map(transaction =>{
            if(transaction.id === updatedTransaction.id){
                return updatedTransaction;
            }
            return transaction;
        }))
        setRecentTransactions(prev => prev.map(transaction => {
        if(transaction.id === updatedTransaction.id){
            return updatedTransaction;
        }
        return transaction;
        }))
        recalculateTotals();    
    }


    const deleteTransaction = (transactionId) => {
        setAllTransactions(prev => prev.filter(transaction => {
            return transactionId !== transaction.id ;
        }))
        setRecentTransactions(prev => prev.filter(transaction => {
            return transactionId !== transaction.id ;
        }))
        recalculateTotals();
    }


    const recalculateTotals = () => {
     const totalIncomeCalculated = allTransactions.filter((transaction) => transaction.type === 'income')
        .reduce((accumulator,currentValue) => accumulator + Math.abs(currentValue.amount),0);

     const totalExpensesCalculated = allTransactions.filter((transaction) => transaction.type === 'expense')
        .reduce((accumulator,currentValue) => accumulator + Math.abs(currentValue.amount),0);

    setTotalIncome(totalIncomeCalculated);
    setTotalExpenses(totalExpensesCalculated);
    }

    
    return {
        totalIncome,
        totalExpenses,
        recentTransactions,
        allTransactions,
        isLoading,
        
        addTransaction,
        updateTransaction,
        deleteTransaction
    }
}

export default UseTransactions
