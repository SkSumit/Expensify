import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./AddExpenseForm";
import { startEditExpense } from "../actions/expenses";
import { startRemoveExpense } from "../actions/expenses";
const EditPage = (props) => {
  return (
    <div className="section">
      <ExpenseForm
        editPage={true}
        editingExpense={props.expenses}
        onSubmitHandler={(expense) => {
          props.dispatch(startEditExpense(props.expenses, expense));
          props.history.push("/");
        }}
      />
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-6">
            <button
              className="button is-fullwidth is-rounded has-background-danger has-text-white has-text-weight-semibold "
              onClick={(e) => {
                props.dispatch(startRemoveExpense(props.expenses));
                props.history.push("/");
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
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
