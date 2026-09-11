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

function isTapCorrect(sequence, position, tappedDot) {
  return tappedDot === sequence[position];
}

function isRoundComplete(sequenceLength, tapsCount) {
  return sequenceLength === tapsCount;
}

/*
  allows you to call
  await wait(2000)
*/
async function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
}

function getPlayerStats() {
  const ls = localStorage.getItem('player-statistics')
  if (ls === null) return {}
  return JSON.parse(ls)
}

function savePlayerStat(roundReached) {
  const timestamp = new Date().toString()
  // playerStats at the key of timestamp = {...}
  playerStats[timestamp] = { roundReached: roundReached }
  localStorage.setItem('player-statistics', JSON.stringify(playerStats))
}



if (typeof module !== "undefined") {
  module.exports = {
    dotsForRound,
    generateSequence,
    isTapCorrect,
    isRoundComplete,
  };
}
