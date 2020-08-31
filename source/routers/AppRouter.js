import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import ExpenseAddPage from "../components/ExpenseAddPage.js";
import EditPage from "../components/EditPage";
import HelpPage from "../components/HelpPage";
import Page404 from "../components/Page404";

const AppRoutes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/add" component={ExpenseAddPage} />

      <Route path="/edit/:id" component={EditPage} />

      <Route path="/help" component={HelpPage} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
