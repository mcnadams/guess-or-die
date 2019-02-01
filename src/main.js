import { checkGuess, countLetter } from '../src/word-game.js';

const guessForm = document.getElementById('guess-form');
const rightGuessed = document.getElementById('right');
const wrongGuessed = document.getElementById('wrong');
const secretWordNode = document.getElementById('secret-word');

const words = [
    'gallows',
    'alchemy',
    'weekend',
    'caffeine'
];
// console.log(words.length);
// console.log(words[1][1]);

const secretWord = words[0];

//put blank spaces in word section for secret word
for(let i = 0; i < secretWord.length; i++) {
    secretWordNode.textContent += '__ ';
}

guessForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const guess = document.getElementById('guess').value[0];

    let result = checkGuess(guess, secretWord);
    let instances = 0;
 
    if(result){
        rightGuessed.textContent += guess;
        instances = countLetter(guess, secretWord);
        console.log('instances', instances);
    }
    else {
        wrongGuessed.textContent += guess;
    }
});
 



//update secret word blank spaces when a correct letter is guessed


//add a part to the gallows if a wrong letter is guessed


//track number of wrong guesses and lose if max is reached


//win/lose message at the top


//choose a random word from words array


//if the same letter is guessed twice, don't add it to the letters guessed again

