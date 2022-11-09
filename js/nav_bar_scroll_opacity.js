document.addEventListener('scroll', (e) => {
    let navbar = document.querySelector(".nav-bar");
    let navbarChildren = document.querySelectorAll(".nav-bar-item")
    let fbar = document.querySelector(".fa-bars");
    if(this.scrollY != 0){
        navbar.style.height = "60px";
        for(let i = 0; i < navbarChildren.length; i++){
            navbarChildren[i].style.fontSize = "30px";
            navbarChildren[i].style.transition = ".5s";
            navbarChildren[i].style.height = "100%";
        }
        navbar.style.transition = ".5s";
    }
    else{
        navbar.style.height = "70px";
        for(let i = 0; i < navbarChildren.length; i++){
            navbarChildren[i].style.fontSize = "40px";
            navbarChildren[i].style.transition = ".5s"; 
            navbarChildren[i].style.height = "100%";
        }
        navbar.style.transition = ".5s";
    }
});