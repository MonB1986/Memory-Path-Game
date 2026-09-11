// dom
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const startButton = document.querySelector(".start-button");
const dotElements = document.querySelectorAll(".dot");

//
const gridSize = 16;

// state
let litTime = 400;
let gapTime = 250;
let sequence = [];
let playersTaps = [];
let playersTurn = false;
let roundNumber = 1;
let playerStats = getPlayerStats()

function startNewGame() {
  roundNumber = 1;
  litTime = 400; 
  startRound();
}

function startRound() {
  sequence = generateSequence(dotsForRound(roundNumber), gridSize);
  // TODO: litTime = litTimeForRound(litTime)
  console.log(sequence);
  revealSequence();
}

function revealSequence_v1() {
  //light up and dim one at a time
  for (let i = 0; i < sequence.length; i++) {
    let litDotIndex = sequence[i];
    let isLastDot = i === sequence.length - 1;
    let whenToLightUp = i * (litTime + gapTime)
    // "outer timeout" to wait for the previous dots to finish
    setTimeout(
      () => {
        dotElements[litDotIndex].classList.add("lit");
        // "inner timeout" to hide after the reveal duration
        setTimeout(() => {
          dotElements[litDotIndex].classList.remove("lit");
          // if we made it to the last dot AFTER dimming the dot...
          if (isLastDot) {
            startPlayerTurn();
          }
        }, litTime);
      }, whenToLightUp);
  }
}

async function revealSequence() {
  //light up and dim one at a time
  for (let i = 0; i < sequence.length; i++) {
    let litDotIndex = sequence[i];
    dotElements[litDotIndex].classList.add("lit");
    await wait(litTime)
    dotElements[litDotIndex].classList.remove("lit");
    await wait(gapTime)
  }

  startPlayerTurn()
}

function startPlayerTurn() {
  playersTaps = [];
  playersTurn = true;
  console.log("Your turn");
}

startButton.addEventListener("click", startNewGame);

for (let i = 0; i < dotElements.length; i++) {
  const currentDotElement = dotElements[i];
  currentDotElement.addEventListener("click", function () {
    if (!playersTurn) {
      return;
    }

    playersTaps.push(i);
    const position = playersTaps.length - 1;

    const wasCorrect = isTapCorrect(sequence, position, i);

    if (!wasCorrect) {
      playersTurn = false;
      savePlayerStat(roundNumber)
      console.log("Wrong dot - Game Over");
      return;
    }

    // Tap was correct

    console.log(position);
    console.log(playersTaps);

    const roundComplete = isRoundComplete(sequence.length, playersTaps.length);
    if (roundComplete) {
      playersTurn = false;
      console.log("Round complete - Well done!");
      roundNumber++;

      setTimeout(() => {
        startRound();
      }, 2000);
    }
  });
}

//Toggles burger menu in mobile view
navToggle.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});
