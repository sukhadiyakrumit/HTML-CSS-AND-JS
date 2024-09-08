// primitive datatype
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100;
const scoreValue = 100.3;

const loggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 3656012728456987789n


// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "nagaraj", "doga"]
let myObj = {
    name: "Krumit",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}
