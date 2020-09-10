import { v4 as uuidv4 } from "uuid";
import db from "../firebase/firebase";
import expenses from "../reducers/expenses";

export const addExpense = (expense) => {
  return {
    type: "ADD_EXPENSE",
    expense,
  };
};

export const startAddExpense = ({
  description = "",
  note = "",
  amount = 0,
  date = 0,
  transaction,
} = {}) => {
  return (dispatch, getState) => {
    const expense = { description, note, amount, date, transaction };
    const uid = getState().auth.uid;
    db.ref(`users/${uid}/expenses`)
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

export const removeExpense = ({ id }) => {
  return {
    type: "REMOVE_EXPENSE",
    expense: {
      id: id,
    },
  };
};

export const startRemoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    db.ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

export const editExpense = ({ id }, updates = {}) => {
  return {
    type: "EDIT_EXPENSE",
    id: id,
    updates,
  };
};

export const startEditExpense = ({ id }, updates = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    db.ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense({ id }, updates));
      });
  };
};

export const setExpense = (expense) => {
  return {
    type: "SET_EXPENSE",
    expense,
  };
};

export const startSetExpense = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return db
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then((snapshot) => {
        const expense = [];
        snapshot.forEach((childSnapshot) => {
          expense.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpense(expense));
      });
  };
};
