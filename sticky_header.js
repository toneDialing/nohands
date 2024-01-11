document.addEventListener('DOMContentLoaded', function() {
    const header_photo = document.getElementById('header_photo');
    const header = document.getElementById('sticky_header_container');
    const main = document.querySelector('main');
    let initial_unscrolled_position = header_photo.offsetHeight;

    //Recalculate initial_unscrolled_position whenever window is resized
    //Assumes margin of header_photo to be 0
    // TODO: Strengthen by accounting for margin size. Note that marginTop is returned as a string with 'px',
    // and so regular number conversion with Number() or + operator doesn't work.
    window.addEventListener('resize', function() {
        initial_unscrolled_position = header_photo.offsetHeight;
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