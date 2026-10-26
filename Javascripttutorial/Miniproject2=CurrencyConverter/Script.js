// Adding country name and flags:
let selectdiv = document.querySelectorAll(".countrySelect select");

function getFlag(event){
    let eventCode = event.value;
    let eventValue = countryList[eventCode];
    let flag= `https://flagsapi.com/${eventValue}/flat/64.png`;
    if(event.name == "from"){
        let newImg = document.querySelector(".fromCountry img");
        newImg.src = flag;
    }else{
        let newImg = document.querySelector(".toCountry img");
        newImg.src = flag;
    }
}

for(let selectit of selectdiv){
    for(let currcode in countryList){
        let newElement = document.createElement("option");
        newElement.innerText = currcode;
        newElement.value = currcode;
        selectit.append(newElement);
    }
    selectit.addEventListener("change",(evt)=>{
        // console.log(evt.target);
        getFlag(evt.target);
    })
}

// Select input from the user:
let userInput = document.querySelector("#amount");
let submitBtn = document.querySelector(".button button");

async function getCovertionData(){
    let userAmount = userInput.value;
    if(userAmount =="" || userAmount<=0){
        userInput.value=1;
        userAmount=1;
    }

    let fromValue = document.querySelector(".fromCountry select").value;
    let toValue = document.querySelector(".toCountry select").value;
    // console.log(fromValue +" "+ toValue);
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromValue.toLowerCase()}/${toValue.toLowerCase()}.json`;

    let response = await fetch(url);
    let data = await response.json();
    let toData = data[toValue.toLowerCase()]

    let totalAmount = toData*userAmount;
    let result = document.querySelector(".result p");
    result.innerHTML = `${userAmount} ${fromValue} = ${totalAmount} ${toValue}`;
}

submitBtn.addEventListener("click",()=>{
    getCovertionData();
})

