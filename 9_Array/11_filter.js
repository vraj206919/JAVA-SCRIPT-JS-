// Filter Means When the condition was satsified So this create A new array .

// 1. Example of filter

const number = [1, 2, 30, 4, 50];

console.log(number);

const evenNumber = number.filter((number) => number % 2 === 0);

console.log("even number: ", evenNumber);

// 2. Example Of filter

const number1 = [5, 12, 8, 20, 3, 15];

const greaterThanTen = number1.filter((num) => num > 10);

console.log("Numbers greater than 10:", greaterThanTen);

// 3. Example of filter

const fruits = ["apple", "kiwi", "banana", "fig", "mango"];

const longFruits = fruits.filter((fruit) => fruit.length > 4);

console.log("Long fruits:", longFruits);

// 4. Example of filter

const ages = [12, 18, 25, 16, 30];

const adults = ages.filter((age) => age >= 18);

console.log("Adults:", adults);

// 5. Example of filter

const numbers = [-5, 10, -2, 20, 0, 15];

const positiveNumbers = numbers.filter((num) => num > 0);

console.log("Positive numbers:", positiveNumbers);