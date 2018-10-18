//let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentences = ['first sentence', 'hello world', 'ann calvert', 'praying mantis', 'last sentence'];
let letterIndex = 0;
let sentenceIndex = 0;
let mistakeNumber = 0;
let startDate = null;

//any time a letter match or completion of sentence occurs, 
//this function replaces #sentence with the current sentence and appropriate highlighted letter
//it also changes #target-letter to the next expected letter to be typed 
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

//this function checks the time elapsed and calculates WPM
//it also hides #prompt-container, shows results, shows the #startButton, and resets sentenceIndex to 0
function endGame(startDate) {
    let stopDate = new Date();
    let elapsedTime = stopDate.getTime() - startDate.getTime();
    let elapsedMinutes = elapsedTime / 60000;
    let WPM = Math.round(54 / elapsedMinutes - 2 * mistakeNumber);
    $('#prompt-container').hide();
    $('#results').html('<h3>Your WPM score is:</h3><br><p>' + WPM + '</p><h3>Would you like to play again?</h3>');
    $('#startButton').show();
    sentenceIndex = 0;
    letterIndex = 0;
    $('#feedback').removeClass()
}

//hides uppercase when page loads
$(document).ready(function () {
    $('#keyboard-upper-container').hide();
});

//when #startButton is clicked a new date is logged, and the display is changed for game play
$('#startButton').click(function () {
    mistakeNumber = 0;
    startDate = new Date();
    $('#startButton').hide();
    $('#startHeader').remove();
    $('#prompt-container').show();
    $('#results').empty();
    formatSentence(sentences[sentenceIndex], 0);
})

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

//gets ascii code from keypress and changes background-color of keys to yellow
$(document).keypress(function (e) {
    let keyId = e.which;
    $('#' + keyId).css('background-color', 'yellow');
});

//clears yellow background from all keys when keyup
$(document).keyup(function (e) {
    $('.key').each(function () {
        $(this).css('background-color', '');
    })
})

//every time a key is pressed
$(document).keypress(function (e) {
    let sentenceCurrent = sentences[sentenceIndex];
    let currentLetter = sentenceCurrent[letterIndex];
    let sentenceLength = sentenceCurrent.length;
    let key = event.key;
    $('#feedback').removeClass();

    //if correct key is pressed
    if (key === currentLetter) {
        letterIndex++;
        formatSentence(sentenceCurrent, letterIndex);
        $('#feedback').addClass('glyphicon glyphicon-ok');
    } else {
        $('#feedback').addClass('glyphicon glyphicon-remove');
        mistakeNumber++
    }

    //changes to next sentence when current sentence is complete
    if (letterIndex === sentenceLength && sentenceIndex < 4) {
        sentenceIndex++;
        letterIndex = 0;
        formatSentence(sentences[sentenceIndex], letterIndex);
        $('#feedback').removeClass();
    }

    //when sentenceIndex = 4, gameEnd function is called
    if (sentenceIndex === 4) {
        endGame(startDate);
    }
});