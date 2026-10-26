// Javascript = It is a light weight , cross platform , interpreted compiled programming language.It is also called scripting language,where scripting language means that the language which executed by using the interpreter.It is used to develop web pages but some non browser environment also use it.
// Javascript is a dynamically typed language,where dynamically typed means that data type checking occur at runtime.It means variable does'nt required explicitly data type declaration.The interpreter automatically set the data type at runtime based on the value store init.Javascript can be used for both client side and server side development.
// It was created by the Brendan Eich in 1995 in just ten days,firstly named Mocha,after that Livescript and finally javascript.


// console.log() property is used to display data in the console.
// console.log("Hello World!");



// 1. Variables = It is the name of the memory location in which data stored.We know that javascript is a dynamically typed language so there is no need to declare the data type explicitly with the variable.But we declare a variable by using var,let,const keyword.

// 1. var Keyword = Variable declared by using "var" keyword can be declared and update anytime in your document.Also it has a global scope.
// e.g. :

// var a=4;
// a=5;    // We can update the value.
// console.log(a);
// var a=10;       // We can also re-declare.     
// console.log(a);


// 2. let keyword = Variable declared by usign the "let" keyword can'nt be declared but its value can be update.Also it has a block scope.It is highly recommended to use this keyword in javascript.
// e.g. :

// let b=5;

// b=10;       // We can update the value.
// // let b=10; // not possible

// console.log(b);



// 3. const keyword = Variable declared by using the "const" kewyword can'nt be declared also can'nt be update.Also it has a block scope.
// e.g. :

// const c=5;

// // c=10;        // Value update not possible
// // const c=10;  // Redeclare not possible

// console.log(c);


// Types of variable = There are two types of variable in the javascript:
// 1. Local Variable = When declared inside a block or a function and they only accessible inside the block not outside.
// e.g. :

// {
//     let x = 10;
//     console.log(x);
// }
// console.log(x); // Not possible

// 2. Global Variable = When declared outside the block and can be accesible by all inside the document.
// e.g. :

// let y=16;

// {
//     console.log(y);
// }

// console.log(y);



// 2. Data Type = There are two types of data types in javascript:
//  1. Premitive data type = These are those data type which are already declared inside the javascript,it is also called built-in data type.There are 7 primitive data type in javascript.Number,string,boolean,null,undefined,symbol,bigint.
// All the premitive data types are created the deep copy it means if we assign the one variable value to the other they created at two different memory location.
/* e.g.:
let a = 10;
let b = a;
a = 15

Then Output is :
a = 15 , b= 10

*/ 

// 2. Non-premitive = These are also called user defined data type.Basically non-premitive data type are derived by using the primitive data type.eg = Objects,array,sets,etc.
// Generally speaking everything in javascript is an objects except the premitive data types including the array.
// All the non premitive data types are created the shallow copy it means if we assign the one variable value to the other then they does not create the two different memory location they simply give the reference to the same memeory location , which result if we change in  one variable value the value of the second automatically changes because they pointing to the same location.
/* e.g.:

let arr1 = [1,2,3,4,5];
let arr2 = arr1;
arr1[3] = 4;

*/



// 3. Operators = Operators are the symbols which are used to manipualte the data.
// Some of the important operators are:
// 1. Arithmetic Operator = +,-,*,/,%,**(to find the power),++,--.
// 2. Assignment Operator = =,!=,+=,-=,*=,/=,%=,**=.
// 3. Relational Operator = ==,===(Used to compare with value and data type),!=,!==,>,<,>=,<=
// 4. Logical Operator = &&,|| ,!.
// 5. Bitwise Operator = &,|,~,^,<<,>>,>>>
// 6. Ternary Operator



// 4. Conditional Statements = Conditional statements are used to control the execution of code,it means that code execute on the basic of some specific conditions.
// Some of the conditional statements are:

// 1. if:
// let temp=3;
// if(temp>5){
//     console.log("A is greater than 5."); 
// }


// 2. if-else:
// let age = window.prompt("Please enter the age:");    // Used to take input from the user in javascript.
// if(age>=18){
//     console.log("You can drive.");
// }
// else console.log("You can'nt drive.");

// Note = The input comes from the prompt() method is string in data type,so you need to aware of that.



// 3. if-else-if ladder:
// if(age==18){
//     console.log("You can drive.");
// }
// else if(age>18){
//     console.log("Definately derive.");
// }
// else console.log("You can'nt drive.");


// 4. Nested if-else:
// let num1=1,num2=2,num3=4;

// if(num1>num2){
//     if(num1>num3){
//         console.log(num1+" is the greather number.");
//     }
//     else console.log(num3+" is the greather number.");
// }else{
//     if(num2>num3){
//         console.log(num2+" is the greather number.");
//     }else{
//         console.log(num3+" is the greather number.");
//     }
// }



// 5. Switch Case
// window.alert("Switch Case Start.");    // Used to give pop up alert message in window.

// let day = "Wednesday";

// switch(day){
//     case "Monday":
//         console.log("Day is Monday.");
//         break;
//     case "Tuesday":
//         console.log("Day is Tuesday.");
//         break;
//     case "Wednesady":
//         console.log("Day is Wednesady.");
//         break;
//     case "Thursday":
//         console.log("Day is Thursday.");
//         break;
//     case "Friday":
//         console.log("Day is Friday");
//         break;
//     case "Saturday":
//         console.log("Day is Saturday.");
//         break;
//     default:
//         console.log("Day is Sunday.");
//         break;
// }


// 5. Loops = Loops are used to execute the block of code again and again.
// There are 7 types of loop in javascript:
// 1. For loop = Also called exit controlled loop.
/*
Syntax:
for(initialization;condition;updation){
    // code
}
*/

// for(let i=0;i<=5;i++) console.log(i);


// 2. While loop = Also called entery controled loop.
/*
Syntax:
initialization;
while(condition){
    // code
    updation;
}
*/

// let num=0;
// while(num<5) {
//     console.log(num);
//     num++;
// }

// 3. do-While loop = Similar to the while,but it execute code before checking.
/*
Syntax:
initialization;
do{
    // code
    updation;
}while(condition);
*/

// num=0;
// do{
//     console.log(num);
// }while(num>0);


// 4. for-of loop = Similar to the for each loop in the c++ and java used to iterate in the iterable objects e.g. array,string,etc.
/*
Syntax:
for(initialization of object_name){
    // code
}
*/
// let str = "Hello";
// for(let it of str) console.log(it);


// 5. for-in loop = Used to iterate in the object keys.
/*
Syntax:
for(initialization in object_name){
    // code
}
*/

// const obj = {
//     name : "Sahil Kumar",
//     Rollno : 5
// }

// for(let it in obj) console.log("Keys is = ",it,",Value is = ",obj[it]);

// 6. For-each loop = Basically the for-each loop is the method of the array that execute a call back function for each element.It does'nt return anything.
/*
Syntax:
array_name.forEach(funtion_call());
*/

// let arr = [1,2,3];
// let copy=[];
// arr.forEach(function(it){
//     copy.push(it);
// });
// for(let i of copy) console.log(i);

// 7. map loop = Map loop is a method of the array that create a new array after executing the call back function for each element.

// let arr1=[1,2,3];
// let newarr=[];
// newarr = arr1.map(it => it*2);
// for(let it of newarr) console.log(it);


// Practice question:

// 1. Print all the even numbers from 0 to 100;
// for(let i=0;i<=100;i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// // 2. Make a number guessing game:

// let min = window.prompt("Enter the lower range:");
// let max = window.prompt("Enter the upper range:");
// let rand = Math.floor(Math.random()*parseInt(max))+parseInt(min);
// console.log(rand);
// let numberofguess=1;
// let guess = window.prompt("Random number is generated between " + min + " and " + max +" \n Please guess the number:");
// while(parseInt(guess)!=rand){
//     if(parseInt(guess)<rand){
//         guess = window.prompt("Your guess number is smaller than the generated number"+" Please guess the number again:");
//         numberofguess++;
//     }
//     else{
//         guess = window.prompt("Your guess number is larger than the generated number."+"\n Please guess the number again:");
//         numberofguess++;
//     }
// }

// window.alert("Hurry,You guess the right number."+"\n You take "+numberofguess+" moves to guess it.");






