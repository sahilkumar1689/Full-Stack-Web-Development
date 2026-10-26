// DOM = It stands for Document Object Model.It is a platform and language-neutral interface that allow program and script to dynamically access and update the content , structure, style of a document.It is basically a world wide web consortioum standard which further separated in to three part:
// 1. core DOM = Standard model for all document type.
// 2. XML DOM = Standard model for XML documents.
// 3. HTML DOM = Standard model for html documents.


// HTML DOM = Generally when a web page is load, the browser creates a document object model of the page called html DOM.It is the standard of how the elements retreive , change , add ,delete from the html document dynamically.

// In simple term, firstly we have a "window" object which is a global object of every browser it include lots of methods and propeties.Inside this "window" object we have an another object called "document" object which store all the methods and properties of the html document.It means that with the help of "document" objects our javascript can easilly interact with the html document and make changes possible at runtime.
// e.g. :

// console.dir(window);  // dir is used to see all the methods and property of any object.
// console.dir(window.document.body);

// Generally when we load our html page all the html content are stored in the form of object name called "document" in the gloabal "window" object and inside the "document" object we have all the inforamtion about the html file it means it incude head as a object and body as a object and futher the heirachcy will go on in the tree type format.
// console.log(document.body.children[0].innerHTML);


// DOM Manipualtion = In this we talk about some of the methods and properties of the document object because the "document" object is the owner of all object in the html document.So,whenever we need to access any element in the html page we start accessing with the help of document object.


// 1. Some of the methods of the document object to select the element from the html file are:

// 1. getElementById(id_name) = Used to select any specific element with the help of their id.After that if element found it return the element tag as a object.

const first = document.getElementById("first_child");
console.log(first);


// 2. getElementsByClassName(class_name) = Used to select more than one elements by using their class name.After that if elements found it return a list of elements called html collection.HTML collection is similar to the array we can traverse easily using loop but not use the array methods on them.

const collection = document.getElementsByClassName("temp_Class");
console.log(collection);   

for(let it of collection){
    it.style.color = "red";
}


// 3. getElementByTagName(tag_name) = Used to select more than one elements by using their tag name.After that if elements found it return a list of elements called html collection.

const tags =document.getElementsByTagName("div");
console.log(tags);

for(let it of tags){
    it.style.background = "aqua";
}

// 4. Select elements by using the cssSelector methods:

// (i) querySelector() = It is used to select the first element either with the help of id or class or tag name using css format.
const query = document.querySelector("#first_child");
query.style.color = "green";


// Clearly see it select only the first child.
const classQueries = document.querySelector(".temp_Class");
classQueries.style.background = "pink";


// Clearly see it select only the first child div tag:
const tagQueries = document.querySelector("div");
tagQueries.style.fontSize= "20px";


// (ii) querySelectorAll() = It is used to select all the elements and after that return a nodelist.Nodelist is also similar to the array we can easily traverse but we can'nt use any array method.

const allclass = document.querySelectorAll(".temp_Class");
console.log(allclass);

for(let it of allclass){
    it.style.fontSize = "20px";
}


// 2. Some properties of the document object:

// 1. tagName = Used to return the tag name of the selected element.

console.log(document.getElementById("first_child").tagName); 

console.log(document.querySelector("#first_child").tagName);   

// 2. innerText = Used to return the text content of the selected element and their child element.

console.log(document.getElementById("nav").innerText);

console.log(document.querySelector("#nav").innerText);


// 3. innerHtml = Used to return the html content of the element.

console.log(document.getElementById("nav").innerHTML);

console.log(document.querySelector("#nav").innerHTML);


// 4. textContent = Used to find the inner content of the hidden elements.

console.log(document.getElementById("hidden").textContent);

console.log(document.querySelector("#hidden").textContent);


// 3. We can also change inner content of any element:

// 1. Changing the inner html:
// document.getElementById("nav").innerHTML = "<p>Nav Menu:</p> <ul> <li>Home</li> <li>About</li> <li>Contact</li></ul>"

// document.querySelector("#nav").innerHTML = "<p>Nav Menu:</p> <ul> <li>Home</li> <li>About</li> <li>Contact</li></ul>"


// 2. Changing the inner text:

// document.getElementById("nav").innerText = "Navigation Bar:"

// document.querySelector("#nav").innerText = "Navigation Bar:"


//  3. Change the attribute of the selected element:

// document.getElementById("tempimg").src = "/Htmltutorial/Project2/image.jpeg";

// document.querySelector("#tempimg").src = "/Htmltutorial/Project2/image.jpeg";


// You can also set or get the elements attribute by using the methods:
// let attr = document.getElementById("tempimg").getAttribute("src")
// console.log(attr);

// document.getElementById("tempimg").setAttribute("src","/Htmltutorial/Project2/image.jpeg")


// 4. Change the styling properties:

// There are three ways to change the styling of the element:

// 1. Using style method = In this you can add any of the css property:
// document.getElementById("tempimg").style.width = "500px";
// document.querySelector("#tempimg").style.width = "500px";

// 2. Using style.cssText method = By using this technique we can get and set multiple inline css properties in one go.

// document.querySelector("").style.cssText = "border:2px solid black;
//  width:100px;
// "

// 3. classList method = It is the widely used and recommended method to set the styling it is used to set,get or remove the custom css class from the element.It can also add and remove multiple css classes.
// It contains add("className1","className2",...)
// remove("className1","className2",...)
// toggle("className1","className2",...)
// etc.


// 4. Methods to create new elements in javascript and add dynamically in the html file:

// 1. createElement(name) = Used to create the new element in the javascript.
let newBtn = document.createElement("button");
// Now we can add text in it:
newBtn.innerHTML ="<i>Click</i>";
// Similary we can do anything with the button we can change their attribute,styling,innerText,etc.


// 5. Methods to add new elements in the html file dynamically:

// 1. append() = Used to add new element inside the div but at the last.
// document.getElementById("temp").append(newBtn);

// 2. prepend() = Used to add new element inside the div but at starting.
// document.getElementById("temp").prepend(newBtn);

// 3. before() = Used to add outside any element and before it.
// document.getElementById("temp").before(newBtn);

//  4. after() = Used to add outside any element and after it.
document.getElementById("temp").after(newBtn);

// 5. remove() = Used to delete any element from the html file dynamically.
document.getElementById("tempimg").remove();


// 6. appendchild() = Used to insert at the last of the list.
let li = document.createElement("li");
li.innerHTML = "Contact Us";
document.querySelector("#temp ul").appendChild(li);

// 7. removechild() = Used to remove any child element from the list.
let removelist = document.querySelector("#temp ul");
removelist.removeChild(removelist.lastChild);


// Some of the list methods and properties:
/*
1. firstchild = return the first child of any list.
2. lastchild = return the last child of any list.
3. firstElementChild = Similar to the firstChild.
4. lastElementChild = Similar to the lastChild.
5. childNode[n] = Used to access any child node.
*/


// Practice question:
// 1. 
let btn = document.createElement("button");
btn.innerHTML="click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
document.body.prepend(btn);

// 2.Use classList property to append more than one class in the element:
document.querySelector(".class1").classList.add("class2");
document.querySelector(".class1").classList.remove("class2");


