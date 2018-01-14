# React Tic-Tac-Toe

The idea of this project was to create a simple Tic-Tac-Toe game based on React and Flux.

## Technologies Used:

* **HTML5/CSS3**
* **React with Flux**
* **React Router**
* **Webpack/NPM**

<br>

## Layouts/Views:

1. **Layout.jsx** - Main View that contains the layout and routes for the application.
2. **TheBoard.jsx** - View that contains the main game logic used for the application.
   * Function to determine if a new game is necessary
   * Function to clear board
   * Changing of Turns
   * Display of the board including accepting player marks
   * Calculation of winner
   * Determination of winner name
3. **NewGame.jsx** - View that is allows the entery of player names and selection of first player (X or O).

<br>

## Components:
1. **NavBar.jsx** - for the purpose of this game, I went with a navbar element to handle the navigation and user interaction. Everything is route based and works with React Router.

<br>

## Actions:
1. **GameActions.js** - Contains the following functions
   * SetTurn - used to transmit the Player Names and first player that was selected to the store.
   * SendResult - used to submit the scores to API and send the resulting object to the Store.

<br>

## Dispatchers:
1. **gameDispatcher** - Not much to document. Functions as a dispatcher.

<br>

## Stores:
1. **gameStore.js** - The only game store used.
   * Holds model data for the initial selections - Player Names and First player selected
   * Has functions to return this data to other views.
   * Set player function that will emit changes regarding initial player data
   * Action handler to receive the actions
