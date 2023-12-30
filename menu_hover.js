document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header_menu_icon').onmousemove = function() {
        document.querySelector('.header_menu_icon').style.backgroundColor = 'purple';
    };
    document.querySelector('.header_menu_icon').onmouseleave = function() {
        document.querySelector('.header_menu_icon').style.backgroundColor = 'black';
    };
});