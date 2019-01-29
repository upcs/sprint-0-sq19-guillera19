const sum = require('../js/functions.js');

test('adds 3 + 4 to equal 7', () => {
     expect(sum(3, 4)).toBe(7);
     });

test('adds -3 + -4 to equal -7', () => {
     expect(sum(-3, -4)).toBe(-7);
     });
