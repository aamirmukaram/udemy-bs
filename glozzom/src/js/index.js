(function () {
    $('#videoModal')
        .on('hidden.bs.modal', function (e) {
            $('#youtubeVideoIframe')[0]
                .contentWindow
                .postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
        })
        .on('shown.bs.modal', function (e) {
            $('#youtubeVideoIframe')[0]
                .contentWindow
                .postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        });

    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
})();
