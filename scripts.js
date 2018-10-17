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
let mistakeNumber = 0;

//testing a function that checks if key a is pressed
$(document).keypress(function (e) {
    let sentenceCurrent = sentences[sentenceIndex];
    let currentLetter = sentenceCurrent[letterIndex];
    let key = event.key;
    //checks sentence length
    let sentenceLength = sentenceCurrent.length;
    $('#feedback').removeClass();

    formatSentence(sentenceCurrent, letterIndex);

    if (key === currentLetter) {
        letterIndex++;
        //formatSentence(sentenceCurrent, letterIndex);   
        $('#feedback').addClass('glyphicon glyphicon-ok');
    } else {
        $('#feedback').addClass('glyphicon glyphicon-remove');
        mistakeNumber++
    }

    //changes sentence when current is complete
    if (letterIndex === sentenceLength && sentenceIndex <= 4) {
        sentenceIndex++;
        letterIndex = 0;
        //formatSentence(sentences[sentenceIndex], letterIndex);
        $('#feedback').removeClass();
    }

    if (sentenceIndex === 5) {
        endGame(startDate);
    }
});



let startDate = null;

$('#startButton').click(function () {
    mistakeNumber = 0;
    startDate = new Date();
    console.log(startDate);
    //$('#startButton').disabled = true;
    $('#startButton').hide();
    $('#startHeader').remove();
    $('#prompt-container').show();
    $('#results').empty();
    formatSentence(sentences[sentenceIndex], 0);
})

function endGame(startDate) {
    let stopDate = new Date();
    let elapsedTime = stopDate.getTime() - startDate.getTime();
    console.log(stopDate);
    console.log(elapsedTime);
    let elapsedMinutes = elapsedTime / 60000;
    console.log(elapsedMinutes);
    let WPM = Math.round(54 / elapsedMinutes - 2 * mistakeNumber);
    $('#prompt-container').hide();
    $('#results').html('<h3>Your WPM score is:</h3><br><p>' + WPM + '</p><h3>Would you like to play again?</h3>');
    $('#startButton').show();
    sentenceIndex = 0;   
}


//I hide the button and then show it.  I need to check to be sure it is disabled also.
//some timing is still of with highlighting and current expected letter.

