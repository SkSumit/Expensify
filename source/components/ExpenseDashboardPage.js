import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListInput from "./ExpensesListInput";
const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseList />
      <ExpenseListInput />
    </div>
  );
};

export default ExpenseDashboardPage;
