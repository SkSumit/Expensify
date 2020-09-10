import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import ExpenseListInput from "./ExpensesListInput";
import { giveUserNames } from "../actions/auth";

const ExpenseList = (props) => (
  <section className="section">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-8">
          <ExpenseListInput />
        </div>
      </div>

      <div className="columns  is-centered">
        <div className="column is-8">
          <div className="box ">
            <ExpenseListItem />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filter,
    giveUserNames: giveUserNames(),
  };
};

export default connect(mapStateToProps)(ExpenseList);
