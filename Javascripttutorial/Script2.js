// 1. Objects = Objects are the most important non-primitive data type of the javascript.It is used to store the different items in a single real world entity called object.
// There are two ways to create the object:
// 1. Objects Literals = In this we simple add the comma separated key-value pair in a couple of curley braces.
// e.g. :
// let student= {
//     name:"Sahil Kumar",
//     rollNo:5
// }

// We can extract the values by using dot notation or either by bracket notation.
// console.log(student.name);
// console.log(student["rollNo"]);


// 2. Object Constructor = In this we create a object dynamically using "new" keyword.
// e.g. :
// let std = new Object();
// std.name="Sahil";
// std.rollNo=5;

// Note = 1. There is no differene between the literal object or constructor object.
// 2. It is recommended to use the literal objects.



// 2. Strings = In javascript string are the sequence of characters generally used to represent the sentences.Also in javascript the strings are immutable it means not changeable.

// Some of the way to declare a strings are:

// 1. Using double quotes:
// let str = "Sahil Kumar";

// 2. Using single quotes:
// let str = 'Sahil Kumar';

// 3. String constructor = Basically string constructor are used to create the string objects.It provide the string to extra functionallity to store sentences and key-value pair.
// let str = new String("Sahil Kumar");

// // Now we can also add the key-value pair:
// str.rollno = 5;

// for(let it in str) console.log(it);

// Note = The general strings and the string constructors are not equal.

// 4. Template Literals = String templates literals are used to add the expression in the string with the help of back-ticks for dynamic string creation.
// let str1 = "Hello World";
// let str2 = `${str1} Sahil Kumar`;
// console.log(str2);

// Backticks also allow you to expand your string in the multiple line.
// let str = `Hello
// world`;
// console.log(str);


// Some of the string methods are:

// 1. length property = Used to find the length of the string.
// let temp = "Hello";
// console.log(temp.length);   


// 2. concat() method = To concatenate two strings.
// let str1 = "Hello",str2=" World";
// let str3 = str1.concat(str2);   // We can also use the "+" operator.
// console.log(str3);


// 3. substring(start,end) = It is used to extract the subtring from the origianl string.It take generally take two parameter the starting index value or the ending index value but the ending index value is exclusive.

// let str = "Hello my name is Sahil Kumar";
// console.log(str.substring(4,12));


// 4. slice(start,end) = Similar to the substring function used to extract substring,but in this the ending index is not compulsary.
// console.log(str.slice(4,12));
// console.log(str.slice(12));


// 5. substr(start,numberOfCharacters) = Used to extract the substring from the string but it take the starting index and the number of character needed from that starting index to be print.It is depricieated so not so much used.
// console.log(str.substr(5,5));


// // 6. replace(old,new) = It is used to replace the string or the part of the substring with the new string.
// let newStr = str.replace("my name is","My Name Is");
// console.log(newStr);    


// 7. replaceAll() = Used to replace all the old character to new.Similar to the replace().

// 8. toUpperCase() and toLowerCase() = Concert into upper case and lower case.


// 9. split() = Used to split the string at specific character and return the array of string.
// let arr = str.split(" ");
// console.log(arr);


// 10. trim() = Used to ignore the white spaces from start and end.

// 11. charAt() = Used to find the character at any specific index.
// console.log(str.charAt(10));

// 12. toString() = Used to convert any datatype in string.
// 13. parseInt() = Used to convert string into int.


//  Practice Problem:
// let userName = window.prompt("Please enter your name:");
// let userId = `@${userName}${userName.length}`;
// console.log(userId);



// 3. Array = Javascript array is a data structure that allow you to store the different types of data in a contigous memory location.

// There are two ways to declare an array:

// 1. Array Literals = Store array elements in a square backets.
// e.g. :
// let arr = [1,2,3,4,5];

// We can also change the value:
// arr[0]=2;

// We can access the element by using the index value:
// console.log(arr[0]);

// 2. Array constructor = Create the array objects.
// let arrObj = new Array(5);  // If you gave the single value in the parameter then it will considered as the length.
// let arrObj2 = new Array(1,2,3,4,5)  // If you gave mulitple value then it will considered as the elements.

// Because it is a object you can also add key value pair.

// 3. typeof both the above array are same i.e. object.It simply means that in javascript everything is object expect the premitive data types.And array is the specialized form of objects,which inherits the properties and method from the object prototype in ordered to handled ordered collection of data.

// Note = 1. It is recommended to use literal array.
// 2. Array is an object in javascript.


// Some of the methods of array:

let arr = [1];

// length property used to find the length of the array.
// console.log(arr.length);  


// 1. push() = It is used to add one or more elements at the end of the array and return the length of the updated array.
// e.g. :
arr.push(2);    //  we can also add one elements.
arr.push(3,4);  // We can also add more than one elements.
arr.push("Sahil",9.2,true);     // We can also add the objects.


// 2. pop() = Used to delete the element from the last from the array and return the deleted element.
// e.g. :
console.log(arr.pop());


// 3. unshift() = Similar to the push() but the only difference is add one or more than one elements in the front of the array.
// e.g. :
arr.unshift(0);
arr.unshift(-2,-1);


// 4. shift() = Similar to the pop() but the only difference is delete the elements in the front of the array.
console.log(arr.shift());


// 5. concat() = Used to merge one or more than one array with each other and return the updated array.It does'nt affect the original array.
let arr1 = [5,6];
let arr2 = [7,8];
let newArr = arr.concat(arr1,arr2);
console.log(newArr);


// 6. slice() = Used to extract the elements from the array from the starting and the ending index but the ending index is exclusive.
// console.log(newArr.slice(0,5));

// console.log(newArr.slice());     // If you don't give any parameter then it extract complete array.

// console.log(newArr.slice(1));   // If you don't give the ending index then it extract the complete array after the starting index.


// 7. splice(start,numberOfElementsRemove,newElements) = It is one of the important method of the array it is used to add , delete and replace the element from the array.It affects the original array.

// Add newElement:
newArr.splice(6,0,5);
console.log(newArr);

// Remove element;
newArr.splice(0,1);
console.log(newArr);

// Replace element:
newArr.splice(7,1,9.3);

newArr.splice() // If you don't give any argument then it do nothing.
newArr.splice(6);   // If you give only one argument then it delete the after elements.

console.log(newArr);


// 8. indexOf() = Used to find the index of any particular element from the array.
console.log(newArr.indexOf(3));


// 9. include() = Used to find whether any particular element present in the array or not.
console.log(newArr.includes(5));


// 9. sort() = Used to sort the array in ascending order but to sort the array in descending order we need to pass a comparator function.

let sortArr1=[5,4,3,2,1];
sortArr1.sort();
console.log(sortArr1);

// Some time this type of behaviour occur:
let sortArr2=[20, 5.2, -120, 100, 30, 0];
sortArr2.sort();
console.log(sortArr2);

// To solve this we need to create a comparator function:
function comp(a,b){
    return a-b;
}
sortArr2.sort(comp);
console.log(sortArr2);

// To sort the array in descending order we need to change the comparator function (a-b) to (b-a)


// 10. filter(comparatorFunction) = Used to create an array by taking the refrence from the other array only include those element which satisfy the comparator conditions.
let ageArr = [20,15,25,19];

// Comparator function:
function isValid(age){
    return age >=18;
}

let validArr = ageArr.filter(isValid);
console.log(validArr);


// 11. find(comp) = Used to return the first element value which specified the user defined conditions.
let findArr = [1,2,3,4,5,6,7,8];
function comp(a){
    return a>4;
}
console.log(findArr.find(comp));


// 12. findIndex(comp) = Similar to the find() but it return the index value.
console.log(findArr.findIndex(comp));


// 13. some(comp) = Used to return the boolean value whether atleast one of the array element satisfy the condition.
console.log(findArr.some(comp));

// 14. every(comp) = Similar to the some() but it check all the elements after that return boolean value.
console.log(findArr.every(comp));


// 15. flat(depth) = Used to flatten the nested arrays into one dimensional array.It take parameter of how much depth you need to flattern.By default value is 1 = 2D.
let nestedArr = [[1,[[2]]],[2,3],[4,5]];
console.log(nestedArr.flat(3));


// 16. flatMap = It is the combination of flat and map function.
let temp=["Hello", "world", "how", "are", "you"];

let temp1 = temp.flatMap((word) => word.split(''));
console.log(temp1);


// 17. fill(value,start,last) = Used to fill the array with the static values from starting to ending index where ending index is exclusive.
let fillArr = [1,2,3,4,5];
fillArr.fill(1,1,5);
console.log(fillArr);


// 18. reverse() = Used to reverse the array.
let reverArr = [1,2,3,4,5];
reverArr.reverse();
console.log(reverArr);


// Additional Concepts:

// 1. Array Destructuring = It is the mechanism of javascript to extract the multiple data or properties from the array or object and store in the different variable.It simplyfies the process of unpacking data store in the array or object.

// In the case of array the order matters but variable name does'nt matters.
// e.g:
let destArr = [1,2,3,4,5];

let [a,b,c,d,e] = destArr;

console.log(a,b,c,d,e);

// 2. Object Destructuring = In the case of object destructuring the order does'nt matters but the variables name matter i.e. the variable name is equal to the key name.
// e.g.:
let destObj = {
    Name:"Sahil",
    rollno:5
}

let {rollno,Name} = destObj;
// Internally rollno = destObj.rollno or name = destObj.name;

console.log(Name,rollno);

// 2. Object = It is used to assess the keys and values separately from the objects.
// e.g.:

let objTemp = {
    name:"Sahil",
    rollno:"5"
};

console.log(Object.keys(objTemp));
console.log(Object.values(objTemp));


let objArr = [1,2,3,4,5,{greet:"hello"}];

console.log(Object.keys(objArr));
console.log(Object.values(objArr));






