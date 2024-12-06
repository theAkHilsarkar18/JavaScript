// ### **Basic Calculations on Arrays in JavaScript**

// Here are some common operations for performing basic calculations on arrays:

// ---

// ### **1. Find the Sum of Elements**
// To calculate the sum of all elements in an array.

// #### **Code Example:**
// Using a `for` loop:
// ```javascript
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log("Sum:", sum); // Output: 15
// ```

// Using the `reduce()` method:
// ```javascript
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log("Sum:", sum); // Output: 15
// ```

// ---

// ### **2. Find the Average**
// To calculate the average value of elements in an array.

// #### **Code Example:**
// ```javascript
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// const average = sum / numbers.length;

// console.log("Average:", average); // Output: 3
// ```

// ---

// ### **3. Find the Maximum Value**
// To find the largest number in an array.

// #### **Code Example:**
// Using a `for` loop:
// ```javascript
// const numbers = [1, 2, 3, 4, 5];
// let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// console.log("Max:", max); // Output: 5
// ```

// Using the `Math.max()` function:
// ```javascript
// const numbers = [1, 2, 3, 4, 5];
// const max = Math.max(...numbers);

// console.log("Max:", max); // Output: 5
// ```

// ---

// ### **4. Find the Minimum Value**
// To find the smallest number in an array.

// #### **Code Example:**
// Using a `for` loop:
// ```javascript
// const numbers = [1, 2, 3, 4, 5];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log("Min:", min); // Output: 1
// ```

// Using the `Math.min()` function:
// ```javascript
// const numbers = [1, 2, 3, 4, 5];
// const min = Math.min(...numbers);

// console.log("Min:", min); // Output: 1
// ```

// ---

// ### **5. Count Specific Values**
// To count how many times a specific value appears in an array.

// #### **Code Example:**
// ```javascript
// const numbers = [1, 2, 2, 3, 4, 2, 5];
// const target = 2;

// const count = numbers.filter(num => num === target).length;

// console.log(`Count of ${target}:`, count); // Output: 3
// ```

// ---

// ### **6. Find Even or Odd Numbers**
// Separate even and odd numbers from an array.

// #### **Code Example:**
// ```javascript
// const numbers = [1, 2, 3, 4, 5];
// const evens = numbers.filter(num => num % 2 === 0);
// const odds = numbers.filter(num => num % 2 !== 0);

// console.log("Evens:", evens); // Output: [2, 4]
// console.log("Odds:", odds);   // Output: [1, 3, 5]
// ```

// ---

// ### **7. Sort an Array**
// To arrange the elements in ascending or descending order.

// #### **Code Example:**
// Ascending Order:
// ```javascript
// const numbers = [5, 3, 8, 1, 4];
// numbers.sort((a, b) => a - b);

// console.log("Ascending:", numbers); // Output: [1, 3, 4, 5, 8]
// ```

// Descending Order:
// ```javascript
// const numbers = [5, 3, 8, 1, 4];
// numbers.sort((a, b) => b - a);

// console.log("Descending:", numbers); // Output: [8, 5, 4, 3, 1]
// ```

// ---

// ### **8. Multiply All Elements**
// To multiply all elements of an array.

// #### **Code Example:**
// Using `for` loop:
// ```javascript
// const numbers = [1, 2, 3, 4];
// let product = 1;

// for (let i = 0; i < numbers.length; i++) {
//   product *= numbers[i];
// }

// console.log("Product:", product); // Output: 24
// ```

// Using `reduce()`:
// ```javascript
// const numbers = [1, 2, 3, 4];
// const product = numbers.reduce((acc, curr) => acc * curr, 1);

// console.log("Product:", product); // Output: 24
// ```

// ---

// ### **9. Remove Duplicates**
// To remove duplicate values from an array.

// #### **Code Example:**
// ```javascript
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = [...new Set(numbers)];

// console.log("Unique Numbers:", uniqueNumbers); // Output: [1, 2, 3, 4, 5]
// ```

// ---

// ### **10. Reverse an Array**
// To reverse the elements in an array.

// #### **Code Example:**
// ```javascript
// const numbers = [1, 2, 3, 4, 5];
// const reversed = numbers.reverse();

// console.log("Reversed:", reversed); // Output: [5, 4, 3, 2, 1]
// ```

// ---

// ### Summary Table

// | **Operation**          | **Method**                     | **Output Example**             |
// |-------------------------|---------------------------------|---------------------------------|
// | Sum                    | `reduce()` or `for`            | `15`                           |
// | Average                | `reduce()`                     | `3`                            |
// | Max Value              | `Math.max()` or `for`          | `5`                            |
// | Min Value              | `Math.min()` or `for`          | `1`                            |
// | Count Specific Value   | `filter()`                     | `3`                            |
// | Find Even/Odd          | `filter()`                     | `[2, 4]` / `[1, 3, 5]`         |
// | Sort Ascending/Descend | `sort()`                       | `[1, 2, 3]` / `[3, 2, 1]`      |
// | Remove Duplicates      | `Set`                          | `[1, 2, 3]`                    |
// | Reverse                | `reverse()`                    | `[5, 4, 3, 2, 1]`              |

// ---

// These examples cover basic calculations for arrays in JavaScript. Let me know if you'd like more examples or explanations!