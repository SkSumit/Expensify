import React from "react";
import { Router, Route, Switch, useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";

import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import ExpenseAddPage from "../components/ExpenseAddPage.js";
import EditPage from "../components/EditPage";

import Page404 from "../components/Page404";
import Login from "../components/Login";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRoutes = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={Login} exact={true} />
      <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
      <PrivateRoute path="/add" component={ExpenseAddPage} />
      <PrivateRoute path="/edit/:id" component={EditPage} />

      <PublicRoute component={Page404} />
    </Switch>
  </Router>
);

export default AppRoutes;
