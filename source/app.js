import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.scss";
import "normalize.css/normalize.css";

import AppRouter from "./routers/AppRouter";

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import { startSetExpense } from "./actions/expenses";

import moment from "moment";
import "./firebase/firebase";

const store = configureStore();

console.log("Running from script");

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

var appRoot = document.getElementById("app");
ReactDOM.render(<p>LOADING...</p>, appRoot);
store.dispatch(startSetExpense()).then(() => {
  ReactDOM.render(jsx, appRoot);
});
