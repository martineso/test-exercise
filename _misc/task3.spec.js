import Math from "./math.ts.tmp";

describe("Callbacks", () => {
  it("Add callbacks", () => {
    const queue = new Math(1);

    const callback1 = (value) => ++value
    const callback2 = (value) => ++value

    queue.addListener(callback1);
    queue.addListener(callback2);

    queue.calc('sum', 1);
    expect(queue.getCurrentValue()).toEqual(4);
  });

  it("Remove callbacks", () => {
    const queue = new Math(1);

    const callback1 = (value) => ++value
    const callback2 = (value) => --value

    queue.addListener(callback1);
    queue.addListener(callback2);

    queue.calc('sum', 1);
    expect(queue.getCurrentValue()).toEqual(2);

    queue.removeListener(callback2);
    queue.calc('sum', 1);
    expect(queue.getCurrentValue()).toEqual(4);

    queue.removeListener(callback1);
    queue.calc('sum', 1);
    expect(queue.getCurrentValue()).toEqual(5);
  });
});
