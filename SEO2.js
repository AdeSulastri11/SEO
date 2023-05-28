// toggle
const navbar = document.querySelector('.nav-link');
const navbarMenu = document.querySelector('#navbar-menu')
// ketika navbar menu di klik
navbarMenu.addEventListener('click', function() {
    navbar.classList.toggle('active')
});

document.addEventListener('click', function(e) {
    if(!navbar.contains(e.target) && !navbarMenu.contains(e.target)) {
        navbar.classList.remove('active')
    }
})