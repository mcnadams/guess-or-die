import { checkGuess, countLetter } from '../src/word-game.js';

const test = QUnit.test;

test('function countLetter() returns 0 if letter isn\'t in word', function(assert) {
    const letter = 'z';
    const word = 'apple';

    const result = countLetter(letter, word);
    const expected = 0;

    assert.equal(result, expected);
});

test('function countLetter() returns number of instances of a letter in a string', function(assert) {
    const letter = 'p';
    const word = 'apple';

    const result = countLetter(letter, word);
    const expected = 2;

    assert.equal(result, expected);
});

test('if letter is in the word, checkGuess() returns true', function(assert) {
    const guess = 'e';
    const word = 'apple';

    const result = checkGuess(guess, word);
    const expected = true;

    assert.equal(result, expected);
});

test('if letter is not in the word, checkGuess() returns false', function(assert) {
    const guess = 'v';
    const word = 'apple';

    const result = checkGuess(guess, word);
    const expected = false;

    assert.equal(result, expected);
});