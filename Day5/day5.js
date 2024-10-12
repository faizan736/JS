console.log("Day5")

//JavaScript is a synchronous language and single threaded 
// synchronous - > line by line execution
// single threaded  -> one thing at a time 

//JavaScript uses features like callbacks, promises, and async/await to manage asynchronous programming while keeping the single-threaded nature 


//A promise in JavaScript is like a "promise" you make for the future. It’s a way to handle things that take time, like downloading a file or fetching data from a server
// Creating a new promise
let myPromise = new Promise((resolve, reject) => {
    let success = true; // Change this to false to see the reject case

    if (success) {
        resolve("Task completed successfully!"); // If the task is successful
    } else {
        reject("Task failed."); // If the task fails
    }
});

// Using the promise
myPromise
    .then((message) => {
        console.log("Success: " + message); // Runs if the promise is resolved
    })
    .catch((error) => {
        console.log("Error: " + error); // Runs if the promise is rejected
    });

//
const newPromise = new  Promise((resolve ,reject)=>{
    setTimeout(()=>{
        console.log("Async task is perfomered")
        resolve()
    },1000)
})

newPromise.then(()=>{
    console.log("Async is resolved")
}).catch(()=>{
    console.log("Error found")
})


const newPromise1 = new  Promise((resolve ,reject)=>{
    setTimeout(()=>{
        console.log("Async task is perfomered")
        resolve({name : "XYZ",email:"xyz@gmail.com"})
    },1000)
})
newPromise1.then((user)=>{
    console.log(user);
})

const newPromise2 = new  Promise((resolve ,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({name : "XYZ",email:"xyz@gmail.com"})
        }
        else{
            reject("Something went wrong")
        }
    },1000)
})
newPromise2
.then((user)=>{
    console.log("user")
    return user.name
}).then((username)=>{
    console.log(username)
}).catch(()=>{
    console.log("Error Found")
}).finally(()=>{
    console.log("The promise is resolved or rejected") // this runs every time in reject as well as in resolve
})

// instead of .then .catch we can use async and await 
const newPromise3 = new  Promise((resolve ,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({name : "XYZ",email:"xyz@gmail.com",age:21})
        }
        else{
            reject("Something went wrong in javascript")
        }
    },1000)
})
async function consumePromiseThree(){
    try{
        const response = await newPromise3
        console.log(response)
    }
    catch{
        console.log("Error found ")
    }
}
consumePromiseThree()


//fetch is spl library which has spl stack where the task complete spl then goes to another 
// getting data from the api 
//using async and await
async function details(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json() // the data will be string we convert into json and it takes time so we use await
        console.log(data);
    }
    catch(Error){
        console.log(Error)
    }
}
details()

//using .then .catch
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json
}).then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})


/// oops in javaScript
// javascript is a not object oriented language js is prototype oriented language

//prototype 
//A prototype-oriented language, like JavaScript, is a programming style where objects can inherit
//properties and behaviors directly from other objects, called prototypes, instead of using classes.
//Prototype-oriented programming in JavaScript is flexible and allows you to add or change properties and methods dynamically, making it different from traditional class-based languages like Java or C++.

//lexical scoping and closures 
let globalVar = "I am global";

function outerFunction() {
    let outerVar = "I am outer";

    function innerFunction() {
        let innerVar = "I am inner";
        console.log(globalVar); // Can access the global variable
        console.log(outerVar);  // Can access the outer function's variable
        console.log(innerVar);  // Can access its own variable
    }

    innerFunction();
}

outerFunction();
