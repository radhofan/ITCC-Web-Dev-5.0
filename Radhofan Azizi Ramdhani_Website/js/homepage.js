document.addEventListener('DOMContentLoaded', () => {
    // Typing effect
    const slogan1 = document.getElementById('typing-effect1');
    const text1 = "The Only Right Place to Learn the Web."; 
    const typingSpeed = 100; 
    let index = 0;

    function typeText(element, text) {
        element.textContent = ''; 
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, typingSpeed);
    }

    function startTyping() {
        typeText(slogan1, text1);
    }

    var swiper = new Swiper('.homepage-swiper-container', {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 50,
        mousewheel: true,
        grabCursor: true,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });

    const slides = document.querySelectorAll('.homepage-swiper-slide');
    slides.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            swiper.slideToLoop(index); 
        });
    });

    // Add click event listeners to the specific divs
    const divs = document.querySelectorAll('.homepage-slogan-option-text');

    divs.forEach(div => {
        div.addEventListener('click', function () {
            const targetSection = this.getAttribute('data-target'); // Get the target section from data attribute

            if (targetSection === 'community') {
                window.location.href = 'community.html'; // Redirect to community.html
            } else {
                const section = document.getElementById(targetSection);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
                }
            }
        });
    });



    startTyping();
    
    
    
});