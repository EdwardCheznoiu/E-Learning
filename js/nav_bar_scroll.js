document.addEventListener('scroll', (e) => {
    let navbar = document.querySelector(".nav-bar");
    let navbarChildren = document.querySelectorAll(".nav-bar-item");
    let logo = document.querySelector(".logo-container");
    let fbar = document.querySelector(".fa-bars");
    let logoImg = document.querySelector(".logo-container img");
    if(!isFabBtnClicked){
        if(this.scrollY != 0){
            logoImg.classList.add("img-scrolling");
            navbar.classList.add("nav-bar-scrolling");
            for(let i = 0; i < navbarChildren.length; i++){
                navbarChildren[i].style.fontSize = "35px";
                navbarChildren[i].style.transition = ".5s";
            }
            navbar.style.transition = ".5s";  
    
            logo.classList.add("logo-container-scrolling");
            fbar.classList.add("fa-bars-scrolling");
             
        }
        else{
            logoImg.classList.remove("img-scrolling");
            navbar.classList.remove("nav-bar-scrolling");
            logo.classList.remove("logo-container-scrolling");
            fbar.classList.remove("fa-bars-scrolling");
            for(let i = 0; i < navbarChildren.length; i++){
                navbarChildren[i].style.fontSize = "40px";
                navbarChildren[i].style.transition = ".5s";
            }
            navbar.style.transition = ".5s";
        }
    }

    
});