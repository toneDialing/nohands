document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('sticky_header_container');
    const initial_position = header.offsetTop;
    window.addEventListener('scroll', function() {
        if (this.scrollY > initial_position) {
            header.classList.add('stick_on_scroll');
        }
        else {
            header.classList.remove('stick_on_scroll');
        }
    });
});