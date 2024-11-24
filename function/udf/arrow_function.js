let cube = (num) => num * num * num;
console.log(cube(3));

// sum of 1 to n

function sumOfSeries(num) {
  if (num == 0) {
    return 0;
  }
  return num + sumOfSeries(num - 1);
}

console.log(sumOfSeries(5));
