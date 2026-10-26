let storyContainer = document.querySelector(".storyContainer");
let cursor = document.querySelector(".storyContainer i");

storyContainer.addEventListener("dblclick",()=>{
    cursor.style.opacity="1";
    setTimeout(()=>{
        cursor.style.opacity="0";
    },500)
})