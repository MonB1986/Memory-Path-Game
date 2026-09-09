// dom
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const startButton = document.querySelector(".start-button");
const dotElements = document.querySelectorAll(".dot");

const gridSize = 16;
const litTime = 400;
const gapTime = 250;

// state
let sequence = [];
let playersTaps = [];
let playersTurn = false;
let roundNumber = 1;

function startNewGame() {
  roundNumber = 1;
  sequence = generateSequence(dotsForRound(roundNumber), gridSize);
  console.log(sequence);
  revealSequence(litTime, gapTime);
}

function revealSequence(litTime, gapTime) {
  //light up and dim one at a time
  for (let i = 0; i < sequence.length; i++) {
    let litDotIndex = sequence[i];
    let isLastDot = i === sequence.length - 1;
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
      },
      i * (litTime + gapTime),
    );
  }
}

function startPlayerTurn() {
  playersTaps = [];
  playersTurn = true;
  console.log("Your turn");
}

startButton.addEventListener("click", startNewGame);

for (let i = 0; i < dotElements.length; i++) {
  let currentDotElement = dotElements[i];
  currentDotElement.addEventListener("click", function () {
    if (!playersTurn) {
      return;
    }

    playersTaps.push(i);
    console.log(playersTaps);
  });
}

navToggle.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});
