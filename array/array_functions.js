{
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let newNum = numbers.map(index => index);
    console.log(newNum);
}

// map()	    Creates a new array with transformed elements	                New Array
// filter()	    Creates a new array with elements that pass a test	            New Array
// forEach()	Iterates over elements and performs an action	                undefined
// indexOf()	Finds the index of a specific element	                        Index or -1
// findIndex()	Finds the index of the first element that matches a condition	Index or -1
// includes()	Checks if an array contains a specific value                	true or false
// every()	    Checks if all elements pass a condition	                        true or false
// some()	    Checks if at least one element passes a condition	            true or false


const numbers = [1, 2, 3, 6, 8, 10];

const filteredNumbers = numbers.filter(num => num > 5);       // [6, 8, 10]
const squaredNumbers = filteredNumbers.map(num => num * num); // [36, 64, 100]
const allEven = squaredNumbers.every(num => num % 2 === 0);   // true

console.log(allEven); // true
