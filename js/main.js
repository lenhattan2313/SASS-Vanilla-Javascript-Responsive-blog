// //variables
const collapse = document.querySelector(".toggle");
const navBar = document.querySelector(".nav-bar");
const navSocial = document.querySelector(".nav-social");
const carouselContent = document.querySelector(".carousel-content");
const slider = document.querySelectorAll(".slider");
const pre = document.querySelector(".fa-chevron-left");
const next = document.querySelector(".fa-chevron-right");
const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");
const slider3 = document.querySelector(".slider3");
const slider4 = document.querySelector(".slider4");
const moveUp = document.querySelector(".move-up");

// Navbar
collapse.addEventListener("click", collapseNav);
function collapseNav() {
  navBar.classList.toggle("collapse");
}

//carousel
let counter = 0;
let sliderLength = slider.length;
function reset() {
  for (let i = 0; i < sliderLength; i++) {
    slider[i].style.opacity = "0";
  }
}
function startSlider() {
  reset();
  slider[counter].style.opacity = "1";
}
startSlider();
next.addEventListener("click", nextSlider);
pre.addEventListener("click", preSlider);

function nextSlider() {
  reset();
  counter++;
  if (counter === sliderLength) {
    counter = 0;
  }
  slider[counter].style.opacity = "1";
}
function preSlider() {
  reset();
  counter--;
  if (counter === -1) {
    counter = sliderLength - 1;
  }
  slider[counter].style.opacity = "1";
}

//smooth scroll
function smothScroll(destinate, duration) {
  let target = document.querySelector(destinate);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapse = currentTime - startTime;
    let run = ease(timeElapse, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapse < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}
moveUp.addEventListener("click", () => smothScroll(".nav-bar", 2000));
// moveUp.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// });
// $(".move-up").click(function() {
//   $("html, body").animate(
//     {
//       scrollTop: 0
//     },
//     2000
//   );
// });
