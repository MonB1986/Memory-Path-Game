# Manual Testing

The table below lists the expected behaviour before testing each feature. The "What Happened" column was completed during testing.

| Feature | What I Did | What I Expected | What Happened |
|---------|------------|-----------------|---------------|
| Home page navigation | Clicked the Home link from another page. | The Home page should open. | |
| How to Play navigation | Clicked the How to Play link. | The How to Play page should open. | |
| About navigation | Clicked the About link. | The About page should open. | |
| Stats navigation | Clicked the Stats link. | The Stats page should open. | |
| Mobile menu | Opened the mobile menu and closed it again. | The nav links become visible, and clicking again hides them. | |
| Start button | Pressed the Start button. | A new game should begin and the first sequence should play. | |
| Sequence reveal | Started a game and watched the sequence. | Each dot should light up one at a time and dim before the next one appears. | |
| Correct tap | Entered the correct pattern. | No visible change expected; the game waits for the next tap | |
| Wrong tap | Tapped the wrong dot during a round. | The game should end and show the Game Over message. | |
| Round completed | Completed a round successfully. | The next round should begin with one extra dot. | |
| Timer expires | Waited until the timer reached zero. | The game should end when time runs out. | |
| Round counter | Completed a round. | The round counter should increase by one. | |
| Save result | Finished a game and opened the Stats page. | The game result should be saved and shown in the stats table. | |
| Sort by date (ascending) | Sorted the table by date in ascending order. | The oldest result should appear first. | |
| Sort by date (descending) | Sorted the table by date in descending order. | The newest result should appear first. | |
| Sort by round (ascending) | Sorted the table by round reached in ascending order. | The lowest round should appear first. | |
| Sort by round (descending) | Sorted the table by round reached in descending order. | The highest round should appear first. | |
| Empty state | Opened the Stats page with no saved games. | A message should appear prompting the player to play a game. | |
| Layout at 320px | Viewed the site at 320px wide. | Nav should appear as a burger menu and layout should fit without overlapping elements. | |
| Layout at 768px | Viewed the site at 768px wide. | Nav should no longer be a burger menu and the layout should remain clear and responsive. | |
| Layout at 1200px | Viewed the site at 1200px wide. | The layout should stay centred and use the extra space cleanly. | |
| Start button disabled during play | Checked that the start button is disabled during gameplay. | The start button should not be clickable. | |
| Data persists after closing the browser | Closed the browser and reopened it. | The stats page should still show game stats from previous session. | |
| Keyboard navigation | Used tab key to navigate to all the focusable elements on each page | All the focusable elements should show a visible focus indicator as they are reached. | |