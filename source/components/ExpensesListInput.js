import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";

import { setTextFilter } from "../actions/filters";
import { sortByDate } from "../actions/filters";
import {
  sortByAmount,
  setStartDate,
  setEndDate,
  sortByIncome,
  sortByExpense,
} from "../actions/filters";

class ExpensesListInput extends React.Component {
  state = {
    focused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (focused) => {
    this.setState(() => ({ focused }));
  };
  render() {
    return (
      <div className="columns is-vcentered">
        <div className="column  has-text-right">
          <input
            className="input is-rounded"
            type="search"
            value={this.props.filters.text}
            onChange={(e) => {
              this.props.dispatch(setTextFilter(e.target.value));
            }}
          />
        </div>
        <div
          className="column  is-narrow
         has-text-right"
        >
          <div className="select is-rounded">
            <select
              onChange={(e) => {
                if (e.target.value == "date") {
                  this.props.dispatch(sortByDate());
                } else if (e.target.value == "inc") {
                  this.props.dispatch(sortByIncome());
                } else if (e.target.value == "exp") {
                  this.props.dispatch(sortByExpense());
                } else {
                  this.props.dispatch(sortByAmount());
                }
              }}
            >
              <option value="date">Date</option>
              <option value="amt">Amount</option>
              <option value="inc">Income</option>
              <option value="exp">Expense</option>
            </select>
          </div>
        </div>
        <div className="column  has-text-right">
          <DateRangePicker
            showDefaultInputIcon={true}
            startDate={this.props.filters.startDate}
            startDateId="your_unique_start_date_id"
            showClearDates={true}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            endDateId="your_unique_end_date_id"
            focusedInput={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            displayFormat="Do MMM, YYYY"
            isOutsideRange={(day) => {
              false;
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filter,
  };
};

export default connect(mapStateToProps)(ExpensesListInput);
