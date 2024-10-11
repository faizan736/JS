console.log("Day3");

//closure
//what is closures
// -->closures in javascript is where we can access the outer function even after the execution
// easy way to remember is small people(inner function) can take help from young people(outer function)
// where as young people(outer function) can not take help from small people(inner function)
function outerFunction() {
	let outerVariable = "I'm outside!";

	function innerFunction() {
		console.log(outerVariable); // Can still access outerVariable
	}

	return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: "I'm outside!"

//hoisting
//what is hoisting ?
//-> hoisting in javascript is defined as varaibles and function moves top of there scope
//-> function does return any error
//-> varaibles also does not return any error instead i will return undefined
//->hositing cant be done in const it gives refernce error
//-> hositing cant be done in let  it gives refernce error

addOne(5);
function addOne(num) {
	return num + 1;
}

//addTwo(5);
const addTwo = function (num) {
	return num + 2;
};

//\//\/\/\/\/\/\/\/\/\/\/
//Arrow functions
const user = {
	username: "XYZ",
	welcomeMessage: function () {
    //this keyword refers tells that we r refering this object 
    console.log(`${this.username} welcome to webiste`)
    console.log(this) //this return whole object which this operator is refering 
  },
  
};
//this keyword is only accessable in objects not in functions 
user.welcomeMessage();
console.log(this) // here this does not refering to anything so it returns null object 
//when we console.log(this) in inspect we get window object 

const user1 = () =>{
  console.log("Arrow function");
  console.log(this) // return empty objects
}
const user2 = function(){
  console.log("Normal function");
  console.log(this) // returns some functions beacause this keyword
}

// () => { return } when u {} this brackets we need use keywords return
// () => () when u dont want to use return keyword we use () this brackets




