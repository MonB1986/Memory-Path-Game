// dom
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const startButton = document.querySelector(".start-button");
const dotElements = document.querySelectorAll(".dot");

const gridSize = 16;
const litTime = 400;
const gapTime = 250;
const startingDots = 3;

// state
let sequence = [];
let roundNumber = 1;

function dotsForRound(roundNumber) {
  return Math.min(startingDots + roundNumber - 1, 10);
}

function startNewGame() {
  roundNumber = 1;
  sequence = generateSequence(dotsForRound(roundNumber), gridSize);
  console.log(sequence);
  revealSequence(litTime, gapTime);
}

function generateSequence(howMany, gridSize) {
  const sequence = [];

  for (let i = 0; i < howMany; i++) {
    const randomI = Math.floor(Math.random() * gridSize);
    sequence.push(randomI);
  }

  return sequence;
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
            // startPlayerTurn()
          }
        }, litTime);
      },
      i * (litTime + gapTime),
    );
  }
}

startButton.addEventListener("click", startNewGame);

navToggle.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});
