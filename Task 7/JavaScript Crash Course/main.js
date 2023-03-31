// // console.log("Hello there...");

// // let age = 21;

// // console.log(age);

// // const salary = 40000;

// // const sallary;

// // salary = 20000;

// // console.log(salary);


// // let sum = 0;

// // sum = 5;

// // console.log(sum);

// // Strings

// const name = "Rohail ahmad";

// const language = 'JavaScript';

// const University = 'Pak Austria Fachhochshule';


// // Const

// const total = 0;

// const PI = 3.14;


// // Boolean

// const isPrimaryNumber = true;
// const isNewUser = false;


// // Undefined

// let result;
// console.log(result);

// const res = undefined;

// // Null

// const data = null;

// // Objects

// const student = {
//     firstname: "Rohail",
//     lastname: 'ahmad',
//     regNo: 'B22f1198aio14'
// }

// console.log(student.firstname);

// const oddNumbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(oddNumbers[0]);


// let a = 10;
// a = 'Rohail';
// a = true;

// console.log(a);

// Assignment Operator

// let a = 10;

// Arthematic Operator

// let x = 45;
// let y = 12;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(++x);
// console.log(--y);

// Comparison Operator

// let x = 45;
// let y = 12;

// console.log(x == y);
// console.log(x != y);
// console.log(x === y);
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);

// Logical Operator

// let x = 10;
// let y = 5;

// const isValidNumber = x > 8 && 8 > y;
// console.log(isValidNumber);

// const isValidNumber = x > 20 || 8 > y;
// console.log(isValidNumber);

// const isValid = true;
// console.log(!isValid);


// String Operator


// console.log('Rohail ' + 'Ahmad');

// Ternary Operator

// const isEven = 10 % 2 === 0 ? true : false;
// const isEven = 10 % 2 === 0 ? "Number is Even" : "Number is not Even";
// console.log(isEven);

// Conversion

// Implicit Conversion

// console.log(true + '3');
// console.log('4' - '2');
// console.log('4' * '2');
// console.log('4' / '2');

// console.log('Rohail ' - 'Ahmad');
// console.log('5' - false);
// console.log('5' - true);
// console.log('5' - null);
// console.log(5 + undefined);

// Explicit Conversion

// console.log(Number('5'));
// console.log(Number(false));
// console.log(Number(''));

// console.log(parseInt('5'));
// console.log(parseFloat('5.3'));

// console.log(String(500));
// console.log(String(null));
// console.log(String(undefined));

// console.log((500).toString());

// console.log(Boolean(10)); // Null - undefined - 0 - '' - NaN = false
// console.log(Boolean('   '));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(NaN));

// const var1 = 10;
// const var2 = '10';

// const var1 = 0;
// const var2 = '';

// const var1 = false;
// const  var2 = '';

// const var1 = null;
// const var2 = undefined;

// console.log(var1 == var2);
// console.log(var1 === var2);

// Conditional Statement

// IF ELSE
// const num = -5;

// if(num > 0){
//     console.log('Number is Positive');
// }else {
//     console.log("Number is not Positive");
// }

// IF ELSE - ELSE IF 

// if(num > 0) {
//     console.log('Number is Positive');
// }
// else if(num < 0) {
//     console.log('Number is Negative');
// }
// else{
//     console.log('Number is Zero');
// }

// SWITCH CASE

// const color = "green";

// switch(color) {
//     case 'red':
//         console.log("Color is Red")
//         break
//     case 'blue':
//         console.log("Color is Blue")
//         break
//     case 'green':
//         console.log("Color is Green")
//         break
//         default:
//             console.log("Not Valid Color")
// }


// LOOPING

// for loop

// for(let i = 1; i <= 5; i++){
//     console.log("Iteration number " + i);
// }


// While Loop

// let i = 1;

// while(i <= 5) {
//     console.log("Iteration number " + i);
//     i++;
// }

// Do While Loop

// let i = 1;
// do{
//     console.log('Iteration number ' + i)
//     i++
// } while(i <=5)


// For of loop

// const numArray = [1, 2, 3, 4, 5]

// for (const num of numArray){
//     console.log('Iteration number ' + num)
// }


// function greet(username) {
//     console.log("Good Morning " + username)
// }

// greet('Rohail');
// greet('Bilal');
// greet('Sufyan');


// function add(a,b) {
//     return a + b
// }

// const sum = add(4,5);
// console.log(sum);


// const add = (a, b) => {
//     return a + b
// }

// const add = (a, b) => a + b
// const addFive = (num) => num + 5;

// const sum = add(10, 45)
// console.log(sum)

// const sumFive = addFive(4);
// console.log(sumFive)


// Scope 

// if(true){
//     const myName = 'Rohail'
// }

// console.log(myName)


// if(true){
//     const myName = 'Rohail'
//     console.log(myName)
// }

function testFn() {
    const myName = 'Rohail'
    console.log(myName)
}
testFn()


