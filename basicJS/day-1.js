// Operators in JS

// Assignment Operator : +=,-=,*=,/=

let num1 = 100;
let num2 = 200;

num2 += num1;
num1 -= 10;
num1 *= 2;
num2 /= 2;

// Arithmatic Operator : +,-,*,/,%
console.log("Arithmatic Operator : +,-,*,/,%\n");
console.log("num1 + num2 = ", num1 + num2);
console.log("num1 - num2 = ", num1 - num2);
console.log("num1 * num2 = ", num1 * num2);
console.log("num1 / num2 = ", num1 / num2);
console.log("num1 % num2 = ", 12 % 2);

// Relational Operator : >,<,>=,<=,==,!=
console.log("\nRelational Operator : >,<,>=,<=,==,!=\n");
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 != num2);

// Logical Operator : &&,||,!
console.log("\nLogical Operator : &&,||,!\n");
console.log(num1 > num2 && num1 < num2);
console.log(num1 > num2 || num1 < num2);
console.log(!(num1 != num2));
