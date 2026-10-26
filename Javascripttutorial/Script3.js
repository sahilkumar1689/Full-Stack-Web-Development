// 1. Functions = It is block of code which is used to designed to perform specific task whenever we need it.

// There are three ways to make a function in javascript:
// 1. Function declaration = It is the old traditional way to create the function.In this we simple create the function using the "function keyword".It can also return the value by using the return keyword.It is hoisted.
/*
Syntax:
function function_name(parameter_list){
    // code
}
e.g. :
*/
// function greet(){
//     console.log("Hello");
// }
// greet();

// function add(a,b){
//     return a+b;
// }
// console.log(add(3,2));


// 2. Function Expression = It is one another method to write a function in this we create function with the help of an variable and the return value is stored in the variable.Further the variable name is used to call the function.Not hoisted.
/*
Syntax:
variable = fuction (parameter_list){
    //code
}
e.g. :
*/
// const func = function (){
//     console.log("Function Expression.");
// }
// func();

// const funcMul = function (a,b){
//     return a*b;
// }
// console.log(funcMul(1,2));


// 3. Arrow Functions = Arrow functions are introduced in the ES6 version.It is a consice way to create a function in a shorter way.They make our code more structure and readable.
// They are also called anonymous function i.e. function with no name but they can assigned to any variable to call it.
// Not hoisted.
// They are also called lambda function.
/*
Syntax:
varaible = () => {
    // code
}
*/

// const greather = (a,b) => {
//     return a>b?a:b;
// }
// console.log(greather(1,2));

// 4. Rest parameters = The javaScript rest parameter allows a function to accept an indefinite number of arguments as an array. It is represented by three dots (…) followed by the parameter name and must be the last parameter in the function, enabling flexible and dynamic argument handling.



// Practice problem:
// 1. Count vowels:
// const countVowels = (str) => {
//     count =0;
//     for(let it of str){
//         if(it == 'a' || it== 'e' || it=='i' || it=='o' || it=='u') count++;
//     }
//     return count;
// }
// let str= "SAHIL KUMAR";
// console.log(countVowels(str.toLowerCase()));


// 2. Hoisting =It is the special type of mechanism in javascript.In this mechanism the variable or function declaration moved top of their scope during the process of compilation.In simple terms,it is the concept that allow you to extract the variable or function before their initialization.This happen during the first phase of the execution content.
// If we talk about the variable = The variable created by using the "var" keyword is hoisted but the let or const keywords are not hoisted. e.g.:

// console.log(a);
// var a = 10;   // possible

// let a = 10;  // Not possible

// If we talk about the function = The function created by using the "function declaration" method is hoisted but the rest of the method includes the "function expression and the arrow funtions" cannot be hoisted. e.g.:

// hoistedFun();

// function hoistedFun(){console.log("I'm a hoisted function.");}


// Note = 1.Javascript is hoist declaration,not initialization



// 3. Map = It is a collection of items in the javascript where every items store in the form of key-value pair.It is created by using the "Map()" constructor.It can hold both the object and primitive data types as key or value.

// e.g. :
// let m1 = new Map([["Name","SahilKumar"],["RollNo",5]]);
// console.log(m1);


// Some of the method of map:

// 1. set(key,value) = To insert the new item in the map.
// let m2 = new Map();
// m2.set("name","SahilKumar");
// m2.set("RollNo",5);
// console.log(m2);
// console.log(m1.size);  // used to find the size.


// 2.has(key) = Used to find whether any specific item is present in the map or not.
// console.log(m2.has("name"));   


// 3.get(key) = Used to retrieve any specific key corresponding value which is present in the map.
// console.log(m2.get("name"));  


// 4.delete(key) = Used to delete any item.
// console.log(m2.delete("name"));   
// console.log(m2); 


// 5. clear() = Used to cleear all the map.
// m2.clear();
// console.log(m2);


// 6. keys() = Used to return the keys of the map in the form of objects.

// let mapKeys = m1.keys();
// console.log(mapKeys);
// console.log(mapKeys.next().value); 


// 7. values() = Used to return the values of the map in the form of objects.

// let mapValues = m1.values();
// console.log(mapValues);
// console.log(mapValues.next().value); 


// 8. entries() = Used to return the item of the map in the form of objects.

// let mapItem = m1.entries();
// console.log(mapItem);
// console.log(mapItem.next().value); 


// 4. Sets = It is the collection of unique items.It can be created by using the "set()" constructor.

let s1 = new Set("SSaahhiillKKuummaarr");
console.log(s1);

// Some of the properties:

// 1. size = Used to find the size of the current set.
console.log(s1.size);

// 2. add() = Used to add the items in the set.
s1.add("str");
console.log(s1);

// 3. delete() = Used to delete the items in the set.
s1.delete("str");
console.log(s1);

// 4. entries() = Used to retrieve the items in the set.
console.log(s1.entries());

// 5. has() = Used to check the items present in the set or not.
console.log(s1.has("S"));

// 6. keys() = Used to find the keys present in the set.
console.log(s1.keys());

// 7. values() = Used to find the values present in the set.
console.log(s1.values());


