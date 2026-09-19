# Bugs found and fixed


## savePlayerStats localStorage 

**Symptom**
savePlayerStats still contained earlier object

**Cause**
savePlayerStat still contained the earlier object-based code; playerStats[timestamp] = ... attaches a named property to an array, and JSON.stringify silently drops those, so an empty array was being saved. 

**Fix**
Fixed by deleting the superseded lines.

**Date:** 
13/09/206

## Thrown error 

**Symptom** On How to Play, My Stats and About, the mobile menu button does nothing.

**Cause** All pages load script.js, which calls .addEventListener on .start-button. That element only exists on the game page, so on the others it's null and the call throws, stopping the rest of the file, including the nav toggle wiring at the bottom.

**Fix** Split the files - put navigation menu in seperate file (nav.js)


## Countdown bar error

**Symptom:**
countdown bar appears in game 1 but never again after a loss.

**Cause:**
the inline transition persists on the element. Resetting the width to full only happens instantly while the element is display: none; the game-over path never hid it, so the reset animated instead of jumping.

**Fix:**
hide the countdown and clear its timeout in endGame().

**Date:**
16/09/2026


## Mobile view sart button display error

**Symptom**: At 320px the Start button's label was clipped to "Star".

**Cause**: width: 10% on .start-button — fine on a wide screen, 32px on a 320px one.

**Fix**: Removed the fixed percentage width; the button is now sized by its padding and content.

**Date**: 19/09/2026


