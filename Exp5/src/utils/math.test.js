import { add } from "./math";

test("add function", () => {
  expect(add(2, 3)).toBe(5);
  expect(add(3, 3)).toBe(6);
});
