// map mean in java script Operation of all element and give new array.

// 1. Example of map

let numbers = [1, 2, 3, 4, 5];

console.log("number: ", numbers);

let newNumberArray = numbers.map((number) => number * 5);

console.log("New number array : ", newNumberArray);

// 2. Example 

let numbers1 = [1, 2, 3, 4, 5];

console.log("number:", numbers1);

let newNumberArray2 = numbers1.map((number1) => number1 * 2);

console.log("New number array : ", newNumberArray2);

// 3. Example

let fruits = ["apple", "banana", "mango"];

let upperFruits = fruits.map((fruit) => fruit.toUpperCase());

console.log("Uppercase fruits:", upperFruits);

// 4. Example

let users = [
  { id: 1, name: "Rutik" },
  { id: 2, name: "Vraj" },
  { id: 3, name: "Tirth" }
];

let names = users.map((user) => user.name);

console.log("Names:", names);

// 5.Exaple

let names1 = ["Rutik", "Vraj", "Tirth"];

let lowerNames = names1.map(name => name.toLowerCase());

console.log(lowerNames);

// 6. Example

let names2 = ["Baggo","Sailesh","Nagindip"];

let uppername = names2.map(name1 => name1.toUpperCase());

console.log(uppername);