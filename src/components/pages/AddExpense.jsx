import React from 'react'
import AddExpenseForm from '../../forms/AppExpenseForm.jsx';

function AddExpense({ onAddTransaction }) {
  
    const handleAddTransaction = (transactionData) => {
      onAddTransaction(transactionData);
    console.log('New transaction:', transactionData);
    };

  return (
    <div>
      <AddExpenseForm onSubmit={handleAddTransaction} />
    </div>
  );
  
}

export default AddExpense
