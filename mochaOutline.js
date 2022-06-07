//simple outlines of mocha testing utilizing naive approaches and
//Setup/Exercise/Verify approach

//==========|Non-Functioning Outline|==========//
describe('Math', () => {
  describe('.min', () => {
    it('returns the argument with the lowest value', () => {
      //tests go here
    })
    it('returns -Infinity when no arguments are provided', () => {
      //tests go here
    })
  })
})

//==========|Working Example|==========//
const assert = require('assert');

describe('+', () => {
  it('returns the sum of its arguments', () => {
    assert.ok(3 + 4 === 7);
  });
});

//==========|Setup||Exercise||Verify|==========//
const assert = require('assert');

// Naive approach
describe('.pop', () => {
  it('returns the last element in the array [naive]', () => {
    assert.ok(['padawan', 'knight'].pop() === 'knight');
  });
});

// 3 phase approach
describe('.pop', () => {
  it('returns the last element in the array [3phase]', () => {
    // Setup
    const knightString = 'knight';
    const jediPath = ['padawan', knightString];

    // Exercise
    const popped = jediPath.pop();

    // Verify
    assert.ok(popped === knightString);
  });
});

