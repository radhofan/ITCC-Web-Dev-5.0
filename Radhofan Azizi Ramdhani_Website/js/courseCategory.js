document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.courseCategory-categories input[type="checkbox"]');
    const courseItems = document.querySelectorAll('.courseCategory-course-item');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterCourses);
    });

    function filterCourses() {
        const selectedCategories = Array.from(checkboxes)
            .filter(checkbox => checkbox.name === 'category' && checkbox.checked)
            .map(checkbox => checkbox.value);

        const selectedFilters = Array.from(checkboxes)
            .filter(checkbox => checkbox.name === 'filter' && checkbox.checked)
            .map(checkbox => checkbox.value);

        courseItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            const itemPrice = item.getAttribute('data-price');

            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(itemCategory);
            const priceMatch = selectedFilters.length === 0 || selectedFilters.includes(itemPrice);

            if (categoryMatch && priceMatch) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});
