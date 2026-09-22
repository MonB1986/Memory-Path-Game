# Manual Testing

The table below lists the expected behaviour before testing each feature. Each expected result was written before testing, and the 'What Happened' column was completed during testing.

| Feature | What I Did | What I Expected | What Happened |
|---------|------------|-----------------|---------------|
| Home page navigation | Clicked the Home link from another page. | The Home page should open. | The Home page opened correctly from every page tested. |
| How to Play navigation | Clicked the How to Play link. | The How to Play page should open. | The How to Play page opened correctly from every page tested. |
| About navigation | Clicked the About link. | The About page should open. | The About page opened correctly from every page tested. |
| Stats navigation | Clicked the Stats link. | The Stats page should open. | The Stats page opened correctly from every page tested. |
| Mobile menu | Opened the mobile menu and closed it again. | The nav links become visible, and clicking again hides them. | The mobile menu opened and closed correctly, and the navigation links remained fully usable. |
| Start button | Pressed the Start button. | A new game should begin and the first sequence should play. | The game started correctly and the first sequence began immediately. |
| Sequence reveal | Started a game and watched the sequence. | Each dot should light up one at a time and dim before the next one appears. | Each dot lit up one at a time and dimmed before the next dot appeared. |
| Correct tap | Entered the correct pattern. | No visible change expected; the game waits for the next tap | The game accepted each correct tap and waited for the next input until the round was completed. |
| Wrong tap | Tapped the wrong dot during a round. | The game should end and show the Game Over message. | The game ended immediately and displayed the Game Over message. |
| Round completed | Completed a round successfully. | The next round should begin with one extra dot. | The next round started correctly with one additional dot in the pattern. |
| Timer expires | Waited until the timer reached zero. | The game should end when time runs out. | The game ended when the timer reached zero and displayed the Game Over message. |
| Round counter | Completed a round. | The round counter should increase by one. | The round counter increased correctly after completing the round. |
| Save result | Finished a game and opened the Stats page. | The game result should be saved and shown in the stats table. | The completed game was saved and appeared correctly in the Stats table. |
| Sort by date (ascending) | Sorted the table by date in ascending order. | The oldest result should appear first. | The oldest game appeared first after sorting in ascending order. |
| Sort by date (descending) | Sorted the table by date in descending order. | The newest result should appear first. | The newest game appeared first after sorting in descending order. |
| Sort by round (ascending) | Sorted the table by round reached in ascending order. | The lowest round should appear first. | The lowest round appeared first after sorting in ascending order. |
| Sort by round (descending) | Sorted the table by round reached in descending order. | The highest round should appear first. | The highest round appeared first after sorting in descending order. |
| Empty state | Opened the Stats page with no saved games. | A message should appear prompting the player to play a game. | An empty state page appeared with a clickable link prompting the player to start playing. |
| Layout at 320px | Viewed the site at 320px wide. | Nav should appear as a burger menu and layout should fit without overlapping elements. | The navigation changed to a burger menu, and the layout fitted within 320px without overlapping elements. |
| Layout at 768px | Viewed the site at 768px wide. | Nav should no longer be a burger menu and the layout should remain clear and responsive. | The navigation returned to the full menu layout, and the page remained clear and responsive. |
| Layout at 1200px | Viewed the site at 1200px wide. | The layout should stay centred and use the extra space cleanly. | The layout stayed centred and used the extra space cleanly. |
| Start button disabled during play | Checked that the start button is disabled during gameplay. | The start button should not be clickable. | The Start button became disabled during gameplay and could not be pressed until the game ended. |
| Data persists after closing the browser | Closed the browser and reopened it. | The stats page should still show game stats from previous session. | The previously saved game results were still available after reopening the browser. |
| Keyboard navigation | Used tab key to navigate to all the focusable elements on each page | All the focusable elements should show a visible focus indicator as they are reached. | Every focusable element displayed a visible focus indicator while navigating with the keyboard. |
| Browser compatibility | Opened the live site in Microsoft Edge, Google Chrome and Mozilla Firefox, played a round and checked the Start button styling. | The game should work correctly and the disabled Start button should display properly during gameplay. | The game worked correctly in the browsers, and the disabled Start button displayed as expected during gameplay. |