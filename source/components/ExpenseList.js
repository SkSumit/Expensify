import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = (props) => (
  <div>
    <p>ExpenseList</p>
    <ExpenseListItem />
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filter,
  };
};

export default connect(mapStateToProps)(ExpenseList);
