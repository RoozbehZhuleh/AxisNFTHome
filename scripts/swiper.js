const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 50,
    width: 300,
    loop: true,
  loopAdditionalSlides: 5,
    // direction: 'horizontal',

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
    pagination: {
    el: '.swiper-pagination',
  },
});