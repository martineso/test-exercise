import Math from "./math.ts.tmp";

describe("Math", () => {
  it("Sum action", () => {
    const queue = new Math(10);
    queue.calc('sum', 1);
    expect(queue.getCurrentValue()).toEqual(11);
  });

  it("Many actions", () => {
    const queue = new Math(-1);
    queue.calc('sum', -1);
    queue.calc('multiple', -1);
    queue.calc('divide', 2);
    expect(queue.getCurrentValue()).toEqual(1);
  });
});
