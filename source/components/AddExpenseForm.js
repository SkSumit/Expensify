import React from "react";
import "react-dates/initialize";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.editingExpense ? props.editingExpense.description : "",
      amount: props.editingExpense ? props.editingExpense.amount : "",
      note: props.editingExpense ? props.editingExpense.note : "",
      date: props.editingExpense ? moment(props.editingExpense.date) : moment(),
      focused: false,
      error: undefined,
      transaction: props.income || "expense",
    };
  }

  onChangeDescription = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onChangeNote = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onChangeAmount = (e) => {
    const amount = e.target.value;
    this.setState(() => ({ amount }));
  };
  onChangeDate = (date) => {
    if (date) {
      this.setState(() => ({ date }));
    }
  };
  onChangeFocus = ({ focused }) => {
    this.setState(() => ({ focused }));
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: "Please provide description or amount" }));
    } else {
      this.setState(() => ({ error: undefined }));
      console.log("Submitted");
      this.props.onSubmitHandler({
        description: this.state.description,
        amount:
          this.state.transaction === "income"
            ? Math.abs(this.state.amount)
            : -Math.abs(this.state.amount),
        date: this.state.date.valueOf(),
        note: this.state.note,
        transaction: this.state.transaction,
      });
    }
  };
  render() {
    return (
      <div>
        <h3>Add {this.state.transaction} here! </h3>
        {this.state.error ? <p>{this.state.error} </p> : ""}
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onChangeDescription}
          />
          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onChangeAmount}
          />

          <SingleDatePicker
            date={this.state.date}
            onDateChange={this.onChangeDate}
            focused={this.state.focused}
            onFocusChange={this.onChangeFocus}
            numberOfMonths={1}
            isOutsideRange={(day) => {
              false;
            }}
            displayFormat="Do MMM, YYYY"
          />
          <textarea
            placeholder="Optional Note"
            value={this.state.note}
            onChange={this.onChangeNote}
          ></textarea>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
