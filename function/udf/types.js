// simple function
function print() {
  console.log("Simple Function !");
}
// parameterized function
function sum(num1, num2) {
  console.log("Sum is ", num1 + num2);
}
// return function
function cube(num) {
  return num * num * num;
}

print();
sum(10, 20);
let c = cube(2);
console.log("Cube is ", c);
