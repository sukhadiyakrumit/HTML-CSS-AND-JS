let score = true

//console.log(typeof score);

//check type of veriable as a method...
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber); 

/*
In above example if string like this '55aaa' or 'any NaN value' that convert in NaN(Not a Nubber) 
In above example for veriable value as numbre that convert in that number
In above example for veriable value as null value that convert in 0(Zero)
In above example for veriable value as undefine value that convert in the NaN
In above example for veriable value as Boolean value true convert in to 1(one) and false convert in to 0(zero)
*/

let isLoggedIn = 10

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);


// if 0(Zero) => false else anyNumber => true
// if string empty "" => false else nonEmpty => true

let anyNumber = 55

let stringAsAnyNumber = String(anyNumber);
//console.log(stringAsAnyNumber);
//console.log(typeof(stringAsAnyNumber));

// ************************************** Operatins ************************************************* //

let value = 3
let negValue = -value
// console.log(negValue); //-3

/*
//Arithmetic operations
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 3);
console.log(2 ** 3);
console.log(2 % 3);
console.log(2 % 3);
*/

/*
let str1 = "Hello"
let str2 = " Krumit"
let str3 = str1 + str2
console.log(str3); //Hello Krumit
console.log(str1 + str2); //Hello Krumit
*/

/*
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
*/

/*
console.log(true); //true
console.log( + true); // 1
console.log(+ ""); //0
*/


let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
