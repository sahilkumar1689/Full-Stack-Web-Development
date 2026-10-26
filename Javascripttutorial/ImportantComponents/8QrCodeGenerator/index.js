let inputTag = document.querySelector("input");
let qrContainer = document.querySelector(".qrContainer");
let button = document.querySelector("button");
let clearbtn = document.querySelector("#clear");

button.addEventListener("click",()=>{
    let inputValue = inputTag.value;
    if(inputValue == "") alert("Enter Some Url");
    else{
        inputTag.value = "";

        new QRCode(qrContainer,{
            text:inputValue,
            width:300,
            height:300,
            colorLight:"#fff",
            colorDark:"#000",
        });
    }
})

clearbtn.addEventListener("click",()=>{
    qrContainer.innerHTML = "";
})