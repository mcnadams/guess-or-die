import { checkGuess, countLetter } from '../src/word-game.js';

const guessForm = document.getElementById('guess-form');
const rightGuessed = document.getElementById('right');
const wrongGuessed = document.getElementById('wrong');
const secretWordNode = document.getElementById('secret-word');
const announceResult = document.getElementById('announce-result');
const guessNode = document.getElementById('guess');
const gallows = document.getElementById('gallows');

let wrongGuessCount = 0;
const maxWrongGuesses = 5;
const words = [
    'gallows',
    'alchemy',
    'weekend',
    'caffeine'
];

let rand = Math.random() * words.length;
rand = Math.floor(rand);
console.log(rand);


const imgSrc = [
    '../assets/hanging-body1.jpg',
    '../assets/hanging-body2.jpg',
    '../assets/hanging-body3.jpg',
    '../assets/hanging-body4.jpg',
    '../assets/hanging-body5.jpg',
    '../assets/hanging-body6.jpg'
];

let correctGuesses = [];
let correctGuessCount = 0;

const secretWord = words[rand];
console.log(secretWord);
let spacesRemaining = 0;

makeSecretWord();

function makeSecretWord() {
    secretWordNode.textContent = '';
    spacesRemaining = 0;
    for(let i = 0; i < secretWord.length; i++) {
        let secretLetter = secretWord[i];
        if(correctGuesses.indexOf(secretLetter) > -1) {
            secretWordNode.textContent += secretLetter;
        }
        else {
            secretWordNode.textContent += ' __ ';
            spacesRemaining++;
        }     
    }
    if(spacesRemaining === 0) {
        const winMessage = document.createElement('h2');
        winMessage.classList.add('win');
        winMessage.textContent = 'You win! Die another day.';
        announceResult.appendChild(winMessage);
    }
}

guessForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const guess = guessNode.value[0];
    if(guess === undefined) {
        return;
    }
    guessNode.value = '';

    let result = checkGuess(guess, secretWord);
 
    if(result){
        correctGuesses[correctGuessCount] = guess;
        correctGuessCount++;
        rightGuessed.textContent += guess;
        makeSecretWord();
    }
    else {
        wrongGuessed.textContent += guess;
        const newBodyPart = document.createElement('img');
        newBodyPart.src = imgSrc[wrongGuessCount];
        newBodyPart.classList.add('body-part');
        wrongGuessCount++;
        gallows.appendChild(newBodyPart);
        if(wrongGuessCount > maxWrongGuesses) {
            guessForm.classList.add('hidden');
            const loseMessage = document.createElement('h2');
            loseMessage.classList.add('lose');
            loseMessage.textContent = 'Sorry, you\'re out of chances. See you in hell.';
            announceResult.appendChild(loseMessage);
        }
    }
});





//choose a random word from words array

//if the same letter is guessed twice, don't add it to the letters guessed again