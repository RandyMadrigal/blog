window.addEventListener("DOMContentLoaded", () => {
  const carouselImages = document.getElementById("carousel-images");
  let currentIndex = 0;
  const totalImages = carouselImages.children.length;
  console.log(totalImages);

  // Update the carousel position
  function updateCarousel() {
    const offset = -currentIndex * 100; // Move by percentage (100% for one image)
    carouselImages.style.transform = `translateX(${offset}%)`;
  }

  // Auto-scroll functionality
  let autoScroll = setInterval(() => {
    currentIndex = currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  }, 1500);

  // Pause auto-scroll on hover
  const carouselContainer = document.getElementById("carousel-container");
  carouselContainer.addEventListener("mouseenter", () =>
    clearInterval(autoScroll)
  );
  carouselContainer.addEventListener("mouseleave", () => {
    autoScroll = setInterval(() => {
      currentIndex = currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
      updateCarousel();
    }, 5000);
  });
});
