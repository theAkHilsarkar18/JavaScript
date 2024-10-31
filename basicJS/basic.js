// to print messasge in console :
// console.log("Hello Akhil");

// to print message in web page :
// document.write("Hello Akhil");

// variables in JS :
// variables are container which can store a value and also we can change it

// we can declare variable using var,let and const keyword
// var : we can redefine, we can change and global scope
// let : we cant redefine, we can change and in local scope
// const : we cant redefine, we cant change and local scope

// -----------var----------------
// var userName = "@theakhilsarkar";
// console.log(userName);
// var userName = "@18hetal"; // redefined and changed
// console.log(userName);

//---------------let---------------
// {
//   let userName = "@theakhillsarkar";
//   let age = 22;

//   console.log(userName);
//   console.log(age);

//      let userName = "@radha"; // we cant do this
// }
//  above and bellow both are defferent scope, boundary are {}
// {
//   let userName = "@18hetals";
//   let age = 20;
//   console.log(userName);
//   console.log(age);
// }

//-------const-------------------
// {
//   const userName = "@theakhilsarkar";
//   console.log(userName);
//   userName = "@18hetals"; // we cant assign new value too the const varibale.
//   console.log(userName);
// }

// Datatypes in JS

// premetive datatypes : numbers, string, boolean, bigInt,Symbol,
// non - premetive datatypes : object or collection

// {
//   let age = 22;
//   let price = 900.94;
//   let title = "Igon Mouse Pack";
//   let isFollow = false;
//   let phone = BigInt("9825486060");
//   let symbol = Symbol("@#$%^0");

//   console.log(title);
//   console.log(age);
//   console.log(price);
//   console.log(isFollow);
//   console.log(phone);
//   console.log(symbol);
// }

// let value = null; // value is null
// let value2 = undefined; // value is undefined
// let value3; // also value is undefined
// console.log(value);
// console.log(value2);
// console.log(value3);

// typeof keyword to know datatype of variables

// {
//   let age = 22;
//   let price = 900.94;
//   let title = "Igon Mouse Pack";
//   let isFollow = false;
//   let phone = BigInt("9825486060");
//   let symbol = Symbol("@#$%^0");
//   let value = null; // value is null
//   let value2 = undefined; // value is undefined
//   let value3; // also value is undefined

//   console.log(typeof title);
//   console.log(typeof age);
//   console.log(typeof price);
//   console.log(typeof isFollow);
//   console.log(typeof phone);
//   console.log(typeof symbol);
//   console.log(typeof value);
//   console.log(typeof value1);
//   console.log(typeof value2);
//   console.log(typeof value3);
// }
