
// para usar swipper, la pagina oficial hay muchos ejemplos
/*
<link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
*/

// este es para hacer un cubo
// HTML
/*
 <section class="swiper contenedor">
        <ul class="swiper-wrapper">
            <li class="swiper-slide">
                <img class="slider__imagen" src="build/img/slide_01.jpg" alt="imagen slide">
            </li>
            <li class="swiper-slide">
                <img class="slider__imagen" src="build/img/slide_02.jpg" alt="imagen slide">
            </li>
            <li class="swiper-slide">
                <img class="slider__imagen" src="build/img/slide_03.jpg" alt="imagen slide">
            </li>
        </ul>
    </section>
*/

// Css
/*

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
*/

var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});