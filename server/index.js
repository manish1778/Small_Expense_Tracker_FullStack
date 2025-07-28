const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const expensesRouter = require('./routes/Expenses');
app.use('/api/expenses', expensesRouter);

mongoose.connect(
  'mongodb://localhost:27017/expense-tracker',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.log(err));