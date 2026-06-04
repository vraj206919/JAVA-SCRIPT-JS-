// Accessing Element of an Array

let vegetables1 = ["Carrot", "Lemon", "Cabbage"];

console.log(vegetables1[3]);
console.log(vegetables1[0]);

// Last Element of Array

let course = ["Corn", "Chilli", "Radish"];

console.log(course[course.length - 3]);
console.log(course[course.length - 2]);
console.log(course[course.length - 1]);


// Modifying Array Element

let vegetables2 = ["Chilli", "Lemon", "Onion"];

vegetables2[2] = "Radish";
console.log(vegetables2);

vegetables2[0] = "Carrot";
console.log(vegetables2);

vegetables2[1] = "Potato";
console.log(vegetables2);


// Push

let vegetables3 = ["Radish", "Carrot", "Potato"];

vegetables3.push("Chilli");
console.log(vegetables3);

vegetables3.push("Tomato");
console.log(vegetables3);

vegetables3.push("Onion");
console.log(vegetables3);


// Manual Push

let element = ["Cabbage", "Corn", "Garlic"];

let length = 0;

for (let key of element) {
    length++;
}

element[length] = "Chilli";

console.log(element);


// Unshift

let vegetables4 = ["Radish", "Carrot", "Potato"];

console.log(vegetables4);

vegetables4.unshift("Lemon");

console.log(vegetables4);


// Manual Unshift

let count1 = 0;

for (let key of vegetables4) {
    count1++;
}

for (let i = count1 - 1; i >= 0; i--) {
    vegetables4[i + 1] = vegetables4[i];
}

vegetables4[0] = "Apple";

console.log(vegetables4);


// Unshift Example

let number = [10, 20, 30, 40, 50];

number.unshift(40);
console.log(number);

number.unshift(10);
console.log(number);

// Manual Push Example

let number1 = [10, 20, 30, 40, 50];

let count2 = 0;

for (let key of number1) {
    count2++;
}

number1[count2] = 100;

console.log(number1);


// Manual Push Example 2

let vegetables5 = ["Potato", "Carrot", "Tomato"];

let veg = 0;

for (let key of vegetables5) {
    veg++;
}

vegetables5[veg] = "Onion";

console.log(vegetables5);


// Manual Push Example 3

let car = ["BMW", "Audi", "Verna"];

let carCount = 0;

for (let key of car) {
    carCount++;
}

car[carCount] = "Alto";

console.log(car);