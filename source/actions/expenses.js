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
} = {}) => {
  return (dispatch) => {
    const expense = { description, note, amount, date };
    db.ref("expenses")
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
  return (dispatch) => {
    db.ref(`expenses/${id}`)
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
  return (dispatch) => {
    console.log(id);
    db.ref(`expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense({ id }, updates));
      });
  };
};
