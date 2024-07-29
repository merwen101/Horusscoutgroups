// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const categories = document.querySelectorAll('.category');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');

            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the clicked link
            link.classList.add('active');

            // Hide all categories
            categories.forEach(cat => cat.style.display = 'none');

            // Show the selected category
            document.getElementById(category).style.display = 'block';
        });
    });

    // Show the first category by default
    navLinks[0].classList.add('active');
    categories[0].style.display = 'block';
});
