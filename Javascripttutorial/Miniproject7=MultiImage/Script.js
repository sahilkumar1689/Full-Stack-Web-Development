let containers = document.querySelectorAll(".container");

for(let it of containers){
    it.addEventListener("mouseenter",()=>{
        it.childNodes[3].style.opacity = "1";
    })
    it.addEventListener("mouseleave",()=>{
        it.childNodes[3].style.opacity = "0";
    })
    it.addEventListener("mousemove",(details)=>{
        it.childNodes[3].style.left=details.x+"px";
        it.childNodes[3].style.top=details.y+"px";
    })
}