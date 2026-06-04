// 1. String
let name = "VRAJ";
console.log(name);

console.log("type of name is :", typeof name);

name = "vraj";
console.log(name);

// 2. Number
let number = 10;

console.log("Number Value:", number);
console.log("type of number is :", typeof number);

number = 20;
console.log("Number Value:", number);
console.log("type of number is :", typeof number);

// 3. Boolean
let Answer = true;

console.log("Answer:", Answer);
console.log("type of Answer is :", typeof Answer);

Answer = false;
console.log("Answer:", Answer);
console.log("type of Answer is :", typeof Answer);

// 4. Undefined
let a;
console.log("a value:", a);
console.log("type of a :", typeof a);

let b = undefined;
console.log("b value:", b);
console.log("type of b :", typeof b);

// 5. Null
let marks = null;

console.log("marks:", marks);
console.log("type of marks :", typeof marks);

// 6. BigInt
let BigNumber = 215215215215215215215215n;

console.log("Big Number:", BigNumber);
console.log("type of BigNumber :", typeof BigNumber);

// 7. Symbol
let id = Symbol("id");

console.log("id:", id);
console.log("type of id :", typeof id);

// 8. Object
let person = {
    name: "Alice",
    age: 25
};

console.log("person:", person);
console.log("type of person :", typeof person);

// 9. Array
let fruits = ["apple", "banana", "mango."];

console.log("fruits items are:", fruits);
console.log("type of fruits :", typeof fruits);
console.log("Is fruits an array? :", Array.isArray(fruits));