let num1 = 10;
let num2 = 20;
let temp;

console.log("Mehthod - 1");
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log("num1 = " + num1);
console.log("num2 = " + num2);

console.log("\nMethod - 2");
num1 = num1 * num2;
num2 = num1 / num2;
num1 = num1 / num2;
console.log("num1 = " + num1);
console.log("num2 = " + num2);

console.log("\nMethod - 3");
temp = num1;
num1 = num2;
num2 = temp;
console.log("num1 = " + num1);
console.log("num2 = " + num2);
