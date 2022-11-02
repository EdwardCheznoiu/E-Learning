document.addEventListener('scroll', (e) => {
    let navbar = document.querySelector("#nav-bar");
    let navbarChildren = document.querySelectorAll(".nav-bar-item")
    if(this.scrollY != 0){
        navbar.style.height = "60px";
        navbar.style.backgroundColor = "rgba(255, 255, 255, 1)";
        for(let i = 0; i < navbarChildren.length; i++){
            navbarChildren[i].style.fontSize = "30px";
            navbarChildren[i].style.transition = ".5s";
        }
        navbar.style.transition = ".5s";
    }
    else{
        navbar.style.height = "70px";
        navbar.style.backgroundColor = "rgba(255, 255, 255, .5)";
        for(let i = 0; i < navbarChildren.length; i++){
            navbarChildren[i].style.fontSize = "40px";
            navbarChildren[i].style.transition = ".5s";
        }
        navbar.style.transition = ".5s";
    }
    
});