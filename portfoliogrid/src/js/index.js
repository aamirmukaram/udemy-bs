(function () {
    console.log('[data-toggle="lightbox"]', $('[data-toggle="lightbox"]'));
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
})();
