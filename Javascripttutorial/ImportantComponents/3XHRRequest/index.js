let itemsContainer = document.querySelector(".itemsContainer");


// 1. Using XHR Reuqest:

// getXHRData();

// function getXHRData(){
//     // Step 1 = Create the xhr refrence or object:
//     let xhr = new XMLHttpRequest();

//     // Step 2 = Use open(method,url):
//     xhr.open('GET','https://jsonplaceholder.typicode.com/posts');

//     // Step 3 = Use responseType;
//     xhr.responseType = "json";

//     // Step 4 = Send the request:

//     xhr.send();

//     // Step 5 = Use Onload function to track the status:

//     xhr.onload = ()=>{
//         if(xhr.status == 200){
//             console.log(xhr.response);
//             setData(xhr.response);
//         }
//         else{
//             console.log("Some error.");
//         }
//     }
// }


// 2. Using PROMISE Chaining:

// getPromiseData();

// function getPromiseData(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res=>res.json())
//     .then(data=>setData(data))
//     .catch(err=>console.log(err))
// }



// 3. Async Await:

(async ()=>{
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        setData(data);
    } catch (err) {
        console.log(err);
    }
})();

function setData(data){
    itemsContainer.innerHTML += data.map((elem,idx)=>{
        return (`
            <div id="item${idx+1}" style="margin:20px">
                <h2>${idx+1}. ${elem.title}</h2>
                <p>${elem.body}</p>
            </div>
        `)
    }).join("");
};