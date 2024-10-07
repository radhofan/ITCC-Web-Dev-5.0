document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        effect: 'slide',
        slidesPerView: 'auto', 
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
        on: {
            init: function () {
                setTimeout(() => {
                    this.update();
                }, 100); 
            },
            resize: function () {
                this.update();
            },
        },
    });

    window.addEventListener('resize', () => {
        swiper.update();
    });

    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            window.location.href = 'roadmap.html';
        });
    });
});
