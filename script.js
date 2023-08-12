
const toggle = document.querySelector('.menu-toggle input');
const ulNavbar = document.querySelector('nav ul');

toggle.addEventListener('click', function() {
    ulNavbar.classList.toggle('slide');
});

