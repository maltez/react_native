import asyncFactorial from '../components/factorial/async.factorial.service';
import { assert } from 'chai';


describe('Test async factorial', () => {
    it('Input 5. Expected 120', (done) => {
        // Arrange
        const input = 5;
        const expected = 120;
        const cb = function (res) {
           assert.equal(res, expected, 'Wrong factorial calculation.');
           done();
        };

        // Act
        asyncFactorial(input, cb);
    });

    it('Input 0. Expected 1', () => {

    });

    it('Input -5. Expected throw an exception', () => {

    });

    it('Input string. Expected throw an exception', () => {

    });
});