import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./AddExpenseForm";
import { startEditExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";
const EditPage = (props) => {
  console.log(props.expenses);
  return (
    <div>
      <h3> Edit the {props.match.params.id} </h3>
      <ExpenseForm
        editingExpense={props.expenses}
        onSubmitHandler={(expense) => {
          props.dispatch(startEditExpense(props.expenses, expense));
          props.history.push("/");
        }}
      />
      <button
        onClick={(e) => {
          props.dispatch(removeExpense(props.expenses));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses.find((expense) => {
      return props.match.params.id === expense.id;
    }),
  };
};

export default connect(mapStateToProps)(EditPage);
