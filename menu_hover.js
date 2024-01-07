document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#menu_icon').onmousemove = function() {
        /* document.querySelector('#menu_icon').style.backgroundColor = 'purple'; */
        document.querySelectorAll('.bar').forEach(function(bar) {
            bar.style.boxShadow = "0 0 0.5rem #FFF";
            /* bar.style.border = "1px solid #0000FF"; */
        });
    };
    document.querySelector('#menu_icon').onmouseleave = function() {
        document.querySelectorAll('.bar').forEach(function(bar) {
            bar.style.boxShadow = 'none';
            /* bar.style.border = 'none'; */
        });
    };
    document.querySelector('#menu_icon').onclick = function() {
        /* document.querySelectorAll('.bar').forEach(function(bar) {
            bar.style.backgroundColor = 'green';
        }); */
        document.querySelector('#menu_icon').classList.toggle('menu_clicked');
        document.querySelector('#nav_container').classList.toggle('menu_clicked');
    };
});