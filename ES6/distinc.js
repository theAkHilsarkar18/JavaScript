
//1. Destructuring Assignment
// Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.
{

    const numbers = [1, 2, 3];
    const [first, second, third] = numbers;

    console.log(first); // 1
    console.log(second); // 2
    console.log(third); // 3

}

//You can skip elements or provide default values:
{
    const [a, , c = 10] = [5, 6];
    console.log(a); // 5
    console.log(c); // 10 (default)

}

//Object Destructuring

{
    const person = {
        name: 'John',
        age: 30,
    };

    const { name, age } = person;
    console.log(name); // 'John'
    console.log(age);  // 30
    // You can also rename variables while destructuring:

    const { name: fullName } = person;
    console.log(fullName); // 'John'
}
