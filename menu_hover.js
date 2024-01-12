document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menu_icon').onmousemove = function() {
        document.querySelectorAll('.bar').forEach(function(bar) {
            bar.style.boxShadow = "0 0 0.5rem #FFF";
        });
    };
    document.getElementById('menu_icon').onmouseleave = function() {
        document.querySelectorAll('.bar').forEach(function(bar) {
            bar.style.boxShadow = 'none';
        });
    };
    document.getElementById('menu_icon').onclick = function() {
        document.getElementById('menu_icon').classList.toggle('menu_clicked');
        document.getElementById('nav_container').classList.toggle('menu_clicked');
    };
});