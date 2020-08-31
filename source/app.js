import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.scss";
import "normalize.css/normalize.css";

import AppRouter from "./routers/AppRouter";

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();
// console.log(store.getState());
// store.dispatch(
//   addExpense({
//     description: "Gas Bill",
//     amount: 1700,
//   })
// );

store.dispatch(
  addExpense({
    description: "Water Bill",
    amount: 350,
    date: 1596263400000,
  })
);
// store.dispatch(
//   addExpense({
//     description: "Rent Bill",
//     amount: 12000,
//     date: 30082020,
//   })
// );

// store.dispatch(setTextFilter("water"));

// const state = store.getState();
// const vExp = getVisibleExpenses(state.expenses, state.filter);
// console.log(vExp);

// console.log(store.getState());
console.log("Running from script");

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

var appRoot = document.getElementById("app");
ReactDOM.render(jsx, appRoot);
