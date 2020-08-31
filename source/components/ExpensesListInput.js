import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";

import { setTextFilter } from "../actions/filters";
import { sortByDate } from "../actions/filters";
import { sortByAmount, setStartDate, setEndDate } from "../actions/filters";

class ExpensesListInput extends React.Component {
  state = {
    focused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    console.log("DatePicker");
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (focused) => {
    this.setState(() => ({ focused }));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          onChange={(e) => {
            if (e.target.value == "date") {
              this.props.dispatch(sortByDate());
            } else {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amt">Amount</option>
        </select>
        <br />
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filter,
  };
};

export default connect(mapStateToProps)(ExpensesListInput);
