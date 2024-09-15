// Numbers
const score = 500
//console.log(score);

const balance = new Number(200.3365)
//console.log(balance);
//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(4));

const otherNumber1 = 1000000
//console.log(otherNumber1.toLocaleString('en-IN'));

//------------------------------------------Maths----------------------------------------------------------

console.log(Math);

// console.log(Math.abs(-4.5)); //Only Nagative value to positive number
// console.log(Math.round(-4.5)); // for RoundOFF values
// console.log(Math.ceil(-4.5));  // for RoundOFF Celling value
// console.log(Math.floor(-4.5)); // for RoundOFF Flore value
// console.log(Math.min(4, 3, 5, 6, 2)); // for Find lowest value in Arrey
// console.log(Math.max(4, 3, 5, 6, 2)); // for Find Higest value in Arrey

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

//Random value are give value as desimal of zero's form for ramdom abseloute value between 10 to 20 use next

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

