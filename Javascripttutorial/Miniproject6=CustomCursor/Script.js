let container = document.querySelector(".container");
let cursor = document.querySelector(".cursor");

container.addEventListener("mouseenter",()=>{
    cursor.style.opacity="1";
})
container.addEventListener("mousemove",(details)=>{
    cursor.style.left = details.x+"px";
    // console.log(details.x);
    cursor.style.top = details.y+"px";
    // console.log(details.y);
})
container.addEventListener("mouseleave",()=>{
    cursor.style.opacity="0";
})

