const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
// console.log(items)

let futureDate = new Date(2024, 3, 8, 9, 30); // Year , Month , Date , Hours , Minutes
// console.log(futureDate);

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${year} ${hour}:${minute}am`;