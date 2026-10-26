let arrObj = [
    {
        dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storie:"https://img.freepik.com/premium-photo/motivational-vector-with-dream-text_13339-301727.jpg?w=740"
    },
    {
        dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVsJTIwZHB8ZW58MHx8MHx8fDA%3D",
        storie:"https://img.freepik.com/premium-photo/book-cover-with-title-success_759387-7.jpg?w=740"
    },
    {
        dp:"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsJTIwZHB8ZW58MHx8MHx8fDA%3D",
        storie:"https://img.freepik.com/premium-photo/inspirational-motivational-quotes-sometimes-you-win-sometimes-you-learn-blurry-background_698447-454.jpg?w=1060"
    },
    {
        dp:"https://images.unsplash.com/photo-1440589473619-3cde28941638?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsJTIwZHB8ZW58MHx8MHx8fDA%3D",
        storie:"https://img.freepik.com/free-photo/creative-inspirational-resource_23-2149144220.jpg?t=st=1711220597~exp=1711224197~hmac=2eea7f4a7e57e2f68bcabd70f136b8e9677cedba5efbeeba33636938107891c3&w=360"
    },
    {
        dp:"https://images.unsplash.com/photo-1514315384763-ba401779410f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1vZGVsJTIwZHB8ZW58MHx8MHx8fDA%3D",
        storie:"https://img.freepik.com/free-photo/collage-inspiration-motivational-image_23-2150569836.jpg?t=st=1711220655~exp=1711224255~hmac=6766950ed17e250c7c55bc718af04d8599590a5f5551df2f6e64f6c909b191e8&w=360"
    },
    {
        dp:"https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG1vZGVsJTIwZHB8ZW58MHx8MHx8fDA%3D",
        storie:"https://img.freepik.com/free-photo/top-view-letters-quotes-still-life_52683-105910.jpg?t=st=1711220732~exp=1711224332~hmac=be99686db63caa7de7c18cb8ea0db7f121913ab8815e227dd074d9c1cfbedfcc&w=360"
    },
    {
        dp:"https://images.unsplash.com/photo-1515734674582-29010bb37906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxtb2RlbCUyMGRwfGVufDB8fDB8fHww",
        storie:"https://img.freepik.com/free-photo/neon-blue-now-never-sign-wall_53876-163063.jpg?t=st=1711220808~exp=1711224408~hmac=5e0130120f9814a76645926df92b170a9cc0a0adb20005f47959ac0271c357ed&w=360"
    },
    {
        dp:"https://images.unsplash.com/photo-1711062714228-a668ce5664f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D",
        storie:"https://img.freepik.com/free-photo/motivational-text-white-background_23-2148689411.jpg?t=st=1711220863~exp=1711224463~hmac=fec7f7d698ce37e349b6e96faa4e0d0de1d91c683dde3181ab74a58486a28baf&w=740"
    }
]

let storiesContainer = document.querySelector(".storiesContainer");
let html="";
arrObj.forEach((val,index)=>{
    html+=`<div class="storie" id="${index}" onclick="displayStories(this.id)">
    <img src="${val.dp}" alt="">
</div>`;
})
storiesContainer.innerHTML=html;


// First Method:
// function displayStories(index){
//     let newDiv = document.createElement("div");
//     let storyHtml ="";

//     storyHtml += `<div class="scrollContainer">
//         <div class="scroller"></div>
//     </div>
//     <img src="${arrObj[index].storie}" alt="" onclick="removeStory()">`;

//     newDiv.innerHTML=storyHtml;
//     newDiv.setAttribute("class","showStorieContainer");

//     document.querySelector(".container").prepend(newDiv);

//     setTimeout(()=>{
//         if(document.querySelector(".showStorieContainer")) document.querySelector(".showStorieContainer").remove();
//     },7000);
// }

// function removeStory(){
//     document.querySelector(".showStorieContainer").remove();
// }


// Second Method:
function displayStories(index){
    let storyShow = document.querySelector(".showStorieContainer");
    let storyHtml = `<div class="scrollContainer">
    <div class="scroller"></div>
    </div>
    <img src="${arrObj[index].storie}" alt="" onclick="removeStory()">`;
    
    storyShow.style.display = "block";
    storyShow.innerHTML=storyHtml;
    setTimeout(()=>{
        if(storyShow) storyShow.style.display = "none";
    },7000);
}

function removeStory(){
    document.querySelector(".showStorieContainer").style.display="none";
}



{/* <div class="showStorieContainer">
    <div class="scrollContainer">
        <div class="scroller"></div>
    </div>
    <img src="${arrObj[index].storie}" alt="">
</div> */}
