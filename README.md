Expense Tracker (MERN Stack)
============================

A simple app to add, view, edit, and delete your daily expenses.

Project Structure:
```
expense-tracker/
│
├── client/                        # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── components/
│   │       ├── ExpenseForm.jsx
│   │       ├── ExpenseList.jsx
│   │       └── TotalExpenses.jsx
│   ├── package.json
│   └── ... (other React files)
│
├── server/                        # Express backend
│   ├── index.js
│   ├── package.json
│   ├── models/
│   │   └── Expense.js
│   └── routes/
│       └── expenses.js
│
│
└── README.md

Getting Started:
----------------
1. **MongoDB Setup:**  
   - Local: Install MongoDB Community, run `mongodb`, uses `mongodb://localhost:27017/expense-tracker`  

2. **Backend:**
   ```
   cd server
   npm install
   node index.js
   ```

3. **Frontend:**
   ```
   cd client
   npm install
   npm start
   ```
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

Features:
---------
- Add, edit, delete expenses (amount, category, date)
- View all expenses in a table
- Total expenses calculated at the bottom
- Responsive, color-coded UI

Screenshots:
You can check all the images inside 'Expense Tracker/client/src/screenshots'
or you can check my drive link [https://drive.google.com/drive/folders/1Tf172SxOuDguivherVlK8C4CoKYDg2XT?usp=sharing]

Quick Scripts:
--------------
- Backend: `node index.js`
- Frontend: `npm start`

