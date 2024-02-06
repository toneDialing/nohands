document.addEventListener('DOMContentLoaded', function() {
    const header_figure = document.getElementById('header_figure');
    const header = document.getElementById('sticky_header_container');
    const page_title = document.getElementById('sticky_page_title');
    const main = document.querySelector('main');
    let initial_unscrolled_position = header_figure.offsetHeight;

    //Recalculate initial_unscrolled_position whenever window is resized
    //** Assumes margin of header_figure to be 0 **//
    window.addEventListener('resize', function() {
        initial_unscrolled_position = header_figure.offsetHeight;
    });

    //Adjust padding for <main> depending upon whether a page title exists
    if(page_title) {
        window.addEventListener('scroll', function() {
            if (this.scrollY > initial_unscrolled_position) {
                header.classList.add('stick_on_scroll');
                page_title.classList.add('stick_on_scroll');
                main.classList.add('stick_on_scroll_with_page_title');
            }
            else {
                header.classList.remove('stick_on_scroll');
                page_title.classList.remove('stick_on_scroll');
                main.classList.remove('stick_on_scroll_with_page_title');
            }
        });
    }
    else {
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
    }
});