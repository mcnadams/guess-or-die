import { checkGuess } from '../src/word-game.js';

const test = QUnit.test;

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