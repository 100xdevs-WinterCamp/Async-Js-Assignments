const createTimeoutCounter = require("../easy/2-counter");

describe("easy/2-counter (without setInterval / using setTimeout)", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test("does NOT use setInterval", () => {
    const setIntervalSpy = jest.spyOn(global, "setInterval");
    const counter = createTimeoutCounter();

    expect(setIntervalSpy).not.toHaveBeenCalled();

    if (counter && typeof counter.stop === "function") {
      counter.stop();
    }
    setIntervalSpy.mockRestore();
  });

  test("uses setTimeout to increment every second", () => {
    const setTimeoutSpy = jest.spyOn(global, "setTimeout");
    const onTick = jest.fn();
    const counter = createTimeoutCounter(onTick);

    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 1000);

    jest.advanceTimersByTime(1000);
    expect(onTick).toHaveBeenCalledTimes(1);
    expect(onTick).toHaveBeenLastCalledWith(1);

    jest.advanceTimersByTime(2000);
    expect(onTick).toHaveBeenCalledTimes(3);
    expect(onTick).toHaveBeenLastCalledWith(3);

    if (counter && typeof counter.stop === "function") {
      counter.stop();
    }
    setTimeoutSpy.mockRestore();
  });

  test("stops incrementing after stop is called", () => {
    const onTick = jest.fn();
    const counter = createTimeoutCounter(onTick);

    jest.advanceTimersByTime(2000);
    expect(onTick).toHaveBeenCalledTimes(2);

    if (counter && typeof counter.stop === "function") {
      counter.stop();
    }

    jest.advanceTimersByTime(3000);
    expect(onTick).toHaveBeenCalledTimes(2);
  });
});
