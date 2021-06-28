// How Passing Arguments Works: Values vs. Reference
'use strict';
const flight = 'LH234';
const jonas = {
  name: 'vishal',
  passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
};
checkIn(flight,jonas);
console.log(flight);
console.log(jonas);