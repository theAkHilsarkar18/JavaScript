let num1 = 10;
let num2 = 200;
let num3 = 30;

// Using Nested IF-ELSE

if (num1 > num2) {
  if (num1 > num3) {
    console.log("num1 is maximum");
  } else {
    console.log("num3 is maximum");
  }
} else {
  if (num2 > num3) {
    console.log("num2 is maximum");
  } else {
    console.log("num3 is maximum");
  }
}

// Using Ladder ELSE-IF

if (num1 > num2 && num1 > num3) {
  console.log("num1 is maximum");
} else if (num2 > num3 && num2 > num1) {
  console.log("num2 is maximum");
} else {
  console.log("num3 is maximum");
}
