let inputTag = document.querySelector(".container input");
let buttonFind = document.querySelector(".FindBtn");
let userDataContainer = document.querySelector(".userDataContainer");
let para = document.querySelector(".container p");

function show(){
    para.style.display = "block";
    userDataContainer.style.display = "none";
}
function hide(){
    para.style.display = "none";
    userDataContainer.style.display = "block";
}

buttonFind.addEventListener("click",()=>{
    let userName= inputTag.value;

    if(userName == "") alert("Please Enter the User Name.");
    else{
        show();
        console.log(userName);
        (async ()=>{
            let response = await fetch(`https://api.github.com/users/${userName}`);
            let data = await response.json();
            
            console.log(data);
            inputTag.value = "";

            // Creating the Components:

            let Image = document.createElement("img");
            Image.setAttribute("src",`${data.avatar_url}`);
            
            let name = document.createElement('p');
            name.textContent = `${data.name}`;
            
            let bio = document.createElement('p');
            bio.textContent = `${data.bio}`;
            
            let achorTag = document.createElement('a');
            achorTag.setAttribute("href",`${data.html_url}`);
            achorTag.textContent = "Visit Github";


            // Appending:
            userDataContainer.append(Image);
            userDataContainer.append(name);
            userDataContainer.append(bio);
            userDataContainer.append(achorTag);
            hide();
        })();
    }
})
