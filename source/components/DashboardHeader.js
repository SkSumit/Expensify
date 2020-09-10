import React from "react";
import { connect } from "react-redux";
import { giveUserNames } from "../actions/auth";
import { NavLink } from "react-router-dom";

const DashboardHeader = (props) => {
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8">
            <h1 className="title">
              {props.giveUserNames.displayName &&
                props.giveUserNames.displayName}
              's Savvings
            </h1>
            <div className="columns ">
              <div className="column is-narrow">
                <NavLink activeClassName="is-active" to="/expense">
                  <button className="button is-rounded has-background-danger has-text-white  ">
                    Add Expenses
                  </button>
                </NavLink>
              </div>
              <div className="column is-narrow">
                <NavLink activeClassName="is-active" to="/income">
                  <button className="button  is-rounded has-background-success has-text-white ">
                    Add Income{" "}
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    giveUserNames: giveUserNames(),
  };
};

export default connect(mapStateToProps)(DashboardHeader);
