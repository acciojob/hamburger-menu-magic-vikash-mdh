//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var navList = document.getElementById('nav-list');

    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});
