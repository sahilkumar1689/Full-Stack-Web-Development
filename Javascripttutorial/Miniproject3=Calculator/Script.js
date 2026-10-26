// Default input field value:
let inputfeild = document.querySelector(".input #inputField");
inputfeild.value="0";
inputfeild.style.color = "white";
inputfeild.style.fontSize= "30px";

let getBtn = document.querySelectorAll(".getText");

for(let it of getBtn){
    it.addEventListener("click",()=>{
        if(inputfeild.value == "0"){
            inputfeild.value = it.innerText;
        }
        else{
            inputfeild.value += it.innerText;
        }
    })
}

// Clear the input field:
let clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click",()=>{
    inputfeild.value = "0";
})

// Calculate the result:
let resultBtn = document.querySelector("#equal");
resultBtn.addEventListener("click",()=>{
    let data = inputfeild.value;
    if(data.substring(0,5)=="sqrt("){

        data = data.replace("sqrt(","");
        data = data.replace(")","");
        inputfeild.value = data**2;
        return;
    }
    if(data.substring(0,4)=="log("){

        data = data.replace("log(","");
        data = data.replace(")","");
        inputfeild.value = Math.log10(data);
        return;
    }
    try{
        let result = eval(data);
        inputfeild.value = result;
    }catch(err){
        inputfeild.value = "Error";
    }
})

// Cross Button:
let crossBtn = document.querySelector(".crossBtn");
crossBtn.addEventListener("click",()=>{
    if(inputfeild.value.length == 1){
        inputfeild.value = "0";
    }
    if(inputfeild.value != "0"){
        inputfeild.value = inputfeild.value.slice(0,-1);
    }
})

// Denomiantor button:
let denoBtn = document.querySelector(".denoBtn");
denoBtn.addEventListener("click",()=>{
    inputfeild.value = "1/";
})
// Square Root button:
let rootBtn = document.querySelector(".sqrtBtn");
rootBtn.addEventListener("click",()=>{
    inputfeild.value = "sqrt(";
})
// Log button:
let logBtn = document.querySelector(".logBtn");
logBtn.addEventListener("click",()=>{
    inputfeild.value = "log(";
})