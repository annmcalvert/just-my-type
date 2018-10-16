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



let letterNumber = 0;
let sentenceNumber = 0;

// //using .split to get each letter
// let sentenceCurrent = sentences[sentenceNumber];
// let eachLetterArray = sentenceCurrent.split('');
// console.log(eachLetterArray);

// //checks sentence length
// sentenceLength = sentenceCurrent.length;

//adds current sentence to div to be displayed
$('#sentence').append($('<h4>').text(sentences[sentenceNumber]));

//testing a function that checks if key a is pressed
$(document).keypress(function (e) {

    //using .split to get each letter
    let sentenceCurrent = sentences[sentenceNumber];
    let eachLetterArray = sentenceCurrent.split('');

    let key = event.key;
    let eachLetter = eachLetterArray[letterNumber];

    //checks sentence length
    sentenceLength = sentenceCurrent.length;

    if (key == eachLetter) {
        console.log(letterNumber);
        console.log(eachLetter);
        letterNumber++;
    };
    if (letterNumber == sentenceLength && sentenceNumber < 4) {
        console.log(sentenceLength);
        sentenceNumber++;
        $('#sentence').empty();
        $('#sentence').append($('<h4>').text(sentences[sentenceNumber]));
        letterNumber = 0;
    };

    if (sentenceNumber == 4) {
        console.log('game over');
    }
});
