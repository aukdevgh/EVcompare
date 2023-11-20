import Swiper from '../../../../node_modules/swiper/swiper-bundle.min.mjs';

new Swiper('.swiper__container', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: '20px',
    slidesPerView: 2,
    speed: 500,

    pagination: {
        el: '.swiper__pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '#next',
        prevEl: '#prev',
    },
});
