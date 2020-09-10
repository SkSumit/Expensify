import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import expenseTotal from "../selectors/expenseTotal";
import moment from "moment";
import numeral from "numeral";
import { Link } from "react-router-dom";
import AddExpenseForm from "./AddExpenseForm";

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
      <div className="my-3">
        {`Showing ${props.expenses.length} ${
          props.expenses.length === 1 ? "item" : "items"
        }, totalling to ${expenseTotal(props.expenses)} `}
      </div>

      {props.expenses.map((expense) => {
        return (
          <article
            className={`message ${
              expense.transaction === "income" ? "is-success" : "is-danger"
            }  is-small`}
            key={expense.id}
          >
            <div className="message-body">
              <div className="columns ">
                <div className="column  ">
                  <p className="title is-5">
                    <Link to={`edit/${expense.id}`}>
                      {numeral(expense.amount).format("$0,0[.]00")}
                    </Link>
                  </p>
                  <p className="subtitle is-6 ">{expense.description}</p>
                  {expense.note && (
                    <p className="subtitle is-7 is-italic ">{expense.note}</p>
                  )}
                </div>
                <div className="column has-text-right-desktop has-text-left-touch">
                  <p className="is-7">
                    {moment(expense.date).format("Do MMM YYYY")}
                  </p>
                </div>
              </div>
            </div>
          </article>
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
