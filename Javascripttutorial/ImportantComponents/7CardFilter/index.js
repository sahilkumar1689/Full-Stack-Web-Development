let dataList = [
    {
        id:"Men",
        name:"Men's Shirt 1"
    },
    {
        id:"Men",
        name:"Men's Shirt 2"
    },
    {
        id:"Men",
        name:"Men's Shirt 3"
    },
    {
        id:"Men",
        name:"Men's Shirt 4"
    },
    {
        id:"Men",
        name:"Men's Shirt 5"
    },
    {
        id:"Women",
        name:"Women's Shirt 1"
    },
    {
        id:"Women",
        name:"Women's Shirt 2"
    },
    {
        id:"Women",
        name:"Women's Shirt 3"
    },
    {
        id:"Women",
        name:"Women's Shirt 4"
    },
    {
        id:"Women",
        name:"Women's Shirt 5"
    },
    {
        id:"Kids",
        name:"Kids's Shirt 1"
    },
    {
        id:"Kids",
        name:"Kids's Shirt 2"
    },
    {
        id:"Kids",
        name:"Kids's Shirt 3"
    },
    {
        id:"Kids",
        name:"Kids's Shirt 4"
    },
    {
        id:"Kids",
        name:"Kids's Shirt 5"
    },
]

let btns = document.querySelectorAll(".btnContainer button");
let cardsContainer = document.querySelector(".cardsContainer");


setDefaultData();

function setDefaultData(){
    cardsContainer.innerHTML = dataList.map((elem,idx)=>{
        return `
            <div class="item" id="item${elem.id}">${elem.name}</div>
        `
    }).join("");
}

filterBtns();

function filterBtns(){
    btns.forEach((elem)=>{
        elem.addEventListener("click",(event)=>{
            if(elem.getAttribute('dataType')==="All"){
                setDefaultData();
            }
            else{
                let data = dataList.filter(item=>(elem.getAttribute('dataType')===item.id)
                )

                cardsContainer.innerHTML = data.map((obj)=>`<div class="item">${obj.name}</div>`).join("");
            }
        })
    })
}