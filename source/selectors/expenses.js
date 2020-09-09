import moment from "moment";

const getVisibleExpenses = (expenses, filter) => {
  return expenses
    .filter((expense) => {
      const DateMoment = moment(expense.date);
      const startDateMatch = filter.startDate
        ? filter.startDate.isSameOrBefore(DateMoment, "day")
        : true;

      const endDateMatch = filter.endDate
        ? filter.endDate.isSameOrAfter(DateMoment, "day")
        : true;

      const textMatch = expense.description
        .toLowerCase()
        .includes(filter.text.toLowerCase());

      const incomeMatch =
        filter.sortBy === "inc"
          ? filter.sortBy === "inc" && expense.transaction === "income"
          : true;
      const expenseMatch =
        filter.sortBy === "exp"
          ? filter.sortBy === "exp" && expense.transaction === "expense"
          : true;

      return (
        startDateMatch &&
        endDateMatch &&
        textMatch &&
        incomeMatch &&
        expenseMatch
      );
    })
    .sort((a, b) => {
      if (filter.sortBy === "date") {
        return a.date < b.date ? 1 : -1;
      } else if (filter.sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

export default getVisibleExpenses;
