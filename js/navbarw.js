const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbarMenu");
const navLinks = document.querySelectorAll(".navbar-menu a");

// TOGGLE MENU
hamburger.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

// CLOSE MENU SAAT KLIK LINK + SMOOTH SCROLL
navLinks.forEach(link => {

  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    if(target){

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

    navbarMenu.classList.remove("active");
  });

});

// CLOSE OUTSIDE CLICK
document.addEventListener("click", (e) => {

  if(!navbarMenu.contains(e.target) && !hamburger.contains(e.target)){
    navbarMenu.classList.remove("active");
  }

});


// NAVBAR SCROLL EFFECT (LIGHTWEIGHT)
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  }else{
    navbar.classList.remove("scrolled");
  }

});