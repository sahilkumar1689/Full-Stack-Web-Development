let popUpBtn = document.querySelector(".popUpBtn");
let container = document.querySelector(".container");
let closeBtn = document.querySelector(".btnContainer button");

popUpBtn.addEventListener("click",()=>{
    container.style.display = "block";
});

closeBtn.addEventListener("click",()=>{
    container.style.display = "none";
})

window.addEventListener("click",(event)=>{
    if(event.target === container){
        container.style.display = "none";
    }
})