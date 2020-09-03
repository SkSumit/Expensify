export default (expenses) => {
  const sum = expenses
    .map((item) => {
      return parseInt(item.amount);
    })
    .reduce((prev, curr) => {
      return prev + curr;
    }, 0);

  return sum;
};
