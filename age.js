let userInput = prompt(
  "Enter a birthday in the format: YYYY-MM-DD, to calculate the age!"
);

let minute = 1000 * 60;
let hour = minute * 60;
let day = hour * 24;
let year = day * 365;
let age = (Date.now() - Date.parse(userInput)) / year;

alert("The age is: " + age);
