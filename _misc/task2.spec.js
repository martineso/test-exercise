import Math from "./math.ts.tmp";

describe("Callbacks", () => {
  it("Calc with function", () => {
    const queue = new Math(2);
    queue.calc('callback', (state) => state + state * state);
    expect(queue.getCurrentValue()).toEqual(6);
    queue.calc('callback', (value) => {
      return value + 1.22 | 0;
    });
    expect(queue.getCurrentValue()).toEqual(7);
  });
});
