
// =========================
// PROJECT CARD (LIGHTWEIGHT)
// =========================

const cards = document.querySelectorAll(".grid-project-card");

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }

  });

}, {
  threshold: 0.2
});

cards.forEach(card => observer.observe(card));


// =========================
// SMOOTH BACKGROUND (NO HEAVY LOOP)
// =========================

const projectSection = document.querySelector(".grid-project-section");
const projectTitle = document.querySelector(".grid-project-left h2");
const projectText = document.querySelector(".grid-project-left p");

let ticking = false;

window.addEventListener("scroll", () => {

  if(!ticking){

    window.requestAnimationFrame(() => {

      const rect = projectSection.getBoundingClientRect();

      let progress = 1 - (rect.top / window.innerHeight);

      progress = Math.min(Math.max(progress, 0), 1);

      projectSection.style.background = `rgb(
        ${Math.floor(13 + progress * 240)},
        ${Math.floor(13 + progress * 240)},
        ${Math.floor(13 + progress * 240)}
      )`;

      projectTitle.style.color = `rgb(${255 - progress * 200}, ${255 - progress * 200}, ${255 - progress * 200})`;

      projectText.style.color = `rgb(${180 - progress * 120}, ${180 - progress * 120}, ${180 - progress * 120})`;

      ticking = false;

    });

    ticking = true;
  }

});