let containers = document.querySelectorAll(".item1btn");
console.log(containers);
let resultbtn = document.querySelector(".item3btn");
let userscore = document.querySelector("#userscore");
let compscore = document.querySelector("#compscore");
let comp=0,user=0;

for(let it of containers){
    it.addEventListener("click",()=>{
        let computerMove = Math.floor(Math.random() * 3);
        let userinput = it.childNodes[0].alt;
        
        switch(computerMove){
            case 0:{
                if(userinput=="stone"){
                    resultbtn.innerHTML = "It's a draw.";
                    resultbtn.style.backgroundColor = "white";
                    resultbtn.style.color = "black";
                    resultbtn.style.fontSize = "20px";
                }
                else if(userinput == "paper"){
                    resultbtn.innerHTML = "You Won! paper beats rock.";
                    resultbtn.style.backgroundColor = "aqua";
                    resultbtn.style.color = "black";
                    resultbtn.style.fontSize = "15px";
                    resultbtn.style.width = "200px";
                    user++;
                    userscore.innerHTML = user;
                }
                else{
                    resultbtn.innerHTML = "You loss! rock beats scissors.";
                    resultbtn.style.backgroundColor = "red";
                    resultbtn.style.color = "black";
                    resultbtn.style.fontSize = "15px";
                    comp++;
                    compscore.innerHTML = comp;
                }
                break;
            }
            case 1:{
                if(userinput=="stone"){
                    resultbtn.innerHTML = "You loss! rock beats scissors.";
                    resultbtn.style.backgroundColor = "red";
                    resultbtn.style.color = "black";
                    resultbtn.style.fontSize = "15px";
                    comp++;
                    compscore.innerHTML = comp;
                }
                else if(userinput == "paper"){
                    resultbtn.innerHTML = "It's a draw.";
                    resultbtn.style.backgroundColor = "white";
                    resultbtn.style.color = "black";
                    resultbtn.style.fontSize = "20px";
                }
                else{
                    resultbtn.innerHTML = "You Won! paper beats rock.";
                    resultbtn.style.backgroundColor = "aqua";
                    resultbtn.style.color = "black";
                    resultbtn.style.fontSize = "15px";
                    resultbtn.style.width = "200px";
                    user++;
                    userscore.innerHTML = user;
                }
                break;
            }
            default:{
                if(userinput=="stone"){
                    resultbtn.innerHTML = "You Won! paper beats rock.";
                    resultbtn.style.backgroundColor = "aqua";
                    resultbtn.style.color = "black";
                    resultbtn.style.fontSize = "15px";
                    resultbtn.style.width = "200px";
                    user++;
                    userscore.innerHTML = user;
                }
                else if(userinput == "paper"){
                    resultbtn.innerHTML = "You loss! rock beats scissors.";
                    resultbtn.style.backgroundColor = "red";
                    resultbtn.style.color = "black";
                    resultbtn.style.fontSize = "15px";
                    comp++;
                    compscore.innerHTML = comp;
                }
                else{
                    resultbtn.innerHTML = "It's a draw.";
                    resultbtn.style.backgroundColor = "white";
                    resultbtn.style.color = "black";
                    resultbtn.style.fontSize = "20px";
                }
                break;
            }
        }
    })
}

let resetbtn = document.querySelector("#resetbtn");
resetbtn.addEventListener("click",()=>{
    userscore.innerHTML = "0";
    compscore.innerHTML = "0";
    resultbtn.innerHTML = "Play Your Move";
    resultbtn.style.backgroundColor = "black";
    resultbtn.style.color="white";
})

