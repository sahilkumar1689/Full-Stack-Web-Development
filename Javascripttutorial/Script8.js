// 1. JSON = The full form of json is JavaScript Object Model.It is basically a data format.It is very similar to the javascript object but the only different is that all key value pair are store in the form of string.Now we can easily convert javascript object in to json and vice versa using following methods:
// (i) stringify() = It is used to convert the javascript object into the json object.
// e.g.:
let object = {
    name:"Sahil Kumar",
    rollno:5
}

console.log(typeof(object));
console.log(object);

let jsonObject = JSON.stringify(object);
console.log(typeof(jsonObject));
console.log(jsonObject);


// (ii) parse() = It is used to covert the json object into the javascript object.
// e.g.:
object = JSON.parse(jsonObject);
console.log(typeof(object));
console.log(object);


// 2. Local Storage = Basically in javascript we have some local storage in the browser we can store any data in the browser local storage but in key value string format because in the local storage data store in the form of string.For storing data in the local storage we use a object called "localstorage" which call a method called setItem() to store data in the local storage. e.g.:
localStorage.setItem("Name","Sahil Kumar");
localStorage.setItem("Rollno","5");

//We can also store the object in the local storage but before storing firstly convert into the json object using stringify function.
let temp = {
    name:"Sahil",
    rollno:5
}

localStorage.setItem("temp",JSON.stringify(temp));

// We can also get data from the local storage using getItem method which take key as a parameter but you can change the format of the data:
let data1 = parseInt(localStorage.getItem("Rollno"));
console.log(typeof data1);

// We can also get object but we need to convert the json object in to the javascript object using the parse method:
let obTemp = JSON.parse(localStorage.getItem("temp"));
console.log(obTemp);

// We can also delete any value from the local storage using the removeItem method which take the key name as the parameter:
localStorage.setItem("del","deleteItem");
localStorage.removeItem("del");

// We can also clear whole data from the local storage using the clear methods:
// localStorage.clear();


// 3. Date = In javascript we have a date object which is used to retrieve the date and time.
let date = new Date();
console.log(date);

// We can alos have some methods:
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getMinutes());
console.log(date.getHours());


// Practice Question:
// 1. 
function greet(name){
    let tempDate = new Date();
    let hours = tempDate.getHours();
    let newElement = document.createElement("p");
    
    if(hours < 12){
        newElement.innerHTML = `Good Morning ${name}.`;
        btn.append(newElement);
    }
    else if(hours>=12 && hours<18){
        newElement.innerHTML = `Good Afternoon ${name}.`;
        btn.append(newElement);
    }
    else{
        newElement.innerHTML = `Good Night ${name}.`;
        btn.append(newElement);
    }
}

let btn = document.querySelector("#greet");
btn.addEventListener("click",()=>{
    greet("Sahil");
})


// 2. 
let countBtn= document.querySelector("#count");
let count= localStorage.getItem("count") || 0;
setColor();
function setColor(){
    countBtn.innerHTML = count;
    if(count%2==0){
        countBtn.style.backgroundColor = "lightgreen";
    }
    else countBtn.style.backgroundColor = "lightBlue";
}

countBtn.addEventListener("click",()=>{
    count++;
    localStorage.setItem("count",count);
    setColor();
})