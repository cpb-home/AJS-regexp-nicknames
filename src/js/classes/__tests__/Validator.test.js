import Validator from "../Validator";

test("right login", () => {
  const result = Validator.validateUsername("aaBB88-_");

  expect(result).toBe("login accessed");
});

test("wrong login", () => {
  const result = Validator.validateUsername("aaBB.88-_");

  expect(result).toBe("bad login");
});