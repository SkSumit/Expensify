import { addExpense, removeExpense, editExpense } from "../../actions/expenses";
test("Remove Expense", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    expense: {
      id: "123",
    },
  });
});

test("Edit Expense", () => {
  const action = editExpense({ id: "123" }, { note: "LOLWA" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: { note: "LOLWA" },
  });
});
