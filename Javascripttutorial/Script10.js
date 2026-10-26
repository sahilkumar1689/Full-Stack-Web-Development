// Additional Topics:

// 1. Console = It is a javascript object which provides access to the browser debugging console.
// Most of the commonly used console methods are:
// 1. log() = Used to log some message.
// 2. error() and warn() and info() = Used to print some error message and warn message and informational message respectively.
// 3. table() = Used to print the data in the tabular format.
// e.g.:
// console.table(["apple","mango","litchi"]);
// 4. group() and groupend() = Used to group the messages.

// 2. Difference between Null and undefined:
// Null = Is a standalone value.It means the variable declared as well as intentionally empty.Also typeof null is object.
// Undefined = It simply means the variable is assigned but not declared.

// 3. There is a difference between in the working of "==" and "any comparison operator". The "==" operator check the values of the variable but the comparison operator firstly converts it into number then check.
// e.g. :
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// 4. "==" = It only check the values.
//  "===" = It check the values and datatypes.

// 5. Stack Memory = All the premitive datatypes are stored in stack memory.And it uses call by value method.It means only deepcopy technique used.
// Heap Memory = But all the non-premitive datatypes are stored in heap memory.It uses call by reference method.It means shallow copy and deepcopy techniques are used.

// 6. Number = There are two ways to declare a number.Using automatic or using Number constructor.The number constructor type is object.

// let n1 = 123;
// let n2 = new Number(n1);
// console.log(n1,n2);
// console.log(typeof n1);
// console.log(typeof n2);

// There are two main function of Number constructor:
// 1. toFixed() = Used to start fixing the digits after decimal values.
// 2. toPrecision() = Used to start fixing the digits before decimal values.

// Note = 1. Both type of declaration are able to used that method.
// 2. Because the Number is a object so you can add key value pair in it.But not recommended because you are not able to acces the number individually.
// n2.name = "Sahil";
// console.log(n2);

// for(let it in n2) console.log(it);

// 3. Formula to generate the random value =  Math.floor((Math.random()*(max-min+1)))+min;

// 7. How to add symbol in the object keys= Adding symbols to objects in JavaScript can be a powerful way to create unique property keys that won't conflict with other keys.
// const symbol1 = Symbol('key1');
// const symbol2 = Symbol('key2');

// const obj = {
//   [symbol1]: 'value1',
//   [symbol2]: 'value2'
// };

// console.log(obj[symbol1]);
// console.log(obj[symbol2]); 

// Note = 1. When you create a object using literals it create a non-sigliton object.But when you create a object using Object constructor it create a singliton object.This is the only difference between them.


// 8. Objects Methods:
// 
// 1. You can also freeze your object so that no changes occur in future
// Object.freeze(objName);

// 2. assign(target,sourse) = It is used to concat two object and return new object
// let obj1 ={1:"1",2:"2"};
// let obj2 ={3:"3",4:"4"};

// let obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

// You can also concat using the spread operator:
// let obj3 = {...obj1,...obj2};
// console.log(obj3);

// 3. Object.keys(objName) and Object.values(objName) = Used to find out all the keys and values and return a array respectively.

// 4. Check whether any key present in the object or not:

// let obj1 ={1:"1",2:"2"};

// console.log(obj1.hasOwnProperty("1"));

// 5. Properties descriptor in Object = Property descriptors control how properties behave.A property descriptor provides detailed information about a property in an object, such as whether it can be modified, enumerated, or deleted.

// So we can check any object properties descriptor values using the getOwnPropertyDescriptor(objectName,PropertyName);
// let obj={name:"Sahil",
//     rollNo:5
// };
// console.log(Object.getOwnPropertyDescriptor(obj,"name"));
// console.log(Object.getOwnPropertyDescriptors(obj));

// We can also defines our own descriptor properties using the defineProperty(ObjectName,PropertyName,descriptorObject) function.

// Object.defineProperty(obj,"name",{
//     writable:false,
//     enumerable:false
// })



// 9. Some time we directly change the inner html using the innerHtml property.I know it is easy but it is not a optimised approach instead of doing this you can also create element using javascript and after that append or remove that element.
// e.g. Optimized approach:
/*


let divEl = document.createElement("h1");
divEl.appendChild(document.createTextNode("Hello"));

After that you can append or remove wherever you want.

*/


// 10. In the addEventListner() function we have three parameter:
// 1. Type = Name of the event you want to listen.
// 2. Listner = It takes a function that need to be called when the event is triggered.
// 3. propagation = default value is false.
// false - The handler is executed in the bubbling phase.It means the event listener executed inside to outside.For eg. let say we add event listner on both the parent and the child div after that if try to click on the child element firstly the child element listner is executed after that the parent listener is executed.

// true - The handler is executed in the capturing phase.It means the event listener executed outside to inside.For eg. let say we add event listner on both the parent and the child div after that if try to click on the child element firstly the parent element listner is executed after that the child listener is executed.

// Event Daligation = It means handling the events efficientlly by attaching the single listner to its parent element.E.g. = Let say we have a parent div and inside them we have more than one child elements so instead of creating an event listner for all the child elements we create only one element to its parent div after that simply handle the event using the "target" property of the event object.

// 11. Function is an object, Yes function is an object in javascript.You already know the functional constructor but you can also treat function as an object.

// function temp(name){
//     return name;
// }

// temp.rollNo = 123;

// console.log(temp("Sahil"));
// console.log(temp.rollNo);

// 12. Getter and setter = Getters and setters are defined using the get and set keywords respectively. When you define a getter or setter, you are actually defining a method that is associated with a particular property of an object.

// e.g. :
// class emp{
//     constructor(name,rollNo){
//         this.name = name;
//         this.rollNo = rollNo;
//     }

//     set name(nm){
//         this._name = nm;
//     }
//     get name(){
//         return {nm:this._name,roll:this.rollNo};
//     }

// };

// let e1 = new emp("Sahil",5);
// console.log(e1.name);

// 13. PolyFill = In JavaScript, a polyfill is a code implementation that provides modern functionality in older environments where it might not be available. Essentially, it fills the gap for missing features by mimicking how they work in newer JavaScript versions.

// 1.Bind(ObjectName) = The Bind() Method creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method, and if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called.

// let nameObj = {name:"Sahil"};

// let tempObj = {
//     name:"lkdjfl",
//     printName: function(){
//         console.log(this.name);
//     }
// };
// let obj = tempObj.printName.bind(nameObj);

// obj();

// 2. Call(ObjectName,Parameters) = The Call() Method calls the function directly and sets this to the first argument passed to the call method and if any other sequences of arguments preceding the first argument are passed to the call method then they are passed as an argument to the function.

// let nameObj = {name:"Sahil"};

// let tempObj = {
//     name:"lkdjfl",
//     printName: function(roll1,roll2){
//         console.log(this.name,roll1,roll2);
//     }
// };
// tempObj.printName.call(nameObj,5,7);

// 3. apply(ObjectName,arrayOfParameter) = The Apply() Method calls the function directly and sets "this" to the first argument passed to the apply method and if any other arguments provided as an array are passed to the call method then they are passed as an argument to the function.

// let nameObj = {name:"Sahil"};

// let tempObj = {
//     name:"lkdjfl",
//     printName: function(...rollArr){
//         console.log(this.name,rollArr);
//     }
// };
// tempObj.printName.apply(nameObj,[5,10]);

// 14. Spread operator only create deepcopy only at first level , but above that it create the shallow copy.
// e.g. :

// let obj1 = {
//     a:1,
//     b:2,
//     c:{a:3}
// }

// let obj2 = {...obj1};

// obj1.c.a = 2;

// console.log(obj1);
// console.log(obj2);

// 15. Interesting fact about map 

// let arrObj =[{a:"1"},{a:"2"},{a:"3"}];

// The "elem" is connected with the arrObj , if we try to change it then it also affected the original arr;
// let newArr = arrObj.map((elem,idx)=>{
//     elem.a = "10";
//     return elem;
// })

// To prevent it try to use spread operator
// let newArr = arrObj.map((elem,idx)=>{
//     return {...elem,["a"]:"10"};
// })


// console.log(newArr);
// console.log(arrObj);

























