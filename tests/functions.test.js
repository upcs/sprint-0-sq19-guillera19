//Avery Guillermo
//functions.test.js

//This file is used by jest to test the sum function in functions.js
//It has two unit tests that pass, and one unit test that fails, as per
//the instructions in sprint0. 

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
