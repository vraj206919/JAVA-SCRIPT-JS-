// Reduse means given Output In single number(Output).

// 1. Example Of Reduce

let numberArray = [1, 2, 3, 4, 5];

console.log("number array : " + numberArray);

const sumOfNumbers = numberArray.reduce((accumulator, current) => {
  return accumulator + current;
});

console.log("Output in single number : " + sumOfNumbers);

// 2. Example Of Reduce

let numbers = [1, 2, 3, 4, 5];

const product = numbers.reduce((acc, curr) => {
  return acc * curr;
});

console.log("Output in single number : " , product);

// 3. Example of Reduce

let numbers1 = [1, 2, 3, 4, 5];

const num = numbers1.reduce((acc,curr) => {
 return acc - curr;
});

console.log("Output In Single number : " , num);

//                  or

// 4. example

let numbers2 = [100, 200, 300, 400, 500];

const num1 = numbers2.reduce((a,c)=>(a/=c),0);

console.log("Return Single value : " , num1);

// 5. Example

let shopDetail = [
    {
        product:"Face-wash",
        price:500,
        quantity:5,
    },
    {
        product:"Brush",
        price:50,
        quantity:5,
    },
    {
        product:"Chocolate",
        price:110,
        quantity:2,
    },
];

let total = shopDetail.reduce((a, c) => a + c.price * c.quantity, 0);

console.log("Total Price:", total);