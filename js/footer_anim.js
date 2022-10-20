window.addEventListener("scroll", (event) => {
    if ((this.innerHeight + this.scrollY) >= document.body.offsetHeight) {
        let circle = document.querySelectorAll('.footer-circle');
        circle[0].style.transform = "translateX(0%)";
        circle[1].style.transform = "translateX(0%)";
     }
});