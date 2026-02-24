import { getUsername } from "./user";

test("returns username when valid input is given", () => {
  expect(getUsername("Ashaf")).toBe("Ashaf");
  expect(getUsername(null)).toBe("guest");
  expect(getUsername("")).toBe("guest");
});
