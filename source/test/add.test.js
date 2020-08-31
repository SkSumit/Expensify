const greeet = (name) => `Hey tester ${name}`;

test("greeting tester", () => {
  const result = greeet("sumit");
  expect(result).toBe("Hey tester sumit");
});
