// Menu Open Close
let menuIcon = document.querySelector(".menu-icon");
let navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {

menuIcon.classList.toggle("move");
navLinks.classList.toggle("open-menu");

};

// Close Menu On Scroll

window.onscroll = () => {

menuIcon.classList.remove("move");
navLinks.classList.remove("open-menu");    

}

//Header

let header = document.querySelector("header");


window.addEventListener("scroll", () => {

    header.classList.toggle("shadow", window.scrollY > 0);

});

//Scroll Reveal Animation
const animate = ScrollReveal({

origin: "top",
distance: "60px",
duration: "2500",
delay: "400",

});

animate.reveal(".nav, heading");
animate.reveal(".home-text, .shipping-content", {origin: "left"});
animate.reveal(".home-img", {origin: "bottom"});
animate.reveal(".shipping-image", {origin: "right"});
animate.reveal(".box, .banner-box, .products-box, .footer-col", {interval: 100});