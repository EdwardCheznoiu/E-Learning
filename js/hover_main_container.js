function moveContentContainer(obj)
{
    let content_container = document.querySelectorAll('.content-container-btn');
    let index = Array.from(obj.parentElement.children).indexOf(obj);
    if(content_container[index].style.transform != "translateX(0%)")
    {
        content_container[index].style.transform = "translateX(0%)";
    }
}