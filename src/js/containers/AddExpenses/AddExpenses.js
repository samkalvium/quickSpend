import React, { useState } from 'react';
import './AddExpense.css';

const AddExpense = () => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Expense Added:', formData);
    // Later: Send to backend or state management
    setFormData({ title: '', amount: '', category: '', date: '' });
  };

  return (
    <div className="addExpenseContainer">
      <h2>Add New Expense</h2>
      <form className="expenseForm" onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Amount (₹)
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Category
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="bills">Bills</option>
            <option value="shopping">Shopping</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Date
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="submitBtn">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
