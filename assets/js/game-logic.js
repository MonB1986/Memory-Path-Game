const startingDots = 3;

function dotsForRound(roundNumber) {
  return Math.min(startingDots + roundNumber - 1, 10);
}

function generateSequence(howMany, gridSize) {
  const sequence = [];

  for (let i = 0; i < howMany; i++) {
    const randomI = Math.floor(Math.random() * gridSize);
    sequence.push(randomI);
  }

  return sequence;
}



if (typeof module !== "undefined") {
  module.exports = { dotsForRound, generateSequence };
}