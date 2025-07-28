const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// GET All
router.get('/', async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

// POST 
router.post('/', async (req, res) => {
  const { amount, category, date } = req.body;
  const expense = new Expense({ amount, category, date });
  await expense.save();
  res.status(201).json(expense);
});

// PUT 
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, category, date } = req.body;

    if (amount == null || !category || !date) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const expense = await Expense.findByIdAndUpdate(
      id,
      { amount, category, date },
      { new: true }
    );
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.json(expense);
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ message: err.message }); 
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Expense.findByIdAndDelete(id);
  res.json({ message: 'Expense deleted' });
});

module.exports = router;