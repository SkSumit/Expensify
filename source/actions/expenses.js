import { v4 as uuidv4 } from "uuid";

export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  date = 0,
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      description: description,
      note: note,
      amount: amount,
      date: date,
      id: uuidv4(),
    },
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
export const editExpense = ({ id }, updates = {}) => {
  return {
    type: "EDIT_EXPENSE",
    id: id,
    updates,
  };
};
