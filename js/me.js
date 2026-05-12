const imageWrapper = document.querySelector(".about-image-wrapper");

imageWrapper.addEventListener("mouseenter", () => {
  imageWrapper.classList.add("active");
});

imageWrapper.addEventListener("mouseleave", () => {
  imageWrapper.classList.remove("active");
});

/* MOBILE TOUCH */
imageWrapper.addEventListener("click", () => {
  imageWrapper.classList.toggle("active");
});