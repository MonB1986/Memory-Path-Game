// dom
const startButton = document.querySelector(".start-button");
const dotElements = document.querySelectorAll(".dot");
const countdownDiv = document.querySelector("#countdown");
const roundDisplay = document.querySelector("#round-display");
const statusMessage = document.querySelector("#status-message");

//
const gridSize = 16;

// state
let litTime = 400;
let gapTime = 250;
let sequence = [];
let playersTaps = [];
let playersTurn = false;
let playersTurnDuration = 5000;
let playersTurnTimeout; // when this runs out, it means the player ran out of time
let roundNumber = 1;
let playerStats = getPlayerStats();
let gameStartTime = 0;

function startNewGame() {
  statusMessage.textContent = `Memorise the sequence of dots`
  startButton.disabled = true;
  roundNumber = 1;
  gameStartTime = Date.now();
  litTime = 400;
  startRound();
}

function startRound() {
  roundDisplay.textContent = `
    Round : ${roundNumber}
  `
  sequence = generateSequence(dotsForRound(roundNumber), gridSize);
  // TODO: litTime = litTimeForRound(litTime)
  console.log(sequence); //Temp
  revealSequence();
}

async function revealSequence() {
  //light up and dim one at a time
  for (let i = 0; i < sequence.length; i++) {
    let litDotIndex = sequence[i];
    dotElements[litDotIndex].classList.add("lit"); // light up the dot
    await wait(litTime); // pause for litTime
    dotElements[litDotIndex].classList.remove("lit"); // dim the dot
    await wait(gapTime); // pause for gapTime before going to next loop-iteration
  }

  startPlayerTurn();
}

function startPlayerTurn() {
  playersTaps = [];
  playersTurn = true;
  statusMessage.textContent = `Your turn`
  console.log("Your turn");

  // show the countdown
  countdownDiv.style.width = "70%";
  // css transitions look like this:          transition: width 650ms linear;
  countdownDiv.style.transition = `width ${playersTurnDuration}ms linear`;
  countdownDiv.classList.remove("hidden");

  // on the next DOM paint, set the width to 0. the transition has been applied so it will take some times
  setTimeout(() => {
    countdownDiv.style.width = "0px";
  }, 10);

  // start timeout for player running out of time
  playersTurnTimeout = setTimeout(() => {
    runOutOfTime();
  }, playersTurnDuration);
}

function savePlayerStat(roundReached) {
  //Game Duration
  const milliseconds = Date.now() - gameStartTime;
  const seconds = milliseconds / 1000;
  const durationSeconds = Math.round(seconds);
  console.log(durationSeconds); //Temp
  //Record object
  const record = {
    date: new Date().toISOString(),
    roundReached,
    durationSeconds,
  };
  console.log(record); //Temp
  //Adding record to playerStats array
  playerStats.push(record);
  //Saving the array to localStorage
  localStorage.setItem("player-statistics", JSON.stringify(playerStats));
}

function endGame() {
  playersTurn = false;
  savePlayerStat(roundNumber);
  startButton.disabled = false;
  countdownDiv.classList.add("hidden");
  clearTimeout(playersTurnTimeout);
}

function runOutOfTime() {
  endGame();
  statusMessage.textContent = `Out of time — game over`
  console.log("Out of time - Game Over")
}

startButton.addEventListener("click", startNewGame);

for (let i = 0; i < dotElements.length; i++) {
  const currentDotElement = dotElements[i];
  currentDotElement.addEventListener("click", function () {
    // if it's not the player's turn, do nothing
    if (!playersTurn) {
      return;
    }

    playersTaps.push(i);
    const position = playersTaps.length - 1;

    const wasCorrect = isTapCorrect(sequence, position, i);

    if (!wasCorrect) {
      endGame();
      statusMessage.textContent = `Wrong dot - Game Over`
      console.log("Wrong dot - Game Over");
      return;
    }

    // Tap was correct

    console.log(position);
    console.log(playersTaps);

    const roundComplete = isRoundComplete(sequence.length, playersTaps.length);
    if (roundComplete) {
      playersTurn = false;
      statusMessage.textContent = `Round complete - Well done!`
      console.log("Round complete - Well done!");
      roundNumber++;

      // hide the countdown and stop the timeout
      countdownDiv.classList.add("hidden");
      clearTimeout(playersTurnTimeout);

      setTimeout(() => {
        startRound();
      }, 2000);
    }
  });
}


