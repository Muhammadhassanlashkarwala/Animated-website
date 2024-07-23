const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let elemContainer = document.querySelector("#elem-container");
let fixImage = document.querySelector("#fixed-image");
elemContainer.addEventListener("mouseenter" , () => {
    // alert("nice")
    fixImage.style.display = "block"
});
elemContainer.addEventListener("mouseleave" , () => {
    // alert("nice")
    fixImage.style.display = "none"
});
let elem1 = document.querySelector("#elem1")
elem1.addEventListener("mouseenter" , () => {
    let image = elem1.getAttribute("data-image")
    fixImage.style.backgroundImage = `url(${image})`
})