//Acest script se ocupa cu gestionarea meniului in modul mobil 
let fabar = document.querySelector(".fa-bars");
let navbar = document.querySelector(".nav-bar");
let isFabBtnClicked = false; 
fabar.addEventListener("click", function() {
    isFabBtnClicked  = !isFabBtnClicked;
    if(isFabBtnClicked){
        navbar.classList.remove("nav-bar");
        navbar.classList.remove("nav-bar-scrolling");
        navbar.classList.add("nav-bar-active");
    }
    else{
        navbar.classList.add("nav-bar");
        navbar.classList.remove("nav-bar-active");
    }
});



