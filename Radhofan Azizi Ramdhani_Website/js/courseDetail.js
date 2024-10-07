document.addEventListener("DOMContentLoaded", function() {
    const modules = document.querySelectorAll('.courseDetail-courseSection-module');
    
    modules.forEach(module => {
        module.addEventListener('click', function() {
            const contentId = 'content' + this.id.replace('module', '');
            const content = document.getElementById(contentId);
            
            // Toggle visibility of the content
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                this.querySelector('.bx').classList.replace('bx-chevron-down', 'bx-chevron-up');
            } else {
                content.style.display = 'none';
                this.querySelector('.bx').classList.replace('bx-chevron-up', 'bx-chevron-down');
            }
        });
    });
});
