let navItems = document.querySelectorAll(".nav-bar-item");

for (let i = 0; i < navItems.length; i++) {
console.log(navItems[i]);
navItems[i].addEventListener("click", function() {
    this.classList.add("nav-bar-item-active");
});
}

