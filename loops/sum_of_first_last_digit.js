let num = 2011;
let last = num % 10;
let first;

do {
  num = Math.floor(num / 10);
} while (num > 9);

first = num;
console.log("First Digit : " + first);
console.log("Last Digit : " + last);
console.log("Sum : ", first + last);
