// 1. Difference between var,let,const:
// There are mainly three difference between var vs let and const

// 1. Var is present in the es5 version.
// 2. Var has function scope,it means it used any where and by anyone inside a function scope.
// 3. Var add itself in the window objects.

// On the other hand:
// 1. Let and const is present in the es6 version.
// 2. Let and const has block scope,it means it used any where and by anyone inside a block scope.
// 3. Let and const not add itself in the window objects.

// 2. Execution Context = Execution context is the environment in which JavaScript code runs.It consists of all the necessary information to execute a piece of code, such as variables, functions, and the scope chain.
//

// Types of Execution Contexts:
// 1. Global Execution Context (GEC) = Created when JavaScript starts executing a script.Stores global variables and functions.In the browser, "this" refers to the window object.Only one GEC exists throughout execution.

// 2. Function Execution Context (FEC) = Basically when a function create it create an imaginary box for itself this imaginary box called execution context.It store three things:
// 1. All the variable present in that function.
// 2. All the function present in that function.
// 3. Lexical Scope = Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions based on where they are defined in the source code.It is a kind of chart which tells that a particular function can access whose variable and properties or not. Because we previously discuss a function can contain the variable and function also.
// e.g.:
// function parent(){
//     let a = 10;
//     function child(){
//         let b = 10;
//         console.log("Child:",a,b);
//     }
//     console.log("Parent:",a);
//     child();
// }

// parent();

// Note = 1. You clearlly see in the above example the child can use both the inside or outside variable,but parent can only use the their "a" variable.

// 2. Clouser Property = A closure is a function that has access to its own scope and the outer function’s variables even after the outer function has finished executing.It simply means that a closure prorperty allows a function to access variables from its outer (enclosing) function even after that function has finished executing.Closures are based on lexical scoping, meaning that a function’s scope is determined by where the function is defined, not where it is executed. This allows inner functions to access variables from their outer function.

// function parent(name){
//     let nm = name;
//     function child(){
//         console.log(nm);
//     }
//     return child;
// }

// let clouserFunction = parent("Sahil");
// clouserFunction();

// Phases of Execution Context = Each execution context goes through two phases:
// 1. Creation Phase (Memory Allocation & Hoisting) = The JavaScript engine firstly set up the global execution context.In this ,Variables and functions are hoisted (i.e., memory is allocated for them).For e.g. = var, variables are initialized with undefined, while let and const remain uninitialized (TDZ).

// 2. Execution Phase = The code is executed line by line.Variables are assigned values, and functions are invoked.

// Javascript is a single threaded programming language although it support the asynchronous javascript but the question is how.The answer is by using event loop basically when we try to achieve the asynchronous programming flow in javascript by using settimeout or any other WebApi's methods.Then javascript execute the every statement one by one by using two components one is task queue and the second is microTask queue.
// Now we know that there are two types of web Api's the callback() based api and the promises based api's.So the callback() based api's stored in the task queue and have less priority.On the other hand the promise based api's stored in the microTask queue which have higher priority.

// After knowing all these components now we try to understand how the event loop handle the asynchronous flow in javascript using an example:
// Suppose one settimeout() function is try to executed now firstly they come in the call stack after come in the call stack javascript identifies it is a callback based api's so the event loop store that function inside the task queue till their waiting period is completed,in that waiting period rest of the code is executing with the same flow using the call stack.But when the waiting period is completed the event loop move that function inside the call stack to execute.Similary for the promise based api's but the only difference is they store in the microTask queue and have more priority than the task queue.

// e.g.:
// console.log("Hello1");
// console.log("Hello2");
// setTimeout(()=>{
//     console.log("Hello3");
// },0)
// console.log("Hello4");

// 3. Three are two type of values in the javascript:
// 1. Premitive = It inculde number,boolean,float,int,string,etc.And it's value can be copied means not affected by any one change in itself.It created deep Copy by default.
// e.g.:
// let a = 5;
// let b=a;
// b--;
// console.log(b);
// console.log(a);

// 2. References = It include any values that present inside the [],(),{}.It simply means array,set,objects.And it's value can't be copied directly.It means it value can be affected by any one change in itself.It create shallow copy by default.
// e.g.:
// let arr1 = [1,2,3,4,5];
// let arr2 = arr1;
// arr1.pop();
// console.log(arr1);
// console.log(arr2);

// Now we can avoid it:
// let arr3 = [...arr1];
// arr3.pop();
// console.log(arr3);
// console.log(arr1);

// 4. Truthy or Falsly values:
// Falsly Values are 0,false,Undefined,null,naN,document.all are are called falsely value.
// Rest of all the values are termed as truthy values.

// 5. Array is a object you can also store the negatice indexes in the array.
// e.g.:
// let arr = [1,2,3];
// arr[-1]=4;
// console.log(arr);

// We can find whether the give variable is array or object by using isArray() function.

// 6. First Class Function = Basically, when an anonymous function stored with in a variable or we can say that it'll treated as a variable and after that we can use that variable whenever we wanna to use that function is called first class function.

// e.g :
// let firstClassFunction = ()=>{console.log("Hey I am first class function.");}

// Note = 1. You can also pass it as a argument in any another function.
// e.g.:
// function greet(val){
//     console.log("Adios");
//     val();
// }
// greet(firstClassFunction);

// 2. There might be a case when you add parameter inside the anonymous function at that time not pass variable name as a with argument because we use pass argument when we literally wanna to call the function at that current line of code.

// let firstClassFunction = (a)=>{console.log("Hey "+a+" I am first class function.");}

// function greet(val){
//     console.log("Adios");
//     val("Sahil Kumar");
// }
// greet(firstClassFunction);

// 7. Higher Order Function = Previously we see when can pass first order function or even any function as a argument but correspondingly their might me a function which accept it as a parameter.That type function is called higher order function which either takes the function as a parameter or either they return an function.

// 8. Constructor Function = Firstly move your brain to the c++ or java in those languages we can create a class and use "this" keyword in that class which nothing but refer to the object who call it and we create an new object by using "new" keyword which return the object.But in javascript we can do same thing without using object oriented programming although we can also use these concept in the javascript object oriented programming because we know it is a object oriented programming language but javascript allow us to do the same thing with the help of function.
// It means we create an blueprint function and use "this" keyword to assign the variable or properties (we can also set it manually or by using parameter value) and use "new" keyword to create an function object is called constructor function.We can also use parameter or argument.

// e.g.:
// function blueprintOfCar(name,price,milage){
//     this.name=name;
//     this.price=price;
//     this.milage=milage;
// }
// let car1 = new blueprintOfCar("Ferrari",30000000,15);
// let car2 = new blueprintOfCar("Lamborgini",40000000,16);
// let car3 = new blueprintOfCar("Roll Royales",50000000,18);

// console.log(car1);
// console.log(car2);
// console.log(car3);

// 9. Prototype = Generally speaking when any object create by default they inherit some functionallity or we can say that methods or properties from the window to provide extra features is called prototype.
// e.g. :
// let arr = [1,2,3,4,5];
// console.log(arr);  // Go to console and you will see there is a variable called prototype in which we have lots of methods and properties to use. "lenght"is one the example of it.

// Prototype Inheritance = It is similar to the classes inheritance but the difference is one object inherit all the methods and properties of other using "__proto__" keyword.

// e.g.:
// 1. Using objects:
// let parent = {
//     greetParent:"Hello"
// }
// let child = {
//     greetchild:"Adios"
// }

// child.__proto__= parent;
// console.log(child.greetParent)

// 2. Using functions:
function greet(name) {
  this.name = name;
}

const obj1 = new greet("Sahil Kumar");
const obj2 = new greet("Akshay Sharma");

greet.prototype.showGreet = function () {
  console.log(`Welcome ${this.name}.`);
};

obj1.showGreet();
obj2.showGreet();

// 10. this , call , apply, bind:

// (i) this  = It has differnt value in different scenario it means in global and function scope it refer to the window object and in method scope it refer to the parent object in which your function or method lies.And inside eventlistener the "this" refer to the element on which event listener add it means before "."

// (ii) call() = It is used to change the by default nature of the "this" keyword so where we want inside an function "this" not refer to the window or parent object we want it refer to some other object so in that case we use call.It does'nt return any thing it simply call the function.
// e.g.:

// function callExample(a,b,c){
//     console.log(a,b,c);
//     console.log(this);
// }
// let obj = {
//     greet:"I am object."
// }

// callExample.call(obj,1,2,3); // the first parameter is the object name which you wanna to replace with "this" after that the remaining parameter is the function argument.

// (ii) apply() = It is similar to the call but the only difference is it pass all the function argument in a array.
// e.g.:
// callExample.apply(obj,[1,2,3]);

// (iii) bind() = It is used to bind your function with the object and return an new function which have both the value.
// e.g.:
// let bindFunction = callExample.bind(obj,1,2,3);
// bindFunction();

//  11. Pure Function = It is function which have two features:
// 1. Return same output for same input.
// 2. Never change the value of globall variable.

// 12. Impure Function = Exactly reverse of it.

// 13. Shallow Copy and the deep Copy = In shallow copy more than one variables or methods are pointing the the same memory location.It means that if we try to change the data using one variable or method the changes reflected in the other automatically because they use same memory location.Generally the shallow copy is created using the "=" operator.
// e.g. :

// let shalloArr1 = [1,2,3,4,5];
// let shalloArr2 = shalloArr1;

// console.log(shalloArr1);
// console.log(shalloArr2);

// shalloArr2.shift();
// console.log(shalloArr1);
// console.log(shalloArr2);

// Deep Copy = In this method the variable or methods are pointed to the independent memory location,it means that if we try to change the data using one it cannot affect the other.
// So there are three methods to create the deep copy in the javascript:
// 1. using JSON.parseInt(JSON.stringify());
// 2. using the lodash library method name called clonedeep().
// 3. Using the spread operator [...obj].
