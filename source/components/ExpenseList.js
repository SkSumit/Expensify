import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import ExpenseListInput from "./ExpensesListInput";

const ExpenseList = (props) => (
  <section className="section">
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column is-narrow ">
          <h1 className="title">ExpenseList</h1>
        </div>
        <div className="column">
          <ExpenseListInput />
        </div>
      </div>

      <div className="box">
        <ExpenseListItem />
      </div>
    </div>
  </section>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filter,
  };
};

export default connect(mapStateToProps)(ExpenseList);
