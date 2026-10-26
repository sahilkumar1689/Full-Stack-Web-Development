// 1. Async and Await:

// Before knowing about the async and await we need to know what is synchronous and asynchronous programmming.

// Synchronous = Synchronous means the code runs in a particular sequence of instructions given in the program.Each instruction wait for the previous one to complete its execution.

// Asynchronous = Due to synchronous programming sometime important instruction blocked due to some previous instruction,which cause delay in the UI.Asynchronous code execution allows to execute next instructions imediately and does'nt block the flow.
// In javascript asynchronous programming can be acheived by using timeout(function,miliSeconds) function.
// e.g. :
// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log(3);
// },2000);
// console.log(4);
// console.log(5);

// But this function has one problem = suppose we work with api's and we know that sometime api's call take's time to sent the results so what we simply do we puth the api's call inside the timeout() function so the rest of the code no need to wait for the api's result ok till now no problem.
// But suppose we need to call for more than one api's in that case we puth two calls in the different different timeout function but in that case both the timeout function starts at the same time and send the result at the same time which we really can't.We really want firstly one api call successfully acheive and after that the second.In simple words we want to acheive synchronous programming flow inside the asynchronous flow.
// Lets understand it with the help of an example suppose you create a login form in which you firstly need to check the username if username present in the database after that you need to check the password.So if you try to put both username and password checking logic in timeout function they start at the same time which we really can't 
// e.g. :

// function temp(){
//     console.log("Checking Username...");
//     return setTimeout(()=>{
//         // console.log("Username is not present.");
//         return 1;
//     },5000);
// }
// function temp2(){
//     console.log("Checking Password...");
//     return setTimeout(()=>{
//         // console.log("Password is present.");  // In some hypothetical cases.
//         return 1;
//     },3000);
// }
// if(temp()==1){
//     console.log("Usename present");
//     if(temp2()==1){
//         console.log("Password is present.");
//     }
//     else{
//         console.log("Password is not present");
//     }
// }
// else{
//     console.log("Username is not present");
// }

// You see both call at the sametime no matter how much if else nesting you did it to control the asynchronous programming flow.You can't control the asynchronous programming flow with the help of synchronous programming techniques.



// So in javascript to acheive the synchronous programming flow inside the asynchronous programming we have three possible ways:


// 1. Callback hell = We firstly need to know what is callbacks.Basically when a function passes as a argument inside the another function is called callback function.
// Callback e.g. :

// function sum(a,b){
//     return a+b;
// }

// function calculator(a,b,getSum){
//     return getSum(a,b);
// }

// function call:
// console.log(calculator(5,5,sum));
// Here sum function is known as callback function because it passes as a argument inside the another function.


// Callback hell = It is the situation in which nested callback functions are stacked below one another to form a pyramid structure is called callback hell.

// // Simple Example:
// function getid(id,nextId){
//     setTimeout(() => {
//         console.log(id);
//         if(nextId){
//             nextId();
//         }
//     }, 5000);
// }

// getid(123,()=>{
//     getid(456,()=>{
//         getid(789);
//     })
// })


// // Complex Example:
// const isValidName = (nm) =>{return 1;};
// const isValidPass = (pass) =>{return 1;};

// function checkingName(name,passCheck){
//     setTimeout(()=>{
//         console.log("Checking Username...");
//         if(isValidName(name)){
//             console.log("Username is valid.");
//             passCheck();
//         }
//         else{
//             console.log("Username is invalid.");
//         }
//     },5000);
// }

// function checkingPass(pass){
//     setTimeout(()=>{
//         console.log("Checking Password...");
//         if(isValidPass(pass)){
//             console.log("Valid Password...");
//         }
//         else console.log("Invalid Password.");
//     },5000);
// }

// let uName = prompt("Enter username:");
// checkingName(uName,()=>{
//     let pass = prompt("Enter password:");
//     checkingPass(pass);
// });
// No need to worry because not so much used because of its complex syntax.


// 2. Promise chain = Promises in JavaScript are a powerful tool for handling asynchronous operations. They represent a value that may be available now, in the future, or never. Promises provide a cleaner, more readable way to manage asynchronous code compared to traditional callback functions.

// Creating a Promise:

// A promise is created using the Promise constructor, which takes a function with two parameters= resolve and reject. These parameters are used to determine the outcome of the promise.
/*
Syntax:
let promise = new Promise((resolve,reject)=>{
    // code.
});

Basically, it return an promise object which have three state pending,fullfilled,reject.
Pending = when appropriate work is in progress.
Fullfilled = When appropriate work is done. An object is fullfilled by using the 
resolve("Resolve Message") function.If we call the resolve function inside the call back then it means the function is fullfilled.
Reject = When appropriate work is reject.An object is rejected by using the reject("Reject Message") function.

// Note = In real life programming we can'nt create a promise object by our self.Generally when we do an api's call then their corresponding system create an promise object and return to use we only need to handle it according to their states.

// To handle the promise state we have two functions:
// 1. then((res)=>{//code}) = "then" function is called when the promise state is successfull.
// 2. catch((err)=>{//code}) = "catch" function is called when the promise state is rejected.
*/

// Creating an promise:
// let p1 = new Promise((resolve,reject)=>{
//     console.log("New Promise Object.");
// })
// console.log(p1);


// // Simple example:

// // create a promise:
// function getdata(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(data);
//             resolve("Success");
//         },5000);
//     });
// }

// // Simple use of promise:
// let promise = getdata(1);
// // handle the promise:
// promise.then((res)=>{
//     console.log(res);
// })
// promise.catch((err)=>{
//     console.log(err);
// })

// // Promise chaining:
// let promise = getdata(1);
// promise.then((res)=>{
//     console.log(res);
//     return getdata(2);
// }).then((res)=>{
//     console.log(res);
//     return getdata(3);
// }).then((res)=>{
//     console.log(res);
//     return getdata(4);
// });


// // Complex Example:

// const isValidName = (nm)=>{return 1;};
// const isValidPass = (pass)=>{return 0;};

// function checkingName(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(isValidName(name)) resolve("Username is valid.");
//             else reject("Username is not valid.");
//         }, 5000);
//     })
// }

// function checkingPass(pass){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(isValidPass(pass)) resolve("Password is valid.");
//             else reject("Password is not valid.")
//         }, 5000);
//     })
// }

// let Uname = prompt("Enter Username:");
// let pass = prompt("Enter Password:");
// let promise = checkingName(Uname);
// promise.then((res)=>{
//     console.log(res);
//     return checkingPass(pass);
// }).then((res)=>{
//     console.log(res);
// })




// 3. Async and Await = Async-await is a couple of keywords which is used as a alternative of promises chain.Async is used with the function to make is asynchronous and it always return a promise no matter we declared it or not.Secondly inside the async function we use the await function.Await functions is used to stop the programming flow temporarily until the current promise is resolved.
// e.g. :

// function getdata(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(data);
//             resolve("Success");
//         },5000);
//     })
// }

// async function getAllData(){
//     console.log("Getting Data 1...");
//     await getdata(1);  // It internally handle the state if the promise object state is resolve then they execute further another wise it termiante the flow.
//     console.log("Getting Data 2...");
//     await getdata(2);
//     console.log("Getting Data 3...");
//     await getdata(3);
// }
// console.log(getAllData());

// Now there is a one problem arrises we need to un-nessary call the getAllData function.We have a solution called IIFE.
// IIFE = It stands for Immediately Invoked Function Expression.It means we write a function expression inside the parantheses and call immediatly at that place.
/*
Syntax:
(Function Expression)();
*/
// e.g. :

// (async ()=>{
//     console.log("Getting Data 1...");
//     await getdata(1);
//     console.log("Getting Data 2...");
//     await getdata(2);
//     console.log("Getting Data 3...");
//     await getdata(3);
// })();


// Complex Examples:
const isValidName=(nm)=>{return 1;};
const isValidPass=(pass)=>{return 0;};

function checkingName(name){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(isValidName(name)) resolve("Username is valid.");
            else reject("Username is not valid.");
        }, 5000);
    })
}
function checkingPass(pass){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(isValidPass(pass)) resolve("Password is valid.");
            else reject("Password is not valid.");
        }, 5000);
    })
}

let Uname = prompt("Enter Username:");
let pass = prompt("Enter Password:");
(async ()=>{
    await checkingName(Uname).then((res)=>{
        console.log(res);
    });
    await checkingPass(pass).then((res)=>{
        console.log(res);
    });
})();




// API'S = 
const url = "https://cat-fact.herokuapp.com/facts";
let btn = document.querySelector("#btn");
let fact = document.querySelector("#fact");


// Using async function:
async function getfacts(ind){
    let response = await fetch(url);
    let data = await response.json();
    if(ind<data.length){
        fact.innerHTML = data[ind].text;
    }
    else fact.innerHTML = "No More Facts.";
}


// Using promises chain:
// function getfacts(ind){
//     let response = fetch(url);
//     response.then((res)=>{
//         return res.json();
//     }).then((data)=>{
//         if(ind<data.length){
//             fact.innerHTML = data[ind].text;
//         }
//         else fact.innerHTML = "No More Facts.";
//     })
// }

let i=0;
btn.addEventListener("click",()=>{
    getfacts(i);
    i++;
});

// Note = 1. Always try to use the async-await becuse you clearly see in the above examples the async-await directly send you the data and handle every thing by it self but in promises chain you need to handle every thing by your self and fetch data from the promises object by your self.

