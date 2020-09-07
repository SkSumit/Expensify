import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.scss";
import "normalize.css/normalize.css";

import AppRouter, { history } from "./routers/AppRouter";

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import { startSetExpense } from "./actions/expenses";
import { login, logout } from "./actions/auth";

import { firebase } from "./firebase/firebase";

const store = configureStore();

console.log("Running from script");

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

var appRoot = document.getElementById("app");
ReactDOM.render(<p>LOADING...</p>, appRoot);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, appRoot);
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("Logged In");
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpense()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    console.log("Logged Out");
    renderApp();
    history.push("/");
    store.dispatch(logout());
  }
});
