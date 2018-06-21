import { assert } from 'chai';
import factorial from '../components/factorial/factorial.service';

test('Test factorial method. Input 5. Expected 120', () => {
    // Arrange
    const input = 5;
    const expected = 120;

    // Act
    const actual = factorial(input);

    // Assert
    assert.equal(actual, expected, 'Wrong factorial calculation.');
});

test('Test factorial method. Input 0. Expected 1', () => {
    // Arrange
    const input = 0;
    const expected = 1;

    // Act
    const actual = factorial(input);

    // Assert
    assert.equal(actual, expected, 'Wrong factorial calculation.');
});

test('Test factorial method. Input -2. Expected Throws an error', () => {
    // Arrange
    const input = -2;

    // Act
    assert.throws(() => {
        factorial(input);
    }, 'Factorial is not defined for negative number');
});

test('Test factorial method. Input string. Expected Throws an error', () => {
    // Arrange
    const input = 'str';

    // Act
    assert.throws(() => {
        factorial(input);
    }, 'Expected number type');
});