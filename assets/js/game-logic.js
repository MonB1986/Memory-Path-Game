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

function sortStats (records, field, direction) {

  // making a copy of records
  const recordCopy = records.slice();
  // calling .sort() on the copy, handing it my referee


  recordCopy.sort((a, b) => {
  let answer = 0;

  if (a[field] < b[field]) {answer = -1};
  if (a[field] > b[field]) {answer = 1};
  
  if(direction === "descending") {answer *= -1}
  
  return answer;
});

return recordCopy;
  
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





if (typeof module !== "undefined") {
  module.exports = {
    dotsForRound,
    generateSequence,
    isTapCorrect,
    isRoundComplete,
    sortStats
  };
}
