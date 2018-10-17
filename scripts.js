//let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentences = ['first sentence', 'hello world', 'ann calvert', 'praying mantis', 'last sentence'];

function formatSentence(sentence, letterIndex) {
    const formattedSentence = sentence.split('').map((letter, index) => {
        if (index === letterIndex) {
            $('#target-letter').text(letter);
            return '<span class="yellow">' + letter + '</span>';
        } else {
            return letter;
        }
    }).join('');
    $('#sentence').html(formattedSentence);
}

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

let letterIndex = 0;
let sentenceIndex = 0;





//testing a function that checks if key a is pressed
$(document).keypress(function (e) {
    let sentenceCurrent = sentences[sentenceIndex];
    let currentLetter = sentenceCurrent[letterIndex];
    let key = event.key;
    //checks sentence length
    let sentenceLength = sentenceCurrent.length;
    $('#feedback').removeClass();

    // if (!e.originalEvent.repeat) {
    //     startDate = new Date();
    // }

    formatSentence(sentenceCurrent, letterIndex);

    if (key === currentLetter) {
        letterIndex++;
        //formatSentence(sentenceCurrent, letterIndex);   
        // $('#feedback').removeClass();
        $('#feedback').addClass('glyphicon glyphicon-ok');
    } else {
        // $('#feedback').removeClass();
        $('#feedback').addClass('glyphicon glyphicon-remove');
    }

    //changes sentence when current is complete
    if (letterIndex === sentenceLength && sentenceIndex <= 4) {
        sentenceIndex++;
        letterIndex = 0;
        //formatSentence(sentences[sentenceIndex], letterIndex);
        //formatSentence(sentenceCurrent, letterIndex);

        $('#feedback').removeClass();
    }

    if (sentenceIndex === 5) {
        console.log('game over');
        endGame(startDate);
    }
});


//let stopDate = new Date();
//let elapsedTime = stopDate.getTime() - startDate.getTime();

let startDate = null;

$('#start').click(function () {
    startDate = new Date();
    console.log(startDate);
    //startGame();
    $(this).remove();
    //adds current sentence to div to be displayed and current letter
    formatSentence(sentences[sentenceIndex], 0);
})

// $('#stop').click(function (){
//     let stopDate = new Date();
//     let elapsedTime = stopDate.getTime() - startDate.getTime();
//     console.log(stopDate);
//     console.log(elapsedTime);
//     let elapsedMinutes = elapsedTime / 60000;
//     console.log(elapsedMinutes);
// })

// function startGame () {
//     startDate = new Date();
//     console.log(startDate);
// $('#target').remove('#start');
// }

function endGame(startDate) {
    let stopDate = new Date();
    let elapsedTime = stopDate.getTime() - startDate.getTime();
    console.log(stopDate);
    console.log(elapsedTime);
    let elapsedMinutes = elapsedTime / 60000;
    console.log(elapsedMinutes);
}