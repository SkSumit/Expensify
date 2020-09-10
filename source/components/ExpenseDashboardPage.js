import React from "react";
import ExpenseList from "./ExpenseList";
import DashboardHeader from "./DashboardHeader";

const ExpenseDashboardPage = () => {
  return (
    <div>
      <DashboardHeader />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;
