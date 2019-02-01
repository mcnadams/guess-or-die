function checkGuess(guess, word) {
    const idx = word.indexOf(guess);
    if(idx > -1){
        return true;
    }
    else {
        return false;
    }
}

function countLetter(letter, word) {
    let count = 0;
    if(!checkGuess(letter, word)) {
        count = 0;
    }
    else {
        for(let i = 0; i < word.length; i++) {
            if(letter === word[i]) {
                count++;
            }
        }
    }
    return count;
}

export { checkGuess, countLetter };