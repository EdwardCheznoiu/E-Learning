let btn_result = document.querySelector("#submit-btn");
let answers = document.querySelectorAll(".answers");

btn_result.addEventListener("click", function() {
    console.log(answers[0].children);
});