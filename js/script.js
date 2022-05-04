window.addEventListener("scroll", () => {
  const header = document.querySelector("#header");
  const innerH = scrollY;
  if (innerH >= 100) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});
// menu
const toggleMenu = document.querySelector("#toggleMenu");
const openNav = document.querySelector("#openNav");
toggleMenu.addEventListener("click", () => {
  openNav.classList.toggle("active");
});
// counter


  window.addEventListener("scroll", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 600;
    counters.forEach((counter) => {
      const updateCounter = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        const count = parseInt(counter.innerText);
        const inc = Math.floor(target / speed);
        if (count < target) {
          counter.innerText = count + inc;
          setTimeout(updateCounter, 500);
        } else {
          count.innerText = target;
        }
      };
      updateCounter();
    });
  });

// categories
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
