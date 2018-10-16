let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

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
    //console.log('Ascii : ' + e.which);
    let keyId = e.which;
    $('#' + keyId).css('background-color', 'yellow');
});

//clears yellow background from all keys
$(document).keyup(function (e) {
    $('.key').each(function () {
        $(this).css('background-color', '');
    })
})

//pulls first sentence from array and adds it to div
let sentence = $('<h4>').text(sentences[0]);
$('#sentence').append(sentence);

//practicing using .split to get each letter
let sentenceTest = sentences[0];
let eachLetterArray = sentenceTest.split('');
//console.log(eachLetterArray);
let eachLetter = eachLetterArray[0];
console.log(eachLetter);

//testing a function that checks if key a is pressed
$(document).keypress(function (e) {
    let key = event.key;
    //console.log(key);
    if (key == eachLetter) {
        console.log('test');
    }
});