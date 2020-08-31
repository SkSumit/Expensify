import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";

import { Link } from "react-router-dom";

const ExpenseListItem = (props) => {
  return (
    <div>
      {props.expenses.map((expense) => {
        return (
          <div key={expense.id}>
            <h4>
              <Link to={`edit/${expense.id}`}> {expense.description} </Link>
            </h4>
            <p>Amount :{expense.amount} </p>
            <h6>Created At :{expense.date} </h6>
          </div>
        );
      })}
    </div>
  );
};

export default connect((state) => {
  return { expenses: getVisibleExpenses(state.expenses, state.filter) };
})(ExpenseListItem);
