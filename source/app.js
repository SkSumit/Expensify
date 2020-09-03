import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.scss";
import "normalize.css/normalize.css";

import AppRouter from "./routers/AppRouter";

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import { addExpense } from "./actions/expenses";

import moment from "moment";
import "./firebase/firebase";

const store = configureStore();

// store.dispatch(
//   addExpense({
//     description: "Water Bill",
//     amount: 30,
//     date: moment(),
//   })
// );
// store.dispatch(
//   addExpense({
//     description: "Water2 Bill",
//     amount: 120000,
//     date: moment(),
//   })
// );
// store.dispatch(
//   addExpense({
//     description: "Water3 Bill",
//     amount: 50,
//     date: moment(),
//   })
// );

console.log("Running from script");

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

var appRoot = document.getElementById("app");
ReactDOM.render(jsx, appRoot);
