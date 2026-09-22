# To do

## Completed

- Removed all temporary `console.log()` statements.
- Updated the wireframe notes after the numbered-dot mechanic changed.
- Confirmed the dots cannot be clicked while the sequence is being shown.
- Finished `runOutOfTime()` so the game ends correctly when the timer expires.
- Cleared `playersTurnTimeout` and hid the countdown on game over.
- Fixed the Start button display in mobile view.

## Future improvements

- Re-check disabled button styling in Firefox and Safari.
- Add a "Give Up" button to end a game cleanly.

## Decisions made

- Disabled the Start button rather than using a state flag, because the browser stops firing click events on a disabled button, preventing the player from starting another game while the sequence is being revealed.
- Left `wait()` in the game logic because it pauses the game until the next action is triggered.
- `savePlayerStats()` reads `gameStartTime` from module state rather than taking it as a parameter, because the function already writes to `localStorage` and is not unit-testable either way. The pure logic is tested separately.

## JS Testing

- All five JavaScript files were linted.
- Only `storage.js` needed fixing.
- The JSHint loop warning was reviewed and dismissed because the loop uses `let`, so each iteration has its own binding.