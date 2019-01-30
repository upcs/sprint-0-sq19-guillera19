const sum = require('../js/functions.js');

//this test passes
test('adds 3 + 4 to equal 7', () => {
     expect(sum(3, 4)).toBe(7);
     });

//this test passes
test('adds -3 + -4 to equal -7', () => {
     expect(sum(-3, -4)).toBe(-7);
     });

//this is the test that fails!!
test('adds 3 + 3 to equal 11', () => {
     expect(sum(3, 3)).toBe(11);
     });
