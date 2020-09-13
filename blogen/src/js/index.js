(function () {
    $(document).ready(function () {
        const ckdEditorNode = document.querySelector('#ckdEditor');
        if (ckdEditorNode) {
            ClassicEditor
                .create(ckdEditorNode)
                .catch(error => {
                    console.error(error);
                });
        }
    });
})();
