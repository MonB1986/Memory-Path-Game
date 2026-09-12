# To do

## Before submission
- Remove all // TEMP console.logs
- Re-check disabled button styling in Firefox, Edge, Safari
- Wireframes show numbered dots — mechanic changed, update or note it

## Polish if time (16–17 Sep)
- "Give up" button to end a game cleanly

## Decisions made
- Disabled the Start button rather than a state flag, because the browser stops firing click events on a disabled button therefore not allowing the player to click on it whilst sequence is being revealed.

- wait() decicion left in game logic because it actually pauses the game until the next action is fired. 