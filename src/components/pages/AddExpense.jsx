import React from 'react'
import AddExpenseForm from '../../forms/AppExpenseForm.jsx';

function AddExpense({ onAddTransaction }) {
  
    const handleAddTransaction = (transactionData) => {
      onAddTransaction(transactionData);
    console.log('New transaction:', transactionData);
    };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Add New Transaction</h1>
      <AddExpenseForm onSubmit={handleAddTransaction} />
    </div>
  );
  
}

export default AddExpense
