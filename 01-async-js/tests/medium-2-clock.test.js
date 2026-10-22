const { format24Hour, format12Hour, startClock } = require("../medium/2-clock");

describe("medium/2-clock", () => {
  describe("format24Hour", () => {
    test("formats afternoon time correctly (HH:MM:SS)", () => {
      const date = new Date(2026, 0, 1, 13, 45, 23);
      expect(format24Hour(date)).toBe("13:45:23");
    });

    test("pads single digit hours, minutes, and seconds with zero", () => {
      const date = new Date(2026, 0, 1, 9, 5, 3);
      expect(format24Hour(date)).toBe("09:05:03");
    });

    test("formats midnight correctly as 00:00:00", () => {
      const date = new Date(2026, 0, 1, 0, 0, 0);
      expect(format24Hour(date)).toBe("00:00:00");
    });

    test("formats late night 23:59:59", () => {
      const date = new Date(2026, 0, 1, 23, 59, 59);
      expect(format24Hour(date)).toBe("23:59:59");
    });
  });

  describe("format12Hour", () => {
    test("formats afternoon time with PM (HH:MM:SS PM)", () => {
      const date = new Date(2026, 0, 1, 13, 45, 23);
      expect(format12Hour(date)).toBe("01:45:23 PM");
    });

    test("formats morning time with AM (HH:MM:SS AM)", () => {
      const date = new Date(2026, 0, 1, 9, 5, 23);
      expect(format12Hour(date)).toBe("09:05:23 AM");
    });

    test("formats midnight (00:00:00) as 12:00:00 AM", () => {
      const date = new Date(2026, 0, 1, 0, 0, 0);
      expect(format12Hour(date)).toBe("12:00:00 AM");
    });

    test("formats noon (12:00:00) as 12:00:00 PM", () => {
      const date = new Date(2026, 0, 1, 12, 0, 0);
      expect(format12Hour(date)).toBe("12:00:00 PM");
    });

    test("formats 11:59:59 PM", () => {
      const date = new Date(2026, 0, 1, 23, 59, 59);
      expect(format12Hour(date)).toBe("11:59:59 PM");
    });

    test("formats 11:59:59 AM", () => {
      const date = new Date(2026, 0, 1, 11, 59, 59);
      expect(format12Hour(date)).toBe("11:59:59 AM");
    });
  });

  describe("startClock", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.clearAllTimers();
      jest.useRealTimers();
    });

    test("ticks every second and calls callback with time formats", () => {
      const onTick = jest.fn();
      const clock = startClock(onTick);

      expect(onTick).not.toHaveBeenCalled();

      jest.advanceTimersByTime(1000);
      expect(onTick).toHaveBeenCalledTimes(1);
      expect(onTick).toHaveBeenCalledWith(
        expect.objectContaining({
          time24: expect.stringMatching(/^\d{2}:\d{2}:\d{2}$/),
          time12: expect.stringMatching(/^\d{2}:\d{2}:\d{2} (AM|PM)$/),
        })
      );

      jest.advanceTimersByTime(2000);
      expect(onTick).toHaveBeenCalledTimes(3);

      if (clock && typeof clock.stop === "function") {
        clock.stop();
      }
    });

    test("stops updating when stopped", () => {
      const onTick = jest.fn();
      const clock = startClock(onTick);

      jest.advanceTimersByTime(1000);
      expect(onTick).toHaveBeenCalledTimes(1);

      if (clock && typeof clock.stop === "function") {
        clock.stop();
      }

      jest.advanceTimersByTime(2000);
      expect(onTick).toHaveBeenCalledTimes(1);
    });
  });
});
