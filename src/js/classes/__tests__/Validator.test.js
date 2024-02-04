import Validator from "../Validator";

test("right login", () => {
  const result = Validator.validateUsername("aaBB88-fdgew");

  expect(result).toBe("login accessed");
});

test("wrong login _ in the end", () => {
  const result = Validator.validateUsername("aaBB.88-_");

  expect(result).toBe("bad login");
});

test("wrong login digit in the end", () => {
  const result = Validator.validateUsername("aaBB.88-3");

  expect(result).toBe("bad login");
});

test("wrong login digit in the begining", () => {
  const result = Validator.validateUsername("3aaBB.88-f");

  expect(result).toBe("bad login");
});

test("wrong login - in the begining", () => {
  const result = Validator.validateUsername("-aaBB.88-k");

  expect(result).toBe("bad login");
});

test("wrong login 4 digits", () => {
  const result = Validator.validateUsername("aa4567BB.88-_");

  expect(result).toBe("bad login");
});