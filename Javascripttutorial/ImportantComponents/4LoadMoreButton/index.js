let url = 'https://dummyjson.com/products?limit=10&skip=10&select=title,price';

let productContainer = document.querySelector(".productContainer");
let loadBtn = document.querySelector(".container button");
let counter=0;

getData();
async function getData(){
    let response = await fetch(`https://dummyjson.com/products?limit=10&skip=${counter==0?0:counter*10}`);
    let data = await response.json();
    // console.log(data.products);
    setData(data.products);
};

function setData(data){
    productContainer.innerHTML += data.map((elem,idx)=>{
        return `
        <div class="items" id="item${idx}">
          <img
            src=${elem.thumbnail}
          />
          <p>${elem.title}</p>
          <p>${elem.price}</p>
          <p>
          ${elem.description}
          </p>
        </div>
        `
    }).join("");
};


loadBtn.addEventListener("click",()=>{
    counter++;
    getData(counter);
});



