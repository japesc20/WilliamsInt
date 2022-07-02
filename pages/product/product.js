// Hamburger menu variables
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link")

// Landing page image carousel variable
const buttons = document.querySelectorAll('[data-carousel-button]');


// Hamburger menu toggle onClick
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

navLinks.forEach(n => 
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
  )


  // Fade in on scroll - Products

  window.onload = function() {
    const EFFECT = document.querySelectorAll(".effect");

    window.addEventListener('scroll', scrollEffect);

    function scrollEffect() {
      for (let i=0; i < EFFECT.length; i++) {
        let productArray = EFFECT[i];
        let distInView = productArray.getBoundingClientRect().top - window.innerHeight + 20;

        if (distInView < 0) {
          productArray.classList.add("inView")
        } else {
          productArray.classList.remove("inView")
        }
      }
    } 
    scrollEffect()
  }
