export default (expenses) => {
  const sum = expenses
    .map((item) => item.amount)
    .reduce((prev, curr) => prev + curr, 0);

  return sum;
};
