//let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentences = ['cat bat rat', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
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

//displays the next letter expected
$('#target-letter').append($('<h1>').text('t'));

//adds current sentence to div to be displayed
$('#sentence').append($('<h3>').text(sentences[sentenceNumber]));

//testing a function that checks if key a is pressed
$(document).keypress(function (e) {

    //using .split to get each letter
    let sentenceCurrent = sentences[sentenceNumber];
    let currentLetter = sentenceCurrent[letterNumber];


    let key = event.key;
   




    //checks sentence length
    sentenceLength = sentenceCurrent.length;


    let currentPosition = parseInt($("#yellow-block").css('margin-left'))
    console.log(currentPosition);


    if (key == currentLetter) {
        console.log(letterNumber);
        console.log(currentLetter);
        
        //displays the next letter expected
        $('#target-letter').empty();
        $('#target-letter').append($('<h1>').text(sentenceCurrent[letterNumber + 1]));
        $('#yellow-block').css('margin-left', currentPosition + 17 + 'px');
        letterNumber++;
    };

    if (letterNumber == sentenceLength && sentenceNumber < 4) {
        console.log(sentenceLength);
        $('#sentence').empty();
        sentenceNumber++;
        $('#sentence').append($('<h3>').text(sentences[sentenceNumber]));
        letterNumber = 0;
        $('#target-letter').append($('<h1>').text(sentences[sentenceNumber][0]));
        
        

    };

    if (sentenceNumber == 4) {
        console.log('game over');
    }
});




//messing around with yellow div
// let currentPosition = parseInt($("#yellow-block").css(''))
// $('#yellow-block').css('margin-left', currentPosition + 20 + 'px');



//working on letter highlight by background-color
//$('#sentence').css('background-color', 'yellow');