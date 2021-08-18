import React, { useState } from "react";

import ExpensesNew from "../src/components/Expenses/ExpensesNew";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY__EXPENSES = [
  {
    id: 0,
    title: "Toilet paper",
    amount: 200,
    date: new Date(2021, 29, 7),
  },
  {
    id: 1,
    title: "car insurance",
    amount: 989,
    date: new Date(2021, 18, 3),
  },
  {
    id: 2,
    title: "Books ",
    amount: 20,
    date: new Date(2021, 11, 3),
  },
  {
    id: 3,
    title: "Tour and travel",
    amount: 200,
    date: new Date(2020, 29, 8),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY__EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesNew items={expenses} />
    </div>
  );
}

export default App;
