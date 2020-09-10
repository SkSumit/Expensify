import React from "react";
import "react-dates/initialize";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

import "react-dates/lib/css/_datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      editPage: props.editPage,
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
      this.setState(() => ({ error: "Please provide Description & Amount" }));
    } else {
      this.setState(() => ({ error: undefined }));
      toast.success(`🦄 ${this.state.transaction} added!`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-6">
            <h1 className="title  has-text-centered">
              {this.state.editPage
                ? "Edit a savver"
                : `Add an  ${this.state.transaction} savver`}

              {this.state.error ? (
                <p className="subtitle is-6 has-text-danger my-2">
                  {this.state.error}{" "}
                </p>
              ) : (
                ""
              )}
            </h1>
            <form onSubmit={this.onSubmitHandler}>
              <div className="field is-horizontal">
                <input
                  className="input is-rounded mx-2 my-2"
                  type="text"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
                <p className="control has-icons-left mx-2 my-2">
                  <input
                    className="input is-rounded "
                    type="tel"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onChangeAmount}
                  />

                  <span className="icon is-small is-left">
                    <i className="fas fa-rupee-sign"></i>
                  </span>
                </p>
              </div>
              <div className="field is-horizontal mx-2 my-2">
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
              </div>
              <div className="field is-horizontal">
                <textarea
                  className="textarea is-small mx-2 my-2"
                  placeholder="Optional Note"
                  value={this.state.note}
                  onChange={this.onChangeNote}
                ></textarea>
              </div>
              <div className="field is-horizontal"></div>
              <button className="button  is-rounded has-background-success has-text-white has-text-weight-semibold ">
                Submit
              </button>
            </form>
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default ExpenseForm;
