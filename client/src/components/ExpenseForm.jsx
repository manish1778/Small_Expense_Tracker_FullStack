import React, { useState, useEffect } from 'react';

function ExpenseForm({ onAdd, onUpdate, editingExpense, onCancelEdit }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (editingExpense) {
      setAmount(editingExpense.amount || '');
      setCategory(editingExpense.category || '');
      setDate(
        editingExpense.date
          ? new Date(editingExpense.date).toISOString().split('T')[0]
          : ''
      );
    } else {
      setAmount('');
      setCategory('');
      setDate('');
    }
  }, [editingExpense]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      amount: Number(amount),
      category,
      date,
    };
    if (editingExpense) {
      onUpdate({ ...editingExpense, ...expenseData });
    } else {
      onAdd(expenseData);
    }
    setAmount('');
      setCategory('');
      setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        required
      />
      <button type="submit">
        {editingExpense ? 'Update Expense' : 'Add Expense'}
      </button>
      {editingExpense && (
        <button type="button" onClick={onCancelEdit}>Cancel</button>
      )}
    </form>
  );
}

export default ExpenseForm;