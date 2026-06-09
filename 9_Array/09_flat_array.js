// 1. flat nesting parent 

let number1 = [100,200,300,400,500,[600,700,[800,900[1000]]]]

console.log("number :",number1);

console.log("use for flat :",number1.flat());
console.log("multiple number in nested :",number1.flat(2))

let number2 = [10,20,30,40,50,[60,70,[80,90,[100,200,[300,[400,[500,[600,[700]]]]]]]]];

console.log("i not have number :",number2.flat(Infinity));

// 2. flat nesting parent

let fruits = ["Apple", "Banana", ["Mango", "Orange"], ["Grapes", "Kiwi"]];

console.log("Original Array :", fruits);
console.log("Flat Level 1 :", fruits.flat());

// 3. flat nesting parent

let data = [1, 2, [3, 4, [5, 6, [7, 8]]]];

console.log("Original Array :", data);
console.log("Flat Level 1 :", data.flat());
console.log("Flat Level 2 :", data.flat(2));
console.log("Flat Level 3 :", data.flat(3));

// 4. flat nesting parent

let numbers = [10, [20, [30, [40, [50, [60, [70]]]]]]];

console.log("Original Array :", numbers);
console.log("Flat Infinity :", numbers.flat(Infinity));

// 5. flat nesting parent

let numbers2 = [1, [2, [3, [4, [5, [6, [7]]]]]]];

console.log("Original Array :", numbers);
console.log("Flat Infinity :", numbers.flat(Infinity));