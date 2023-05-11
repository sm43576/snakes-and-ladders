# SE 750 Project Implementation  

Snakes and ladder is a recreation of the original board game implemented into a web-based version. The thematic used is ocean and with snakes being replaced as seaweed and ladders with bubbles.


## Table of Contents
1. [Installation](#setup)
2. [Documentation](#documentation)
    - [Instructions](#file-structure)
    - [Components](#components)
    - [Routing](#routing)
3. [References](#references)

## Installation
Make sure you have the latest version of `node.js` and `npm` installed. This can be found on the official NodeJS

website: https://nodejs.org/.

Open up two terminals one for launching the front and one for the backend.

1. Frontend terminal

```shell
cd frontend
npm install
npm run dev
```
2. Backend terminal

```shell
cd backend
npm install
npm start
```
## Documentation
frame works used etc

### Instructions
The game follows the standardize rules of snakes and ladders,rolling a dice between 1-6 when it is your turn and moving in a 100 square grid.
Landing on the base of a bubble stream will take you to the top and seaweed down, both are colour coded to match start and end position.
The game ends when a player lands on 100.

1. Click the Play button.
2. Select number of human players and number of computer players.
3. Select icon that you wish to be represented as on the board.
4. Roll the dice when your turn comes.
5. Win.

### Components
Die
RollDice
AvatarPage
BackToHomePopup
GamePage
Homepage
NumPlayersPage
ResultsPage
TutorialPopup

### Routing
Routing in our game is achieved with the `react-router-dom"` library. The Browse Router 
is stored in App.jsx and specify routes that can be accessed in the game as a `route`.

When routing throughout the pages we utilise `link` and the appropriate page name that its assigned to in App.jsx.



## Credits
This project was created by project-group-indigo-impalas consisting of :

Hayoon Seo
Juwong Jung
Julie Kim
Min sun Kim
Shou Miyamoto
Rachel Nataatmadja

## References