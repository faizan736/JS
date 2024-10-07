console.log("Day2")

//Primitive datatypes (stores in stack of the device)
//-int
//-string
//-boolean
//-null
//-undefined
//-bigint

//non Primitive datatypes (stores in heap of the device)
//object
//function
//array


let x = 15;
console.log(x);
let y = x;
y = 20; 
console.log(y);
console.log(x);
//in stack when we create new variable assiging to that it creates a copy of that 


//where as in non primitive data types it does not create a copy which is stores in heap
let objOne = {
    name : "XXX",
    age : 20,
    sec : 'B'
}
let objTwo = objOne;
console.log(objOne);
objTwo.age = 15;
console.log(objOne);
console.log(objTwo);

//string
const name = new String('Abcdefgh');
console.log(name[2]);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.indexOf("A"));
console.log(name.slice(0,3));
console.log(name.trim()); // remove extra spaces
console.log(name.replace('A','a'));


//arrays
const arr = [1,2,3,4,5,6]
console.log(arr);
console.log(arr[4]);
//array method
arr.push(8);
console.log(arr)
arr.pop() //pop element from the back side
console.log(arr)

arr.unshift(9) // add elements from the first
console.log(arr)
arr.shift() // removes element from the first
console.log(arr)

const newArr = arr.join() // converts numbers in to the string
console.log(newArr);


let array  = [1,2,3,4,5,6,7,8,9]
console.log(array)

let newArray1 = array.slice(2,3) // returns values from the given range
console.log(newArray1)
console.log(array)

let newArray2 = array.splice(2,3) // forms new array and remove it from the orginial array
console.log(newArray2)
console.log(array)


let marvel_heros = ["iron man","spider man","caption america","hulk"]
let dc_heros = ["Superman","Batman","flash"]
//method 1 to combine
let all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)
//method2 to combine
let all_hero = [...marvel_heros,...dc_heros] // spread operation
console.log(all_hero)

//objects
const sym = Symbol("key1")
const obj = {
    First_name : "XYZ",
    Last_name :"ABC",
    age:20,
    section:'B',
    roll_no :25,
    "new":"new", // we cant acces this using (.)
    [sym] : "myKey1" //this is the method to define symbols 
}
//to access the keys
console.log(Object.keys(obj))
console.log(Object.values(obj))

console.log(obj.First_name)
console.log(obj["new"]) //another method of using objects
console.log(obj["age"])
console.log(obj[sym])

//modification
obj.First_name = "abcd"

//if we to freeze like no want to chance the object 
//Object.freeze(obj)

//adding functions to objects
obj.greeting = function(){
    console.log(`Hello ${this.First_name}`) //this keyword tell obj that we r using same key from the object
}
console.log(obj.greeting())

const user = {
    name : {
        First_name : "Abcd",
        Last_name :"Xyz"
    },
    age:25,
    department:"IT"
}
console.log(user.name.First_name)

//combining objects
const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

const obj3 = Object.assign({},obj1,obj2) // {} this symbol in first tell us that we should return only in object form
const obj4 = {...obj1,...obj2}
console.log(obj4)
console.log(obj3)

//object destructure
const {age:orginialAge} = obj
console.log(orginialAge);

//API
{
    //api format
}
[
    {},
    {},
    {}
]

//Functions
function greet(){
    console.log("Hello")
}
function Add(num1,num2){
    return num1+num2;
}

//if we many arguments which r define dynamically then we use rest operator (...)
function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(200,300,500,600,700,800))

function calculateCartPrice1(val1,val2,...num){
    return num
}
console.log(calculateCartPrice1(200,300,500,600,700,800))

const marks ={
    1:100,
    2:500,
    3:600,
    4:800,
    5:1000
}
for(let keys in marks){
    marks[keys] = marks[keys]**2;
}
for(let keys in marks){
    console.log(marks[keys]);
}
console.log(marks)


