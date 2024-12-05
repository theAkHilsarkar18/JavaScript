// Array Methods
// 1. push()
// Adds one or more elements to the end of an array and returns the new length of the array.
// array.push(element1, element2, ..., elementN)
{
    let fruits = ['Apple', 'Banana'];
    fruits.push('Mango');  // Adds 'Mango' at the end
    console.log(fruits);   // ['Apple', 'Banana', 'Mango']
}


// 2. pop()
// Removes the last element from an array and returns that element.
// array.pop()
{
    let fruits = ['Apple', 'Banana', 'Mango'];
    let lastFruit = fruits.pop();  // Removes 'Mango'
    console.log(lastFruit);        // 'Mango'
    console.log(fruits);           // ['Apple', 'Banana']
}

// 3. shift()
// Removes the first element from an array and returns that element. This changes the length of the array.
// array.shift()
{

    let fruits = ['Apple', 'Banana', 'Mango'];
    let firstFruit = fruits.shift();  // Removes 'Apple'
    console.log(firstFruit);          // 'Apple'
    console.log(fruits);

}

// 4. unshift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.
// array.unshift(element1, element2, ..., elementN)

{
    let fruits = ['Banana', 'Mango'];
    fruits.unshift('Apple');  // Adds 'Apple' at the beginning
    console.log(fruits);      // ['Apple', 'Banana', 'Mango']
}


// 5. splice()
// Changes the contents of an array by removing, replacing, or adding elements.
// array.splice(start, deleteCount, item1, item2, ..., itemN)

// start: The index at which to start changing the array.
// deleteCount: The number of elements to remove.
// item1, item2, ..., itemN: Elements to add to the array (optional).

// Example 1: Remove Elements

{
    let fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
    fruits.splice(1, 2);  // Removes 2 elements starting from index 1 ('Banana', 'Mango')
    console.log(fruits);  // ['Apple', 'Orange']
}

// Example 2: Add Elements

{
    let fruits = ['Apple', 'Orange'];
    fruits.splice(1, 0, 'Banana', 'Mango', 'Kiwi');  // Adds 'Banana' and 'Mango' at index 1
    console.log(fruits);  // ['Apple', 'Banana', 'Mango', 'Orange']
}


// Example 3: Replace Elements
{
    let fruits = ['Apple', 'Banana', 'Orange'];
    fruits.splice(1, 1, 'Mango');  // Replaces 'Banana' with 'Mango'
    console.log(fruits);           // ['Apple', 'Mango', 'Orange']
}



