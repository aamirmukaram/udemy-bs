(function () {
    $('#navbar-main a').on('click', evt => {
        evt.preventDefault();
        const hash = evt.target.hash;

        if (hash) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 800, () => {
                // window.location.hash = hash;
            });
        }
    });
})();
