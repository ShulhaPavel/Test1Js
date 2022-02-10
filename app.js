const name = "Pavel";
let age = 24;
let boo = true;

const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav_link");
const h1 = document.querySelectorAll (".h1");


console.log(navLinks);
console.log(header, navLinks);
console.log(h1);

window.addEventListener("scroll", function(){
    header.classList.add('blue');
});

window.addEventListener("scroll", function(){
    [...navLinks].map((link) => link.classList.add('red'));
});

window.addEventListener("scroll", function(){
    [...h1].map((link) => link.classList.add('green'));
});

