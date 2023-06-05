//   NAVBAR DISPLAY

const nav = document.querySelector("#nav_items");
const openNavBtn = document.querySelector("#open_nav_btn");
const closeNavBtn = document.querySelector("#close_nav_btn");


const openNav = () => {
    nav.style.display = "flex";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "inline-block";
}

const closeNav = () => {
    nav.style.display = "none";
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = "none";
}


openNavBtn.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);



// Close Navbar on click of one of its Links
if(document.body.clientWidth < 1024) {
    nav.querySelectorAll("li a").forEach(navLink => {
        navLink.addEventListener('click', closeNav)
    })
    
}

/* ********===== WINDOW-SCROLLED ======****** */
window.addEventListener("scroll", () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0 );
})


/**
   * Testimonials slider
   */
new Swiper('.gallery-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      599: {
          slidesPerView:2,
          spaceBetween:20
      },
      1023: {
          slidesPerView:3,
          spaceBetweeen:20,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
});


