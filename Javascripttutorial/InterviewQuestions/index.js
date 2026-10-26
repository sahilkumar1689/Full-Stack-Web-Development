// 1. Check whether the given input is array or not:
// Method 1:
// function CheckArray(input) {
//     return (Array.isArray(input));
// }
// console.log(CheckArray([1]));
// console.log(CheckArray(1));

// Method 2:
// function CheckArray(input) {
//     return (input instanceof Array);
// }
// console.log(CheckArray([1]));
// console.log(CheckArray(1));


// 2. Try to find the output of the following code:

// let arr=[];

// for(var i=0;i<10;i++){
//     arr.push(function(){
//         setTimeout(()=>{
//             console.log(i);
//         },1000);
//     })
// }

// for(let i=0;i<10;i++){
//     arr[i]();
// }

// 3. Varitation 1 =  Take an "arary" and "n" as parameter where "n" is the default parameter.And try to print the first "n" element of the array.If "n" not given return only first element of the array.If n>arr.lenght then print all the array elements:

// function getFirstElement(arr,n=1){
//     // Method 1:
//     // if(n<=arr.length){
//         //     for(let i=0;i<n;i++) console.log(arr[i]);
//         // }
//         // else{
//             //     for(let i=0;i<arr.length;i++) console.log(arr[i]);
//             // }
//     // Method 2:
//     // let i=0;
//     // do{
//     //     console.log(arr[i]);
//     //     i++;
//     // }while(i<arr.length && i<n);
// }


// getFirstElement([1,2,3]);
// getFirstElement([1,2,3],2);
// getFirstElement([1,2,3],4);


// Varitation 2 =  Take an "arary" and "n" as parameter where "n" is the default parameter.And try to print the last "n" element of the array.If "n" not given return only last element of the array.If n>arr.lenght then print all the array elements:


// function getLastElement(arr,n=1){
//     let last = arr.length-1;
//     do{
//         console.log(arr[last]);
//         last--;
//         n--;
//     }while(last>=0 && n!=0);
// }

// getLastElement([1,2,3]);
// getLastElement([1,2,3],2);
// getLastElement([1,2,3],4);


// 4. Try to create a custom join function that take the array and the joined parameter and return the joined array elements.

// function joinArr(arr,joinedParameter){
//     return (arr.join(joinedParameter));
// }

// console.log(joinArr(["Ref","Green","Blue","White","Black"],","));
// console.log(joinArr(["Ref","Green","Blue","White","Black"],"+"));

// 5. Your given an array which contains some names and your task is to create a new array which contains all the name whice does'nt contains "a" in their value:

// let arr = ["Pam","Ram","Vite","Geet"];

// console.log(arr.filter((elem)=>!(elem.includes("a"))));

// 6. Your given an array which contains some names and your task is to create a new array which contains all the name whice does'nt contains 2 or more than 2 "a" in their value:

// let arr = ["Pama","Ram","Vitea","Geetaa"];

// console.log(arr.filter((elem)=>{
//     let len = elem.split("a").length;
//     return len <= 2;
// }));

// 7. You given a string and your task is to reverse every sentence in the string.

// let str = "Hello World";
// console.log((str.split(" ").map((sentence,idx)=>{
//     return sentence.split("").reverse().join("");
// })).join(" "));

// 8. How to empty an array without using pop:

// let arr = [1,2,3,4,5];
// console.log(arr.length);
// arr.length = 0;
// console.log(arr.length);

// 9. How to check wheter the given number is an integer or not:
// let a = 12.5;
// // Method 1:
// console.log(Number.isInteger(a));
// // Method 2:
// console.log((a%1===0)?1:0);


// 10. Create a function to reverse a number:

// let a=12345;

// Method 1:
// function reverseNum(a){
//     let ans =0;
//     while(a>0){
//         let last = a%10;
//         ans = (ans*10) +last;
//         a = Math.floor(a/10);
//     }
//     return ans;
// }

// console.log(reverseNum(a));

// Method 2 :

// function reverseNum(a){
//    return (a.toString()).split("").reverse().join("");
// }

// console.log(reverseNum(a));

// 11. Given an string and sort in the alphabetical order:

// let str = "apple";

// console.log(str.split("").sort().join(""));

// 12. Given an string and convert each sentence first world in the capital Letter:

// let str = "hello javascript world";

// console.log(str.split(" ").map(sentense=>{
//     return sentense[0].toUpperCase() + sentense.substring(1);
// }).join(" "));

// 13. Given a string and count the occurance of each letter:

// let obj={};

// let str = "apple";

// for(let i=0;i<str.length;i++){
//     if(!(obj.hasOwnProperty(str[i]))){
//         obj[str[i]] = 1;
//     }
//     else{
//         obj[str[i]]++;
//     }
// }

// console.log(obj);

// 14. Given an array of string and number but add only numbers:

// let arr = ["hi","hello",123,"hehehe",555];

// let sum=0;

// arr.forEach((elem)=>{
//     (typeof elem === "number")?sum+=elem:"";
// }
// )

// console.log(sum);


// 15. Loop an array of object and remove all the objects which does not contains the gender property male:

// let arr = [
//     {name:"hello",gender:"male"},
//     {name:"yellow",gender:"female"},
//     {name:"haao",gender:"male"},
//     {name:"hee",gender:"female"},
//     {name:"Yep",gender:"male"},
// ]

// for(let i=0;i<arr.length;i++){
//     if(arr[i].gender !== "male"){
//         arr.splice(i,1);
//         i--;
//     }
// }

// console.log(arr);

// 16. Find the most frequent element in the array:

// let arr = [1,2,3,4,5,1,2,2,3,3,4,4,5,5,5];

// let obj ={};

// arr.forEach(elem=>{
//     if(!obj.hasOwnProperty(elem)) obj[elem] = 1;
//     else obj[elem]++;
// })

// console.log(Object.keys(obj).reduce((acc,curr)=>{
//     return obj[acc]>obj[curr] ? acc : curr;
// }))

// 17. Suffle the array elements:


// let arr = [1,2,3,4,5,6,7,8,9];

// for(let i=arr.length-1;i>0;i--){
//     let j = Math.floor(Math.random()*(i+1));
//     [arr[i],arr[j]] = [arr[j],arr[i]];
// }

// console.log(arr);

// 18 . Union the two array elements:

// function unionArr(arr1,arr2){
//    return [...new Set((arr1.concat(arr2)))];
// }

// console.log(unionArr([1,2,3],[3,2,4,5]));

// 19. Write a program to find the largest word in the given sentence:

// function getLargestWord(sentence){
//     let maxObj = {
//         word:"",
//         maxlength:-1
//     }
//     sentence.split(" ").forEach((word,idx)=>{
//         if(word.length > maxObj.maxlength){
//             maxObj.word = word;
//             maxObj.maxlength = word.length
//         }
//     })
//     return maxObj.maxlength ? maxObj.word:"No Word Found" ;
// }

// console.log("Largest Word is:",getLargestWord("Hello ji hi ji how do you do"))

// 20. Check whether the string is palindrme or not:

// function checkPalindrome(str1,str2){
//     if(str1.length !== str2.length){
//         return false;
//     }

//     str1 = str1.toLowerCase();
//     str2 =  str2.toLowerCase();

//     // Method1:

//     // let i = str1.length-1;
//     // let j = 0;

//     // while(i >0 && j<str2.length){
//     //     if(str1[i] !== str2[j]){
//     //         return false;
//     //     }
//     //     i--;
//     //     j++;
//     // }

//     // return true;

//     // Method2:
//     let str1Temp = str1.split("").reverse().join("");
//     // console.log(str1Temp);

//     return str1Temp === str2;

// }

// console.log("Is Palindrome:",checkPalindrome("NamanL","namaNG"))

//21. Check whether the two string are anagram or not:

// function checkAnagram(str1,str2){
//     if(str1.length !== str2.length){
//         return false;
//     }

//     // Method 1:
//     // str1 = str1.split("").sort().join("");
//     // str2 = str2.split("").sort().join("");

//     // return str1 === str2;

//     // Method 2:
//     let arr1 = new Array(26).fill(0);
//     let arr2 = new Array(26).fill(0);

//     for(let i=0;i<str1.length;i++){
//         // Convert to lowercase and get character code
//         let charCode = str1[i].toLowerCase().charCodeAt() - 'a'.charCodeAt();
//         // console.log(str1[i].charCodeAt())
//         arr1[charCode]++;
//     }
//     for(let i=0;i<str2.length;i++){
//         let charCode = str2[i].toLowerCase().charCodeAt() - 'a'.charCodeAt();
//         arr2[charCode]++;
//     }

//     for(let i=0;i<26;i++){
//         if(arr1[i] !== arr2[i]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log("Anagram :",checkAnagram("abcd","dcba"));

// 22. Write a function to remove the duplicate elements from the array:

// let arr = [1,2,3,3,4,4,5];

// let str1 = "sahilKumarSahilKumar";

// Method 1:

// let newArr = [...new Set(str1)].join(""); // used for string 

// let newArr = [...new Set(arr)]; // used for array 

// console.log(newArr);


// Method 2:

// let storeMap = new Map();

// for(let i=0;i<arr.length;i++){
//     if(storeMap.has(arr[i])){
//         arr.splice(i,1);
//         i--; // In order to handle the size of the array.
//     }
//     else{
//         storeMap.set(arr[i],1);
//     }
// }

// console.log(arr);



/*
Short Notes:

// 1. Array Important Methods:

push(),pop(),unshift(),shift()

concat(),slice(startIdx,lastIdx:exclusive,notCompulsary),splice(startIdx,NoOfElementRemove,NewElementValue)

includes(),indexOf(),find(),findIndex()

sort(),reverse(),filter(),map(),forEach(),fill().

// 2. String Important Methods:

concat()

substring(startIdx,endIdx:exclusive),slice(startIdx,endIdx:exclusive,notCompulsary)

split(),join(),includes(),indexof()

replace(),replaceAll(),toUpperCase(),toLowerCase(),toString(),parseInt(),trim(),charAt()

charCodeAt() // Used to get the corresponding ASCII value.

*/ 





 