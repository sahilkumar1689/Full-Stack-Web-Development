var arrObj = [
    { songName: "Jatt Life", url: "./songs/Jatt Life - Varinder Brar.mp3", img: "https://cover.djpunjab.is/44398/300x700/Jatt-Life-Varinder-Brar.jpg" },
    { songName: "Jatt Life Zone", url: "./songs/Jatt-Life-Zone-Varinder-Brar.mp3", img: "https://th.bing.com/th/id/OIP.bcf599pCvN0yleh-CoFXHwAAAA?w=320&h=180&rs=1&pid=ImgDetMain" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" }
]
let audio = new Audio();
let flag=0;
let songContainer=0;

let container = document.querySelector("#all-songs");
let leftContainer = document.querySelector("#left");
let playButton = document.querySelector("#play");
let previousButton = document.querySelector("#backward");
let aheadButton = document.querySelector("#forward");


onload();

function onload(){
    loadSongTittle();
    playMusic();
    playBtn();
    backwardButton();
    forwardButton();
}

function loadSongTittle(){
    let clutter="";
    arrObj.forEach((obj,index)=>{
        clutter+=`<div class="song-card" id=${index}>
        <div class="part1">
        <img src=${obj.img} alt="">
        <h2>${obj.songName}</h2>
        </div>
        </div>`;
    })
    container.innerHTML=clutter;
}

function playMusic(){
    let leftContainerContent = document.querySelector("#left h1");
    let pButtons = document.querySelectorAll("#player h3");
    container.addEventListener("click",(details)=>{
        leftContainerContent.style.display = "none";
        audio.src = arrObj[details.target.id].url;
        songContainer=details.target.id;
        leftContainer.style.backgroundImage = `url('${arrObj[details.target.id].img}')`;
        audio.play();
        pButtons.forEach((element)=>{
            element.style.opacity = "1";
        })
        playButton.innerHTML =`<i class="ri-pause-mini-fill"></i>`;
        flag=1;
    })
}

function playBtn(){
    playButton.addEventListener("click",()=>{
        if(window.getComputedStyle(playButton).getPropertyValue("opacity") == 0.3){
            alert("Please Select Song First To Play.");
        }
        else if(flag==1){
            playButton.innerHTML =`<i class="ri-play-fill"></i>`;
            audio.pause();
            flag=0;
        }else{
            playButton.innerHTML =`<i class="ri-pause-mini-fill"></i>`;
            flag=1;
            audio.src = arrObj[songContainer].url;
            audio.play();
        }
    })
}

function backwardButton(){
    previousButton.addEventListener("click",()=>{
        if(window.getComputedStyle(previousButton).getPropertyValue("opacity") == 0.3){
            alert("Please Select Song First To Play.");
        }
        else{
            aheadButton.style.opacity="1";
            if(songContainer==0){
                previousButton.style.opacity="0.3";
            }
            else{
                audio.src=arrObj[--songContainer].url;
                leftContainer.style.backgroundImage = `url('${arrObj[songContainer].img}')`;
                audio.play();
            }
        }
    })
}

function forwardButton(){
    aheadButton.addEventListener("click",()=>{
        if(window.getComputedStyle(aheadButton).getPropertyValue("opacity") == 0.3){
            alert("Please Select Song First To Play.");
        }
        else{
            previousButton.style.opacity="1";
            if(songContainer==(arrObj.length-1)){
                aheadButton.style.opacity="0.3";
            }
            else{
                audio.src=arrObj[++songContainer].url;
                leftContainer.style.backgroundImage = `url('${arrObj[songContainer].img}')`;
                audio.play();
            }
        }
    })
}