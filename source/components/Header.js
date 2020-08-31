import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h3>
        Expensifyy
        <br />
        <NavLink activeClassName="is-active" to="/add">
          Add Expenses
        </NavLink>
        <NavLink activeClassName="is-active" to="/edit">
          Edit
        </NavLink>
        <NavLink activeClassName="is-active" to="/help">
          Help
        </NavLink>
        <NavLink activeClassName="is-active" to="/">
          Home
        </NavLink>
      </h3>
    </div>
  );
};

export default Header;
