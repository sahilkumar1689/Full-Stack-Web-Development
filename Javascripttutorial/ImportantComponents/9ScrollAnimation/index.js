let postContainer = document.querySelector(".postContainer");
let scroller = document.querySelector(".scroller");

(async ()=>{
    let response = await fetch('https://dummyjson.com/posts');
    let data = await response.json();

    setPosts(data.posts);

})();

function setPosts(data){
    postContainer.innerHTML += data.map(post=>{
        return `<div class="postItem">
        <p>
          ${post.title}
        </p>
        <p>
          ${post.body}
        </p>
      </div>`
    }).join("");
};

window.addEventListener("scroll",()=>{
    let getScrollFromTop = document.body.scrollTop || document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let alreadyScrolled = (getScrollFromTop/height )*100;

    scroller.style.width = `${alreadyScrolled}%`;
});
