import React from "react";
import ExpenseForm from "./AddExpenseForm";
import { addExpense } from "../actions/expenses";
import { connect } from "react-redux";

const ExpenseAddPage = (props) => {
  return (
    <div>
      <ExpenseForm
        onSubmitHandler={(expenses) => {
          console.log(expenses);
          props.dispatch(addExpense(expenses));
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
