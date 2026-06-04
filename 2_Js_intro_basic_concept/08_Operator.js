// 1. arithmetic operator

let a = 100;

let b = 200;

console.log("Addition", a + b);
console.log("Substraction", a - b);
console.log("Multiplication", a * b);
console.log("Division", a / b);
console.log("Modulus", a % b);
console.log("Exponentiation", a ** b);


// 2. Assignment operator

a = 100;
console.log("add and assign", (a += 50));
console.log("minus and assign", (a -= 50));
console.log("Multiply and assign", (a *= 2));

// 3. comparison operator

a = 10;

b = 20;

console.log("equal", a == b);
console.log("not equal", a != b);
console.log("less than ", a < b);
console.log("greater than ", a > b);
console.log("less or equal ", a <= b);
console.log("greater or equal ", a >= b);

b = "30";

console.log("equal", a == b);
console.log("strictly equal", a === b);

// 4. logical operator

let trueVariable = true;

let falseVariable = false;

console.log("and result", trueVariable && falseVariable);
console.log("or result", trueVariable || falseVariable);
console.log("not result", !trueVariable);


// 5.unary

a = 24;

console.log("current variable value", a);
// pre increment;

console.log("pre increment", ++a);

// post increment;
console.log("post increment", a++);

// pre decrement

console.log("pre decrement", --a);

// post decrement

console.log("post decrement", a--);
console.log("current variable value", a);


// 6. miscellaneous operator

console.log("type of a", typeof a);

// ternary operator

a > b ? console.log("a is greater") : console.log("b is greater");