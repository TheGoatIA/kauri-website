// Active side-link highlighting on scroll (about page).
window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('.feature-section');
    var navLinks = document.querySelectorAll('.side-link');

    var current = '';
    sections.forEach(function (section) {
        if (window.pageYOffset >= section.offsetTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (current && link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
