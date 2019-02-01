const guessForm = document.getElementById('guess-form');
const guessButton = document.getElementById('guess-button');
const lettersGuessed = document.getElementById('letters-guessed');
const secretWord = document.getElementById('secret-word');

const words = [
    'gallows',
    'alchemy',
    'weekend',
    'caffeine'
];
console.log(words.length);
console.log(words[1][1]);

//put blank spaces in word section for secret word
for(let i = 0; i < words[1].length; i++) {
    secretWord.textContent += '__ ';
}


guessButton.addEventListener('click', function(event) {
    event.preventDefault();
    const guess = document.getElementById('guess').value;
    console.log(guess);

    lettersGuessed.textContent += guess;
});




//update secret word blank spaces when a correct letter is guessed


//add a part to the gallows if a wrong letter is guessed


//track number of wrong guesses and lose if max is reached


//win/lose message at the top


//choose a random word from words array


//if the same letter is guessed twice, don't add it to the letters guessed again

