import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import expenseTotal from "../selectors/expenseTotal";
import moment from "moment";
import numeral from "numeral";
import { Link } from "react-router-dom";

// load a locale
numeral.register("locale", "in", {
  delimiters: {
    hundered: ",",
    thousands: ", ",
    decimal: ".",
  },
  abbreviations: {
    thousand: "k",
    million: "m",
    billion: "b",
    trillion: "t",
  },
  ordinal: function (number) {
    return number === 1 ? "Re" : "Rs";
  },
  currency: {
    symbol: "₹",
  },
});

// switch between locales
numeral.locale("in");

const ExpenseListItem = (props) => {
  return (
    <div>
      {`Showing ${props.expenses.length} ${
        props.expenses.length === 1 ? "item" : "items"
      }, totalling to ${expenseTotal(props.expenses)} `}
      {props.expenses.map((expense) => {
        return (
          <div key={expense.id}>
            <h4>
              <Link to={`edit/${expense.id}`}> {expense.description} </Link>
            </h4>
            <p>Amount :{numeral(expense.amount).format("$0,0[.]00")} </p>
            <h6>Created At :{moment(expense.date).format("Do MMM YYYY")} </h6>
          </div>
        );
      })}
    </div>
  );
};

export default connect((state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filter),
  };
})(ExpenseListItem);
