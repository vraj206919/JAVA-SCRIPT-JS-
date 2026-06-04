// //1. example


let vegetables = ["Radish","Carrot","Potato"]

let vegetablesCount = 0;

for(let key of vegetables){
    vegetablesCount++;
}

vegetables[vegetablesCount] = "Onion";

console.log(vegetables);

// unshift manually 

//2 example

let fruit1 = ["Apple","Mango","Guava"]

let unshiftFruit = 0;

for(let key of fruit1){

    unshiftFruit++;
}

console.log(unshiftFruit);

for(let i=unshiftFruit-1;i>=0;i--){

    fruit1[i+1] = fruit1[i];

}

fruit1[0] = "Banana";

console.log(fruit1);




// 3 example


let number1 = [10,20,30,40,50];

let numberCount = 0;

for(let key of number1){

    numberCount++;
}


console.log(numberCount);

for(let j=numberCount - 1;j>=0;j--){

    number1[j+1] = number1[j];
}
number1[0]=60;

console.log(number1);


// 4 example

let Student = ["Rutik","Vraj","Tirth"]

let unshiftStudentCount = 0;

for(let key of Student){

    unshiftStudentCount++;
}

console.log(unshiftStudentCount);

for(let i=unshiftStudentCount - 1; i>= 0;i--){

    Student[i+1] = Student[i];
}

Student[0] = "Mitraj";

console.log(Student)


//5 example

let Cource = ["Full-stck","Graphic","UI/UX"];

let CourceCount = 0;

for(let key of Cource){

    CourceCount++;
}

console.log(CourceCount);

for(let i=CourceCount-1;i>=0;i--){
    Cource[i+1] = Cource[i];
}

Cource[0] = "Video Editing"

console.log(Cource);