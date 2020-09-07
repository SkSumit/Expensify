import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogOut } from "../actions/auth";
const Header = (props) => {
  return (
    <div>
      <h3>
        Expensifyy
        <br />
        <NavLink activeClassName="is-active" to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink activeClassName="is-active" to="/add">
          Add Expenses
        </NavLink>
        <button onClick={props.startLogOut}> LogOut</button>
      </h3>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogOut: () => dispatch(startLogOut()),
  };
};

export default connect(undefined, mapDispatchToProps)(Header);
