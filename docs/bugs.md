# Bugs found and fixed

## 1. Short name for the bug

**Symptom:**

Pressing Start during the reveal begins a second sequence while the first is still running; both write to the same sequence variable, so the dots shown and the dots expected fall out of step.

**Cause:**
**Fix:**
**Date:**

## savePlayerStats localStorage bug

**Symptom**
savePlayerStats still contained earlier object

**Cause**
savePlayerStat still contained the earlier object-based code; playerStats[timestamp] = ... attaches a named property to an array, and JSON.stringify silently drops those, so an empty array was being saved. 

**Fix**
Fixed by deleting the superseded lines.

**Date:** 
13/09/206