import React from 'react';

function TotalExpenses({ expenses }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  return <h3 className="TotalExpenses">Total Expenses: ${total}</h3>
}

export default TotalExpenses;