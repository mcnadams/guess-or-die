import { checkGuess, countLetter } from '../src/word-game.js';

const guessForm = document.getElementById('guess-form');
const rightGuessed = document.getElementById('right');
const wrongGuessed = document.getElementById('wrong');
const secretWordNode = document.getElementById('secret-word');
const winMessage = document.getElementById('win');
const loseMessage = document.getElementById('lose');
const announceResult = document.getElementById('announce-result');

let wrongGuessCount = 0;
const maxWrongGuesses = 3;

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
        wrongGuessCount++;
        if(wrongGuessCount > maxWrongGuesses) {
            guessForm.classList.add('hidden');
            const newMessage = document.createElement('h2');
            newMessage.classList.add('lose');
            newMessage.textContent = 'Sorry, you\'re out of chances. See you in hell.';
            announceResult.appendChild(newMessage);
        }
    }
});


 



//update secret word blank spaces when a correct letter is guessed


//add a part to the gallows if a wrong letter is guessed


//win message at the top


//choose a random word from words array


//if the same letter is guessed twice, don't add it to the letters guessed again