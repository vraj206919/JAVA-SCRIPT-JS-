//4. some method that check if at least one element passed a condition

// return value of boolean(true false  )

// 1. some method Number

let number1 = [1,2,3,4,5,6,7,8];

const result1 = number1.some((A) => {
    return A > 10;
});

console.log(result1);

// 2. some method Marks

let marks = [65, 72, 88, 95, 78];

const result2 = marks.some((mark) => {
    return mark > 90;
});

console.log(result2); 

// 3. some method Fruits

let fruits = ["Apple", "Banana", "Orange", "Mango"];

const result3 = fruits.some((fruit) => {
    return fruit === "Mango";
});

console.log(result3);

// 4. some method Age

let ages = [20, 25, 30, 16, 22];

const result4 = ages.some((age) => {
    return age < 18;
});

console.log(result4); 

// 5. some method Colour

let colors = ["Red", "Blue", "Green"];

const result5 = colors.some((color) => {
    return color === "Blue";
});

console.log(result5); 