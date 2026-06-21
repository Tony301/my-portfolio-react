# VR Accident Investigation – README

## Overview

This project is a VR-based accident investigation experience built in Unity.
The user explores an industrial scene, interacts with evidence, and determines the cause of an accident.

---

## Controls & Interaction

* Use teleportation to move around the environment.
* Use the controller ray or direct interaction to grab and interact.
* Look for green highlighted spheres which indicate interactive evidence.
* Grab or select these objects to investigate them.

---

## Investigation Flow

1. Explore the environment using teleportation.
2. Identify and interact with all evidence objects.
3. Upon grabbing an evidence object:

   * A UI panel will appear showing details about the evidence.
   * After confirming, the evidence is marked as identified.
4. The main UI updates automatically to show investigation progress.

---

## Important Rules

* You cannot conclude the investigation without inspecting all evidence.
* If you attempt to conclude early, a warning message will be displayed.
* The user is restricted from going out of bounds using colliders placed in the environment.
* The player cannot go below a certain level due to collider boundaries.

---

## Conclusion Phase

* After investigating all evidence:

  * Return to the main UI panel.
  * Click on the Conclude button.
  * A question will appear asking for the cause of the accident.
* Select the correct answer based on your investigation.

---

## Retry System

* After answering:

  * The system displays whether the answer is correct or incorrect.
  * A Retry button is provided.
  * Clicking Retry reloads the scene and restarts the experience.

---

## Objective

The objective is to:

* Inspect all evidence carefully
* Understand the situation
* Identify the root cause of the accident

---

## Notes

* Each evidence interaction displays a UI panel with details.
* Investigation progress is tracked and updated in real time.
* The system enforces a structured investigation flow.

---

## Summary

* Explore the environment
* Inspect evidence
* Track progress
* Conclude the investigation
* Retry if needed

---

End of document.
