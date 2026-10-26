// 1. Events = When object change their state from one to another is called events.The event can be occured due to any reasons it may be occur because of user interaction with the webpage or also occur because of some underlaying environment e.g. screen size,low battery,etc.
// Some of the user defined events are:
/*
1. mouse event
2. keyboard event
3. form event
4. print event and many more.

Now all these event have some properties and methods e.g. = mouse event have "click","mouseover" property and keyboard event have "keydown","keyup" property.
You can check all the events and their property in the "mdn-event-refrence"documentation.
*/ 

// 2. Event handler = Event handler are used to handle occured event.It means after clicking the button what we want we can handle it.

// Now there are two types of event handlers:

// 1. inline event handler = In this we use the event properties as a element attribute and handle them as in-line js.

// There are two methods to write the in-line handler.
// e.g. :
// see in the html2 file.
function func(elem){
    elem.innerText = "Hello";
}
// Disadvantage = Html file becomes very bulky.

// 2. External event Handler = In this we can handle the events inside in the javascript file.In this we firstly select the element and after that we use any event property and after that we can initialize it with function which can handle the event.
// e.g. :
let btn = document.querySelector("#external");
btn.onclick = ()=>{
    btn.textContent = "External";
}
// over-write:
btn.onclick = ()=>{
    btn.textContent = "External1";
}

// Disadvantages = Not handle multiple time.


// 3. Event objects = Event object is the special object which have the details about the event.All events handler have access to the event objects properties and method.

// e.g. :
let evobj = document.querySelector("#evobj");
evobj.onclick= (event)=>{
    console.log(event);  // event vaiable is a event object.You can see all the properties and method.
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX);
    console.log(event.clientY);
}


// 4. Event listners = It is the modified approach and also the recommended approach to handle the events.Beacause it overcome all the disadvantage of the previous methods to handle the events.It contain two methods:
// 1. addEventListner(event_name,listnerFunction(),useCapture);
let updbtn = document.querySelector("#updated");
let listFunc = (e)=>{
    updbtn.innerHTML="Updated";
    console.log(e);
}
updbtn.addEventListener("click",listFunc);

// 2. removeEventListner(event,listenerFnctionReference);
updbtn.removeEventListener("click",listFunc);


// 5. There are many events we can handle including mouseenter and mouseLeave or mouseover and mouseout.
// The differece between mouseenter and mouseLeave and mouseover and mouseout is:

/*

1. mouseenter and mouseleave:
mouseenter: This event is triggered when the mouse pointer enters the boundary of an element. It does not bubble up to parent elements.
mouseleave: This event is triggered when the mouse pointer leaves the boundary of an element. It also does not bubble up to parent elements.

2. mouseover and mouseout:
mouseover: This event is triggered when the mouse pointer enters the boundary of an element or any of its child elements. It bubbles up to parent elements.
mouseout: This event is triggered when the mouse pointer leaves the boundary of an element or any of its child elements. It also bubbles up to parent elements.

*/



// Note = 1. It is higly recommended to use the updated approach to handle the events.

// 2. Differnce between click and onclick is "onclick" is the old approach and it attached the "DOM0" handler to the element and it indicate the real click but the "click" is the new approach it attached the modern handler to the element and it indicate the fake click.

// 3. Higly recommended to go to mdn event refrences and check all the event properties and their event objects.


// Practice Problems:

// 1. Make a toggle switch for change the theme:
let container = document.querySelector(".togglecontainer");
let togglebtn = document.querySelector(".toggleswitch");
let mode = "light";
container.addEventListener("click",()=>{
    if(mode == "light"){
        togglebtn.classList.add("toggleswitch1");
        container.style.backgroundColor = "#2196f3";
        document.body.style.backgroundColor = "black";
        document.body.style.color= "white";
        mode = "dark";
    }
    else{
        togglebtn.classList.remove("toggleswitch1");
        container.style.backgroundColor = "grey";
        document.body.style.backgroundColor = "white";
        document.body.style.color= "black";
        mode = "light";
    }
})


// 2. Make a input field and read input and also read the keyboard keys:
let inputfield = document.querySelector("#inputfield");
let textfield = document.querySelector("#enterkeytext");
// read the keyboard keys:
inputfield.addEventListener("keydown",(event)=>{
    textfield.innerHTML = `Keyboard key:${event.key}`;
})
// read the text:
let submitbtn = document.querySelector(".submitbtn")
submitbtn.addEventListener("click",()=>{
    let str = inputfield.value;  // value property is used to fetch the input field data.
    inputfield.value="";
    document.querySelector("#entertext").innerHTML = `Your text:${str}`;
})

