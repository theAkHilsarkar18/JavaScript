let num = 2569;
let count = 0;

while (num > 0) {
  num = Math.floor(num / 10); // to get integer division
  //   console.log(num);
  count++;
}

console.log("Total Digit is " + count);
