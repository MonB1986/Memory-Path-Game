/**
 * @jest-environment jsdom
 */

const {dotsForRound} = require("../assets/js/game-logic");



test("expect number of dots for round one to be three", () => {
    expect(dotsForRound(1)).toBe(3);
})