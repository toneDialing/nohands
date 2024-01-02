document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('sticky_header_container');
    let initial_unscrolled_position = header.offsetTop;

    //Recalculate initial_unscrolled_position whenever window is resized
    window.addEventListener('resize', function() {
        initial_unscrolled_position = header.offsetTop;
    });

    window.addEventListener('scroll', function() {
        if (this.scrollY > initial_unscrolled_position) {
            header.classList.add('stick_on_scroll');
        }
        else {
            header.classList.remove('stick_on_scroll');
        }
    });
});