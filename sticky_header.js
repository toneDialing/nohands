document.addEventListener('DOMContentLoaded', function() {
    const header_figure = document.getElementById('header_figure');
    const header = document.getElementById('sticky_header_container');
    const main = document.querySelector('main');
    let initial_unscrolled_position = header_figure.offsetHeight;

    //Recalculate initial_unscrolled_position whenever window is resized
    //** Assumes margin of header_figure to be 0 **//
    window.addEventListener('resize', function() {
        initial_unscrolled_position = header_figure.offsetHeight;
    });

    window.addEventListener('scroll', function() {
        if (this.scrollY > initial_unscrolled_position) {
            header.classList.add('stick_on_scroll');
            main.classList.add('stick_on_scroll');
        }
        else {
            header.classList.remove('stick_on_scroll');
            main.classList.remove('stick_on_scroll');
        }
    });
});