import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalExpenses from "./components/TotalExpenses";

const API_URL = "http://localhost:5000/api/expenses";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const { data } = await axios.get(API_URL);
    setExpenses(data);
  };

  const addExpense = async (expense) => {
    const { data } = await axios.post(API_URL, expense);
    setExpenses([...expenses, data]);
  };

  const deleteExpense = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setExpenses(expenses.filter((e) => e._id !== id));
    if (editing && editing._id === id) {
      setEditing(null);
    }
  };

  const editExpense = (expense) => {
    setEditing(expense);
  };

  const updateExpense = async (expense) => {
    const { data } = await axios.put(`${API_URL}/${expense._id}`, expense);
    setExpenses(expenses.map((e) => (e._id === expense._id ? data : e)));
    setEditing(null);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm
        onAdd={addExpense}
        onUpdate={updateExpense}
        editingExpense={editing}
        onCancelEdit={() => setEditing(null)}
      />
      <ExpenseList
        expenses={expenses}
        onDelete={deleteExpense}
        onEdit={editExpense}
      />
      <TotalExpenses expenses={expenses} />
    </div>
  );
}

export default App;
