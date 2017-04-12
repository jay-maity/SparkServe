/**
 * Created by jay on 02/04/17.
 */

$(document).ready(function () {

    $(".upload-file").change(function () {
        var file = this.files[0];
        name = file.name;
        size = file.size;
        type = file.type;

        if (file.name.length < 1) {
            alert("Please select a file")
        }
        else if (file.size > 100000) {
            alert("The file is too big");
        }
        // else if(file.type != 'image/png' && file.type != 'image/jpg' && file.type != 'image/gif' && file.type != 'image/jpeg' ) {
        //     alert("The file does not match png, jpg or gif");
        // }
        else {
            $('.btnFile').attr("disabled", false);

        }
    });

    $('.btnFile').click(function (e) {
                e.preventDefault();

                var formData = new FormData($('#form1')[0]);
                $.ajax({
                    url: 'api/uploadcode',
                    type: 'POST',
                    // xhr: function() {  // custom xhr
                    //     myXhr = $.ajaxSettings.xhr();
                    //     if(myXhr.upload){ // if upload property exists
                    //         myXhr.upload.addEventListener('progress', progressHandlingFunction, false); // progressbar
                    //     }
                    //     return myXhr;
                    // },
                    // Ajax events
                    success: completeHandler = function (data) {
                        // /*
                        // * Workaround for Chrome browser // Delete the fake path
                        // */
                        // if(navigator.userAgent.indexOf('Chrome')) {
                        //     var catchFile = $(":file").val().replace(/C:\\fakepath\\/i, '');
                        // }
                        // else {
                        //     var catchFile = $(":file").val();
                        // }
                        // var writeFile = $(":file");
                        // writeFile.html(writer(catchFile));
                        $(".upload-status").html("File Uploaded");
                    },
                    error: errorHandler = function (error1) {
                        $(".upload-status").html("File Upload failed");
                    },
                    // Form data
                    data: formData,
                    // Options to tell jQuery not to process data or worry about the content-type
                    cache: false,
                    contentType: false,
                    processData: false
                }, 'json')

                return false;
    });

    $(".upload-data-file").change(function () {
        var file = this.files[0];
        name = file.name;
        size = file.size;
        type = file.type;

        if (file.name.length < 1) {
            alert("Please select a file")
        }
        else if (file.size > 100000) {
            alert("The file is too big");
        }
        else {
            $('.btnDataFile').attr("disabled", false);
        }
    });

    $('.btnDataFile').click(function (e) {
        e.preventDefault();
        debugger;
        var formData = new FormData($('#form1')[0]);
        $.ajax({
            url: 'api/uploaddata',
            type: 'POST',
            success: completeHandler = function (data) {
                $(".upload-status").html("File Uploaded");
            },
            error: errorHandler = function (error1) {
                $(".upload-status").html("File Upload failed");
            },
            // Form data
            data: formData,
            // Options to tell jQuery not to process data or worry about the content-type
            cache: false,
            contentType: false,
            processData: false
        }, 'json')

        return false;
    });
})
