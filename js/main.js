let upBtn = document.querySelector(".up-btn");

window.onscroll = function(){
    upBtn.classList.toggle("show", window.scrollY > 400);
};

upBtn.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
});