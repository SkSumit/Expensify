import React from "react";
import ExpenseForm from "./AddExpenseForm";
import { startAddExpense } from "../actions/expenses";
import { connect } from "react-redux";

const ExpenseAddPage = (props) => {
  return (
    <div>
      <h1>INCOME DALOOOO IDHAR YOU ALOOO</h1>
      <ExpenseForm
        income={"income"}
        onSubmitHandler={(expenses) => {
          props.dispatch(startAddExpense(expenses));
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(ExpenseAddPage);
