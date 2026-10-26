let slider =document.querySelector(".slider");
let dotContainer =document.querySelector(".dot-Container");

// Fetch the data:
(async ()=>{
    try {
        let repsonse = await fetch('https://picsum.photos/v2/list?page=1&limit=5');
        let data = await repsonse.json();

        // console.log(data);
        loadData(data);

    } catch (err) {
        console.log(err);
    }
})();

// Loading the images:

function loadData(data){
    slider.innerHTML += data.map((elem,idx)=>{
        return (`
            <div class="slides" id="${elem.id}">
                <img src="${elem.download_url}" alt="${elem.id}">
            </div>
        `)
    }).join("");

    dotContainer.innerHTML = data.map((elem,idx)=>{
        return (`
            <span class="dot ${idx==0?'active':''}" data-slide="${idx}"></span>
        `)
    }).join("");
}

// Slider Functionality:


let currSlide =0;

setTimeout(()=>{

    let slides = document.querySelectorAll(".slides");
    let prevBtn = document.querySelector(".prev");
    let nextBtn = document.querySelector(".next");
    
    function activeDot(slideIdx){
        let dotList = document.querySelectorAll(".dot");
        dotList.forEach((elem,idx)=>elem.classList.remove("active"));

        dotList[slideIdx].classList.add("active");

    }

    function changeCurrSlide(slideIdx){
        slides.forEach((elem,idx)=> elem.style.transform =`translateX(${100 * (idx-slideIdx)}%)`);

    }

    changeCurrSlide(currSlide);

    nextBtn.addEventListener("click",()=>{
        currSlide++;

        if(currSlide == slides.length){
            currSlide=0;
        }
        changeCurrSlide(currSlide);
        activeDot(currSlide);
    });

    prevBtn.addEventListener("click",()=>{
        currSlide--;

        if(currSlide<0){
            currSlide=0;
        }
        changeCurrSlide(currSlide);
        activeDot(currSlide);
    });

    dotContainer.addEventListener("click",(event)=>{
        let clickInd = event.target.dataset.slide;
        changeCurrSlide(clickInd);
        activeDot(clickInd);
        currSlide=clickInd;
    });

},5000);
