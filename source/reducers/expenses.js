// import db from "../firebase/firebase";
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_EXPENSE":
      return action.expense;
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter((item) => item.id !== action.expense.id);
    case "EDIT_EXPENSE":
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            ...action.updates,
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
