/**
 * @jest-environment jsdom
 */

const {
  dotsForRound,
  generateSequence,
  isTapCorrect,
  isRoundComplete,
} = require("../assets/js/game-logic");

test("expect number of dots for round one to be 3", () => {
  expect(dotsForRound(1)).toBe(3);
});

test("expect number of dots for round five to be 7", () => {
  expect(dotsForRound(5)).toBe(7);
});

test("expect number of dots for round 30 to be 10", () => {
  expect(dotsForRound(30)).toBe(10);
});

test("generateSequence(4, 16) to return an array of length 4", () => {
  expect(generateSequence(4, 16).length).toBe(4);
});

test("every value from generateSequence(4, 16) is between 0 and 15", () => {
  const myNumbers = generateSequence(4, 16);
  const allAreBetween0And15 = myNumbers.every((num) => {
    return num >= 0 && num <= 15
  });
  expect(allAreBetween0And15).toBe(true);
});

test("given sequence is [4,3,2] player tapped 4 when they were in position 0 should be true", () => {
  const sequence = [4, 3, 2];
  expect(isTapCorrect(sequence, 0, 4)).toBe(true);
});

test("given sequence is [4,3,2] player tapped 3 when they were in position 0 should be false", () => {
  const sequence = [4, 3, 2];
  expect(isTapCorrect(sequence, 0, 3)).toBe(false);
});

test("given sequence is [4,3,2] player tapped 2 when they were in position 2 should be true", () => {
  const sequence = [4, 3, 2];
  expect(isTapCorrect(sequence, 2, 2)).toBe(true);
});

test("player tapped enough dots to have finished the round", () => {
  const sequence = [4, 3, 2];
  const taps = [4, 3, 2];
  expect(isRoundComplete(sequence.length, taps.length)).toBe(true);
});

test("player hasn't tapped enough dots to have finished the round", () => {
  const sequence = [4, 3, 2];
  const taps = [4, 3];
  expect(isRoundComplete(sequence.length, taps.length)).toBe(false);
});
