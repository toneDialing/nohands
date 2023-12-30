document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header_menu_icon').onmousemove = function() {
        document.querySelector('.header_menu_icon').style.backgroundColor = 'purple';
        document.querySelectorAll('.bar').forEach(function(bar) {
            bar.style.border = "1px solid #0000FF";
        });
    };
    document.querySelector('.header_menu_icon').onmouseleave = function() {
        document.querySelector('.header_menu_icon').style.backgroundColor = 'black';
        document.querySelectorAll('.bar').forEach(function(bar) {
            bar.style.border = 'none';
        });
    };
});