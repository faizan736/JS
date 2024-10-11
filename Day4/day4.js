console.log("Day4")

//javascript execution content
//---1> js execution content contains global execution (this)(in web this is window)(in vscode(nodejs) this null object)
//---2> memory phase
//---2> execution phase

// example of how this program works
let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1+num2;
    return total;
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,5)

//step1 : every thing will assign to this operator 

//step2 : memory phase
//------ val1 = undefined
//------ val2 = undefined
//------ addNum = defination(another js execution content happens like again memory phase and execution phase happens and after every thing it will delete that space)
//------ result1 = undefined
//------ result2 = undefined 

//step3: execution phase
//------ val1 = 10
//------ val2 = 5
//------ addNum = defination(returns 15)
//------ result1 = 15
//------ result2 = 15 



//for of ,for in
let arr = [1,2,3,4,5,6,7,8,9]

for(const key in arr){ // works with indexes and works with objects
    console.log(arr[key]);
}
console.log("-------") 
for(const key of arr){ // works directly with keys and does not work with objects
    console.log(key);
}
console.log("-------") 
let myObject = {
    1 : "BMW",
    2: "Benz",
    3: "Ferrari",
    4 : "Lambo",
    5 : "Porsha"
}
for (const key in myObject){
    console.log(`${key} is ${myObject[key]}`);
}

// Higher order functions 
// forEach is called a higher-order function because it takes a function as an argument and applies that function to each element in an array.
// for each does not have return statement


let num = [1,2,3,4,5,6,7,8,9]
num.forEach((num)=>{
    let sq = num*2
    console.log(sq)
})

num.forEach((item,index,num)=>{
    console.log(item,index,num)
})

const myCoding = [
    {
        language : "cpp",
        level : "Advance"
    },
    {
        language : "python",
        level : "moderate"
    },
    {
        language : "javascript",
        level : "moderate"
    },
    {
        language : "sql",
        level : "moderate"
    }
]

myCoding.forEach((item)=>{
    console.log(item.language)
    console.log(item.level)
})

const array = [{a:1,b:2,c:3,d:4}]
array.forEach((item)=>{
    for(const key in item){
        console.log(item[key]*2);
    }
})

//for each does have retrun type so we use reduce filter and map functions

//Filter
const newNum = [1,2,3,4,5,6,7,8,9]

const newNums = newNum.filter((item)=>{
    return item >5
})
const newNumber = newNum.filter((item)=> item >5) // if we have single line of code
console.log(newNums)
console.log(newNumber)

//map
const sqNum = newNum.map((num)=>{
    return num**2;
})
console.log(sqNum);

//chaining
const doubleMap = newNum
                    .map((num) => num*10)
                    .map((num)=>num+1)
                    .filter((num)=> num > 30);
console.log(doubleMap)

//reduce
const numbers = [1,2,3,4,5,6,7]

const total = numbers.reduce((acc,currVal)=>{
    console.log(`Acc val ${acc} and current val ${currVal}`)
    return acc+currVal;
},0) // this 0 is starting value for accumulator
console.log(total);

const total1 = numbers.reduce((acc,currVal)=>{
    console.log(`Acc val ${acc} and current val ${currVal}`)
    return acc+currVal;
},5)
console.log(total1);


