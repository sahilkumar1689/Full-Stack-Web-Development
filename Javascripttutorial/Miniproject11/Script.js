let productArrObj = [
    {name:"Blue Chair",headline:"Blue Soft Chair",price:"5,000",img:"https://images.unsplash.com/photo-1625296048730-ada61dcf378b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"White Chair",headline:"white Soft Chair",price:"10,000",img:"https://plus.unsplash.com/premium_photo-1678074057896-eee996d4a23e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V2hpdGUlMjBDaGFpcnxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Green Chair",headline:"Green Soft Chair",price:"15,000",img:"https://images.unsplash.com/photo-1611464908623-07f19927264e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JlZW4lMjBDaGFpcnxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"orange Chair",headline:"Green Soft Chair",price:"12,000",img:"https://images.unsplash.com/photo-1532943697453-56d80ef3493d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9yYW5nZSUyMENIQUlSfGVufDB8fDB8fHww"},
    {name:"Yellow Chair",headline:"Green Soft Chair",price:"16,000",img:"https://images.unsplash.com/photo-1631700677908-ee8d00f6e15f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFllbGxvdyUyMENoYWlyfGVufDB8fDB8fHww"},
    {name:"Pink Chair",headline:"Green Soft Chair",price:"8,000",img:"https://images.unsplash.com/photo-1592106163564-ff2e75907459?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGluayUyMENoYWlyfGVufDB8fDB8fHww"}
]
let popularproductArrObj = [
    {name:"Blue Chair",headline:"Blue Soft Chair",price:"5,000",img:"https://images.unsplash.com/photo-1611814771544-0baa57cb8224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ymx1ZSUyMGNoYWlyfGVufDB8fDB8fHww"},
    {name:"White Chair",headline:"white Soft Chair",price:"10,000",img:"https://plus.unsplash.com/premium_photo-1678074057896-eee996d4a23e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8V2hpdGUlMjBDaGFpcnxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"Green Chair",headline:"Green Soft Chair",price:"15,000",img:"https://images.unsplash.com/photo-1611464908623-07f19927264e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R3JlZW4lMjBDaGFpcnxlbnwwfHwwfHx8MA%3D%3D"}
]
let cartArrObj=[];

onload();

function onload(){
    loadProducts();
    popularLoadProducts();
    loadIntoCart();
    loadCart();
}

function loadProducts(){
    let clutter="";
    productArrObj.forEach((obj,index)=>{
        clutter+=`<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
        <img class="w-full h-full object-cover" src="${obj.img}" />
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${obj.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${obj.headline}</h3>
                    <h4 class="font-semibold mt-2">Rs.${obj.price}</h4>
                </div>
                <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}" class="add ri-add-line"></i></button>
            </div>
        </div>
    </div>`;
    })
    document.querySelector(".products").innerHTML=clutter;
}

function popularLoadProducts(){
    let clutter="";
    popularproductArrObj.forEach((obj)=>{
        clutter+=`<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0 child1">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${obj.img}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${obj.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${obj.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">Rs.${obj.price}</h4>
        </div>
    </div>`;
    })
    document.querySelector(".populars").innerHTML=clutter;
}

function loadIntoCart(){
    document.querySelector(".products").addEventListener("click",(details)=>{
        //  console.log("Hi");
        if(details.target.classList.contains('add')){
            cartArrObj.push(productArrObj[details.target.dataset.index]);
            console.log(cartArrObj);
            // console.log(details.target.dataset);
        
        }
    })
}

function loadCart(){
    document.querySelector(".carticon").addEventListener("click",()=>{
        document.querySelector(".cartexpnd").style.display = "block";
        let clutter="";
        cartArrObj.forEach((obj)=>{
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover" src="${obj.img}">
            </div>
            <div>
                <h3 class="font-semibold">${obj.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">Rs.${obj.price}</h5>
            </div>
        </div>`;
        })
        document.querySelector(".cartexpnd").innerHTML=clutter;
    })
}