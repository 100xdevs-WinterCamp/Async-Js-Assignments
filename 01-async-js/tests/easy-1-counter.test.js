const createCounter = require("../easy/1-counter");

describe("easy/1-counter (setInterval)", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test("uses setInterval with a 1000ms interval", () => {
    const setIntervalSpy = jest.spyOn(global, "setInterval");
    const counter = createCounter();

    expect(setIntervalSpy).toHaveBeenCalledWith(expect.any(Function), 1000);

    if (counter && typeof counter.stop === "function") {
      counter.stop();
    }
    setIntervalSpy.mockRestore();
  });

  test("increments counter on every second and triggers callback", () => {
    const onTick = jest.fn();
    const counter = createCounter(onTick);

    expect(onTick).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1000);
    expect(onTick).toHaveBeenCalledTimes(1);
    expect(onTick).toHaveBeenLastCalledWith(1);

    jest.advanceTimersByTime(1000);
    expect(onTick).toHaveBeenCalledTimes(2);
    expect(onTick).toHaveBeenLastCalledWith(2);

    jest.advanceTimersByTime(3000);
    expect(onTick).toHaveBeenCalledTimes(5);
    expect(onTick).toHaveBeenLastCalledWith(5);

    if (counter && typeof counter.stop === "function") {
      counter.stop();
    }
  });

  test("stops incrementing when stop method is called", () => {
    const onTick = jest.fn();
    const counter = createCounter(onTick);

    jest.advanceTimersByTime(2000);
    expect(onTick).toHaveBeenCalledTimes(2);

    if (counter && typeof counter.stop === "function") {
      counter.stop();
    }

    jest.advanceTimersByTime(3000);
    expect(onTick).toHaveBeenCalledTimes(2);
  });
});
