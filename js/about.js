const trackLeft = document.querySelector(".track-left");
const trackRight = document.querySelector(".track-right");

// Hitung offset maksimum scroll horizontal
function updateScroll() {
  const scrollY = window.scrollY;

  // Baris kiri geser ke kiri
  trackLeft.style.transform = `translateX(-${scrollY * 0.4}px)`;

  // Baris kanan geser ke kanan
  trackRight.style.transform = `translateX(${scrollY * 0.4}px)`;
}

// Inisialisasi
window.addEventListener("scroll", updateScroll);

// Supaya mulai dari awal tanpa space kosong
window.addEventListener("load", () => {
  updateScroll();
});