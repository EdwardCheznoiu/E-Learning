let navbar_btn = document.querySelector(".hide-nav-bar-left");
let navbarleft = document.querySelector("#nav-bar-left");
let navbarleftimg = document.querySelector(".hide-nav-bar-left-img");
let toggle = false;
navbar_btn.addEventListener("click", function() {
    navbarleft.style.transition = ".5s";
    if(toggle){
        navbarleft.style.transform = "translateY(0%)";
        navbarleftimg.src = "../../img/navbar/hide.png";
        toggle = !toggle;
    }
    else{
        navbarleft.style.transform = "translateY(100%)";
        navbarleftimg.src = "../../img/navbar/hide2.png";
        toggle = !toggle;
    }
 
});