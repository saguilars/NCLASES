$(document).ready(function () {
    $('#summernote').summernote({
        height: 300,
        toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'hr']]
        ],
        dialogsFade: true,
        lang: 'es-ES',
        popover: {
            image: [],
            link: [],
            air: []
        }

    });
});