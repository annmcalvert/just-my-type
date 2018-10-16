//hides uppercase when page loads
$(document).ready(function() {
    $('#keyboard-upper-container').hide();
});

//shows uppercase when shift key is pressed
$(document).keydown(function(e) {
    if (e.which == 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
})

//shows lowercase when shift key is released
$(document).keyup(function(e) {
    if (e.which == 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }
})

//events when key is pressed
$(document).keydown(function(e) {
    let keyNumber = e.which;
    $('#' + keyNumber).css('background-color', 'yellow');
})

//events when key is released
$(document).keyup(function(e) {
    let keyNumber = e.which;
    $('#' + keyNumber).css('background-color', '');
})


