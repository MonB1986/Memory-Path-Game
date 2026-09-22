# Bugs Found and Fixed

## Bug 1 – `savePlayerStats()` Local Storage

**Symptom**

`savePlayerStats()` still contained the earlier object.

**Cause**

`savePlayerStats()` still contained the earlier object-based code. `playerStats[timestamp] = ...` attached a named property to an array, and `JSON.stringify()` silently dropped those properties, so an empty array was being saved.

**Fix**

Deleted the superseded lines.

**Date**

13/09/2026

---

## Bug 2 – Thrown Error on Live Pages

**Symptom**

On the How to Play, Stats and About pages, the mobile menu button did nothing.

**Cause**

All pages loaded `script.js`, which called `.addEventListener()` on `.start-button`. That element only existed on the game page, so on the other pages it was `null`. The error stopped the rest of the file from running, including the navigation code.

**Fix**

Split the JavaScript into separate files and moved the navigation into `nav.js`.

---

## Bug 3 – Countdown Bar Error

**Symptom**

The countdown bar appeared during the first game but never appeared again after losing.

**Cause**

The inline transition stayed on the element. Resetting the width only happened instantly while the element was `display: none`, but the game-over path never hid it, so the reset animated instead of jumping.

**Fix**

Hid the countdown and cleared its timeout inside `endGame()`.

**Date**

16/09/2026

---

## Bug 4 – Mobile Start Button Display Error

**Symptom**

At **320px**, the Start button label was clipped to "Star".

**Cause**

`width: 10%` on `.start-button` worked on wider screens but became only 32px wide at 320px.

**Fix**

Removed the fixed percentage width so the button is now sized by its content and padding.

**Date**

19/09/2026