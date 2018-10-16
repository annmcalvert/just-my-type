//hides uppercase when page loads
$(document).ready(function () {
    $('#keyboard-upper-container').hide();
});

//shows uppercase when shift key is pressed
$(document).keydown(function (e) {
    if (e.which == 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
})

//shows lowercase when shift key is released
$(document).keyup(function (e) {
    if (e.which == 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }
})

//gets ascii code from keypress and changes background color to yellow
$(document).keypress(function (e) {
    console.log('Ascii : ' + e.which);
    let keyId = e.which;
    $('#' + keyId).css('background-color', 'yellow');
});

//clears yellow background from all keys
$(document).keyup(function (e) {
    $('.key').each(function () {
        $(this).css('background-color', '');
    })
})
