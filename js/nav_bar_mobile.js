let fabar = document.querySelector(".fa-bars");
let navbar = document.querySelector(".nav-bar");
let navbarItems = document.querySelector(".nav-bar-item");

fabar.addEventListener("click", function() {
    navbar.classList.toggle("nav-bar-active");
    navbarItems.classList.toggle("nav-bar-item-active");
});



