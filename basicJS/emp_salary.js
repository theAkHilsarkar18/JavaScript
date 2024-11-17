let salary = 15000;
let hra = 10;
let da = 5;
let ta = 3;
let gross_salary;

hra = (salary * hra) / 100;
da = (salary * da) / 100;
ta = (salary * ta) / 100;

gross_salary = salary + hra + da + ta;

console.log("Your gross salary : " + gross_salary + "/-");
