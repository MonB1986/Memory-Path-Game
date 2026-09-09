/**
 * @jest-environment jsdom
 */

const {dotsForRound,generateSequence} = require("../assets/js/game-logic");



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
    const allAreBetween0And15 = myNumbers.every(num => num >= 0 && num <= 15);
    expect(allAreBetween0And15).toBe(true);
});