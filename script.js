const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function pagesAnimation() {
    let elemContainer = document.querySelector("#elem-container");
let fixImage = document.querySelector("#fixed-image");
elemContainer.addEventListener("mouseenter" , () => {
    fixImage.style.display = "block"
});
elemContainer.addEventListener("mouseleave" , () => {
    fixImage.style.display = "none"
});

let elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter" , function() {
        let image = e.getAttribute("data-image")
     fixImage.style.backgroundImage = `url(${image})`
    })
});
}

function pagechangeImages() {
    let changeColor = document.getElementById("changeColor");
let changeColors = document.getElementById("changeColors");
let designChange = document.getElementById("designChange");
let paraChange = document.getElementById("parachange")
let imageChange = document.getElementById("changeimage");

changeColor.addEventListener("click", ()=>{
    imageChange.src = 'image-vid-icon/img2.jpg' ;
    changeColor.style.color = "white";
    designChange.style.color = "#504A45";
    changeColors.style.color = "#504A45";
   paraChange.innerHTML = 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.' ;
}) ;
changeColors.addEventListener("click", ()=>{
    imageChange.src = 'image-vid-icon/img3.jpg' ;
    changeColors.style.color = "white";
    designChange.style.color = "#504A45";
    changeColor.style.color = "#504A45";
    paraChange.innerHTML = 'We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.'
}) ;
designChange.addEventListener("click", ()=>{
    imageChange.src = 'image-vid-icon/img1.jpg' ;
    designChange.style.color = "white";
    changeColor.style.color = "#504A45";
    changeColors.style.color = "#504A45";
    paraChange.innerHTML = 'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.'
}) ;
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });
}
swiperAnimation()
pagechangeImages()
pagesAnimation()

let nav = document.querySelector("nav h3");
let full = document.querySelector("#full-scr");
let navImg = document.querySelector("nav img");
let flag = 0
nav.addEventListener("click", ()=>{
    if (flag == 0) {
        full.style.top = 0 
    navImg.style.opacity = 0
    flag = 1
    }else{
        full.style.top = "-100%"
        navImg.style.opacity = 1
        flag = 0
    }
})