const customSlider = new Swiper('.custom-slider', {
    loop: false,  
    slidesPerView: 1,  
    spaceBetween: 30,  
    autoHeight: true,  
});


function goToSlide(index) {
    customSlider.slideTo(index);
}


const tabs = document.querySelectorAll('.pricing-tab');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', function() {

        tabs.forEach(tab => tab.classList.remove('active'));
        

        this.classList.add('active');


        goToSlide(index);
    });
});