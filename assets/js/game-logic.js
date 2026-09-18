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

/**
 * @param {Array} stats
 * @param {'date' | 'roundReached'} field
 * @param {'descending' | 'ascending'} direction
 */
function sortStats(stats, field, direction) {
  // making a copy of records
  const statsCopy = stats.slice();
  // calling .sort() on the copy, handing it my referee

  statsCopy.sort((a, b) => {
    let answer = 0;

    if (a[field] < b[field]) {
      answer = -1;
    }
    if (a[field] > b[field]) {
      answer = 1;
    }

    if (direction === "descending") {
      answer *= -1;
    }

    return answer;
  });

  return statsCopy;
}

/*
  allows you to call
  await wait(2000)
*/
function wait(milliseconds) {
  // returning a promise will allow this function to be "awaited"
  return new Promise((resolve) => {
    // set a timeout for the milliseconds passed in
    setTimeout(() => {
      // resolve the promise (the "awaiting" stops when resolve is called)
      resolve();
    }, milliseconds);
  });
}

function formatDate(isoString) {
  const dateObj = new Date(isoString);
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");
  const date = `${year}-${month}-${day}`;
  return date;
}

function formatTime(isoStringTime) {
  const dateObj = new Date(isoStringTime);
  const time = `${dateObj.getHours()}:${dateObj.getMinutes().toString().padStart(2, "0")}`;
  return time;
}

if (typeof module !== "undefined") {
  module.exports = {
    dotsForRound,
    generateSequence,
    isTapCorrect,
    isRoundComplete,
    sortStats,
    formatDate,
    formatTime,
  };
}
