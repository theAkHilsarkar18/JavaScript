// Rest and Spread Operators (...)
// The ... operator is used for both rest and spread functionality depending on where it is used.

// Rest Operator
// The rest operator collects multiple elements into a single array or object.

// Collect remaining array elements
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]

// Collect remaining object properties
const person = {
    name: 'John',
    age: 30,
    email: 'john@gmail.com',
};

const { name, ...others } = person;
console.log(others); // { age: 30 }


// Spread Operator
// The spread operator expands arrays or objects.

// Expanding arrays
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

// Expanding objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }


// Template Literals
// Template literals provide an easier way to create strings and include dynamic values using backticks (`).

const fname = 'Alice';
const message = `Hello, ${fname}!`;  // Template literal
console.log(message); // Hello, Alice!

const multiLine = `This is
a multi-line
string.`;
console.log(multiLine);




