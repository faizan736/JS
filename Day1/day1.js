console.log("Day1");
// resoucrce :  https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37

//variables && const
const accountId = 144553; // oncs define we cant change
let accountEmail = "XXXYYYZZZ@gmail.com"; // can change, block scoped
var accountPassowrd = "12345"; //can change, function scoped ,

///scope
if (true) {
	var a = 5;
	let b = 10;
}
console.log(a); // 5 (var is function/global scoped)
console.log(b); // Error: b is not defined (let is block-scoped)

//hoisting --> It ensures that variable and function declarations are processed before execution starts.
console.log(x); // undefined (var is hoisted)
var x = 5;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

//decleartion
var z = 5;
var z = 10; // No problem, var allows redeclaration

let w = 5;
let w = 10; // SyntaxError: Identifier 'w' has already been declared

console.log(accountId); //to print single detail
console.table([accountId, accountEmail, accountPassowrd]); // to print mutiple data in the form of table

//\\//\\///\\\/\/\\///////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

("use strict"); //treat all js code as new version

//data types
let name = "XXXX" //string
let age = 19 //int
let isLoggedIn = false; //boolean
//null => stand alone value(empty)
//undefined => still value is not defined 
//symbol =>unique

//\\//\\///\\\/\/\\///////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//conversion
let a = "1";
console.log(typeof a); 
console.log(Number(a)); //Number is class  

//\\//\\///\\\/\/\\///////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//operations
let value = 3;
let negValue = -value
console.log(negValue);

let st1 = "XXX"
let st2 = "YYY"
let st3 = st1+st2
console.log(str3)

console.log("1"+2)//12 if first string all element in string
console.log(1+"2") //12 if first number all element in number
console.log("1"+"2")//12 //both string
console.log("1"+2+2) //122 // string 


//\\//\\///\\\/\/\\///////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//comparison
console.log("2">1) // true
console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true
//The relational operators (>, <, >=, <=) convert null to a number (which is 0).
//The equality operator (==) has special rules for null. null is only equal to undefined and nothing else.
