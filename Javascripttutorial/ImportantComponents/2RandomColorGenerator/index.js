let containerLeft = document.querySelector("#containerLeft");
let containerRight = document.querySelector("#containerRight");

let generateLeftBtn = document.querySelector("#generateLeftBtn");
let generateRightBtn = document.querySelector("#generateRightBtn");

let leftPara = document.querySelector("#containerLeft p");
let rightPara = document.querySelector("#containerRight p");

let copyLeftBtn = document.querySelector("#copyLeftBtn");
let copyRightBtn = document.querySelector("#copyRightBtn");

// Generate the Hex Color:
function getRandomHex(){
    let colorArr = "0123456789ABCDEF";
    let color ="#";
    for(let i=0;i<6;i++){
        let rand = Math.floor((Math.random())*(15-0+1))+0;
        color += colorArr[rand];
    }
    return color;
}

generateLeftBtn.addEventListener("click",()=>{
    let randomColor = getRandomHex();

    leftPara.innerHTML = randomColor;

    containerLeft.style.backgroundColor = randomColor;

})

copyLeftBtn.addEventListener("click",()=>{
    let color = leftPara.innerText;
    navigator.clipboard.writeText(color).then((res)=>window.alert("Successfully Copied to Clipboard.")).catch(err=>alert("Failed to copied",err));
});

// Generate the RGB color:
function getRandomRGB(){
    let color ="rgb(";
    for(let i=0;i<3;i++){
        let rand = Math.floor((Math.random())*(255-0+1))+0;
        color += rand;
        if(i<2) color += ",";
    }

    color += ")";
    // console.log(color);
    return color;
}

containerRight.addEventListener("click",()=>{
    let randomColor = getRandomRGB();

    rightPara.innerHTML = randomColor;

    containerRight.style.backgroundColor = randomColor;

})

copyRightBtn.addEventListener("click",()=>{
    let color = rightPara.innerText;
    navigator.clipboard.writeText(color).then((res)=>window.alert("Successfully Copied to Clipboard.")).catch(err=>alert("Failed to copied",err));
});
