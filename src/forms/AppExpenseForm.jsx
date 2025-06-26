import React,{useState} from 'react'

import { EXPENSE_CATEGORIES,INCOME_CATEGORIES } from '../data/Categories';


function AddExpenseForm({onSubmit }) {
    const [amount,setAmount] = useState("");
    const [description,setDescription] = useState("");
    const [category,setCategory] = useState("");
    const [date,setDate] = useState(new Date().toISOString().split('T')[0]);
    const [type,setType] = useState('expense');

    const [errors,setErrors] = useState({});

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(validateForm()){ 
          const newTransaction = {
            id : Date.now(),
            title : description,
            amount: type === 'expense' ? -Math.abs(Number(amount)) : Math.abs(Number(amount)),
            category: category,
            date: date,
            type: type 
          }

          onSubmit(newTransaction);

          setAmount('');
          setDescription('');
          setCategory('');
          setDate(new Date().toISOString().split('T')[0]);
          setType('expense');
          setErrors({});

          alert('Transaction added successfully!');
      }
    }


    const handleChange = (e) => {
      const {name , value} = e.target ;
      switch (name) {
        case 'amount':
          setAmount(value);
          break;

        case 'description':
          setDescription(value);
          break;

        case 'category':
          setCategory(value);
          break;

        case 'date':
          setDate(value);
          break;

        case 'type':
          setType(value);
          break;
          
        default:
          break;
      }
      if(errors[name]){
        setErrors(prev=>({
            ...prev,
            [name]: ''
        }))
      }
    }

    


    const validateForm = ()=>{
      const newErrors = {};

      if(!amount || amount <= 0){
        newErrors.amount =  'Amount must be greater than zero';
      }
      if(!description.trim()){
        newErrors.description =  'Description is required';
      }
      if(!category){
        newErrors.category =  'Category is required';
      }
      if(!date){
        newErrors.date =  'Date is required';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0
    }
    

    return (
    <div className="bg-white rounded-lg shadow-md p-6">
       <h2 className="text-xl font-bold mb-4">Add New Transaction</h2>
      <form onSubmit={handleSubmit}>

        <div className='mb-4'>
           <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
           <div className='flex gap-4'>
            <label className='flex items-center'>
            <input type="radio"
              name='type'
              value="expense"
              checked = {type === "expense"}
              onChange={handleChange}
              className='mr-2'
            />
            Expense
            </label>
            <label className='flex items-center'>
              <input
              type="radio"
              name="type"
              value="income"
              checked = {type === "income"}
              onChange={handleChange}
              className='mr-2'  />
              Income
            </label>
           </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <input type="number" name='amount' value={amount} onChange={handleChange} placeholder='Enter Amount'
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
            {errors.amount && (
              <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
            )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <input 
            type="text" 
            name="description" 
            value={description} 
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter description (e.g., Coffee at Starbucks)"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>


        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Category
          </label>
          <select name="category" value={category} onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
           <option value="">Select Category</option>

            {(type === 'expense' ? EXPENSE_CATEGORIES : INCOME_CATEGORIES).map((element)=>(
              <option key={element} value={element}>
                {element}
              </option>
            ))}
          </select>

          {errors.category && (
          <p className="text-red-500 text-sm mt-1">{errors.category}</p>
          )}

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
            Date
            </label>

            <input type="date" 
            name='date'
            value={date}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
            )}  

          </div>

            <div className="mb-4">
              <button
                type="submit"
                
                className="w-full cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
              >
                Add Transaction
              </button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default AddExpenseForm
