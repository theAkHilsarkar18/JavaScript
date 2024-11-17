let n = 20;
// for loop
for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log();
// while loop
let i = 0;
while (i <= n) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}
console.log();
// do...while loop
i = 0;
do {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
} while (i <= n);
