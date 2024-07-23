const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let elemContainer = document.querySelector("#elem-container");
let fixImage = document.querySelector("#fixed-image");
elemContainer.addEventListener("mouseenter" , () => {
    fixImage.style.display = "block"
});
elemContainer.addEventListener("mouseleave" , () => {
    fixImage.style.display = "none"
});

// let elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter" , () => {
//     let image = elem1.getAttribute("data-image")
//     fixImage.style.backgroundImage = `url(${image})`
// })

let elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter" , function() {
        let image = e.getAttribute("data-image")
     fixImage.style.backgroundImage = `url(${image})`
    })
});