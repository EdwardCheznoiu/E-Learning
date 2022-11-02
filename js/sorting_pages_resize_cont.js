let content_container = document.querySelectorAll('.sorting-page-content-container');
let resize_btn = document.querySelectorAll(".resize-box");
let body_capture = document.querySelector(".body-capture");

for(let i = 0; i < resize_btn.length; i++){
    resize_btn[i].addEventListener('click', () =>{
        content_container[i].classList.toggle('sorting-page-content-container-active'); 
        body_capture.classList.toggle('body-capture-active');
    });
}

 
