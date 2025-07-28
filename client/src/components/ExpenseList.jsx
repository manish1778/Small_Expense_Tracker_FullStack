import React from 'react';

function ExpenseList({ expenses, onDelete, onEdit }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map(expense => (
                    <tr key={expense._id}>
                        <td>{expense.amount}</td>
                        <td>{expense.category}</td>
                        <td>{new Date(expense.date).toLocaleDateString()}</td>
                        <td>
                            <button className="edit-btn" onClick={() => onEdit(expense)}>Edit</button>
                            <button className="delete-btn" onClick={() => onDelete(expense._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ExpenseList;