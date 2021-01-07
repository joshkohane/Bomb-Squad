# Bomb-Squad

[Bomb Squad](https://joshkohane.github.io/Bomb-Squad/) is a high-anxiety bomb-defusing experience. Each level, a player will have a blank code. They must guess the letters for the code one at a time before the timer runs out and the bomb explodes. The player will also only have a certain number of guesses before the bomb goes off. Upon a correct guess of the code, the player will move up one level. Each level, the clock will move faster and faster, giving them less time to guess the word.

## Technologies

Bomb Squad was created using:

1. HTML5
2. CSS3
3. JavaScript

## Game Play

Game play of bomb squad is directed by a series of modals. Upon viewing the game, the inital modal with directions appears. Upon win or loss of a level, the appropriate modal appears. Below is a sample of the landing page modal.

![Bomb Squad Modal](https://github.com/joshkohane/NJTimesCooking/blob/master/app/assets/images/modal_screenshot.png)

The design of the main game screen is meant to be playful and fun, a diffusion of the tension caused by the menacing music and ticking clock. The bomb features a clock, a space to enter the secret code, and game stats, including remaining guesses and previously guessed letters.

![Bomb Squad Game Play](https://github.com/joshkohane/NJTimesCooking/blob/master/app/assets/images/modal_screenshot.png)

## Animations

A main feature of Bomb Squad is the animations. These include moving eyes, a drop of sweat when the clock is nearly out of time, and a moving wick with an animated flame at its tail. But most exciting of all, is the explosion that occurs upon losing a level. This explosion is made up of 400 particles, each moving in a different direction. Initially, this was a challenge. I needed each of the 400 particles to travel in a different direction. Below is the code with my solution:

```javascript

```
