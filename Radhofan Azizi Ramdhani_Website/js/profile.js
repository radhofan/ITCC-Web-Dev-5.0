document.addEventListener('DOMContentLoaded', () => {

    const menuItems = document.querySelectorAll('.profile-menu ul li');
    const sections = {
        courses: document.querySelector('.profile-courses'),
        certificates: document.querySelector('.profile-certificates'),
        stats: document.querySelector('.profile-stats')
    };


    function showSection(sectionKey) {

        Object.values(sections).forEach(section => section.style.display = 'none');

 
        sections[sectionKey].style.display = 'block';

   
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`.profile-menu ul li:nth-child(${Object.keys(sections).indexOf(sectionKey) + 1})`).classList.add('active');
        
        
    
    }


    menuItems[0].addEventListener('click', () => showSection('courses'));
    menuItems[1].addEventListener('click', () => showSection('certificates'));
    menuItems[2].addEventListener('click', () => showSection('stats'));


    showSection('courses');
});
