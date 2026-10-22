/*
  Using `1-counter` or `2-counter` from the easy section, can you create a
  clock that shows you the current machine time?

  Can you make it so that it updates every second, and shows time in the following formats - 

   - HH:MM:SS (Eg. 13:45:23)

   - HH:MM:SS AM/PM (Eg 01:45:23 PM)

  Function requirements:
  - `format24Hour(date)`: Takes a Date object (defaults to `new Date()`) and returns time formatted as 24-hour string "HH:MM:SS" with zero padding.
  - `format12Hour(date)`: Takes a Date object (defaults to `new Date()`) and returns time formatted as 12-hour string "HH:MM:SS AM" or "HH:MM:SS PM" with zero padding.
  - `startClock(onTick)`: Starts an interval updating every 1000ms, calls `onTick({ time24, time12, date })` every second, and returns an object with a `stop()` method to clear the interval.

  Once you've implemented the logic, test your code by running:
  - `npm run test:medium-2`
*/

function format24Hour(date = new Date()) {

}

function format12Hour(date = new Date()) {

}

function startClock(onTick) {

}

module.exports = {
  format24Hour,
  format12Hour,
  startClock,
};
