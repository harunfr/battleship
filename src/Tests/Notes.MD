/**
General notes -->
gameboard is 10 x 10
Ship with length 1 x Battleship(4), 2 x Cruiser(3), 3 x Destroyer(2), 4 x  Boat(1)
Player1 and Player2 should inform Game object about succesful shot, it's essential to bot's logic.

after all ships placed, isReady -> true and ...

@ there can be placeAllRandomly method.


 * --------------
 *  Ship
 * Ship should have -->
 *
 * property:
 * length, coordinates, axis
 *
 * --------------
 *  Game Board
 * gameBoard should have -->
 *
 * property: shipCoordinates, receivedAttacks, health, imPlacableCoords, ready, isSuccesfulShot
 *
 * method:  place(new ship()), attack(coordinate), receiveAttack(coordinate),
 *
 * --------------
 *  Player
 * Player should have -->
 *
 * property: gameBoard
 *
 * method:
 *
 */

 steps of game:
  as a player1:
 1- I place ships on game board.
 2- I attack player2's board.
 when game starts:
 3- whoever hits all of the opposite player's ships, wins.
  I see on screen "<winner-name> wins!"

name of steps -->
1- placing of ships on the board
2- game just started
3- game ended

Each player has 10 ships:

1---------

Boat1, Boat2, Boat3, Boat4
Destroyer1, Destroyer2, Destroyer3
Cruiser1, Cruiser2
Battleship

player1.place({name: 'Boat1', [[2, 4]]}) [2, 4] -> [x, y]
-> [x,y],[x,y-1],[x,y+1],[x-1,y],[x-1,y-1],[x-1,y+1],[x+1,y],[x+1,y-1],[x+1,y+1] --> should be implacable
-> edge case: first and last column or row

player1.place({name: 'Destroyer1', [[2,4],[2,5]]}) [2, 4] -> [x, y]
-> [x,y],[x,y-1],[x,y+1],[x-1,y],[x-1,y-1],[x-1,y+1],[x+1,y],[x+1,y-1],[x+1,y+1] --> should be implacable same thing is true for [2,5]
// using first element of ship's coordinates array when placing would be good.
// there can be a helper method named: markImplacables()
// player can see a notification if he/she tries to place ship on a place outside the gameboard, or implacable coordinate


2-----------------
 game just started

 ## First Move
 E for Expect
 Exx for no need
 player1.attack([3,5])
 E -> player2.gameboard.receivedAttacks = [ [3,5] ,...previousReceivedAttacks]

 2 scenarios:

  #1 if player2 doesn't have any ship on [3,5],
  E -> not any further actions needed.

  #2 player2 has Destroyer1 in [3,5]
  E -> player2.gameboard.health decreases by 1.
  E -> player2.gameboard.hitCoordinates === [[3,5], ...previousHitCoordinates]
  Exx ->  player2.gameboard.ships.destroyer1.hit...
  ship doesn't need to know if they hit.

  placed ships example[all horizontal]:

  [[2,2],[2,4],[2,6],[2,8],
   [4,2],[4,3], [4,5],[4,6], [4,8],[4,9],
   [6,2],[6,3],[6,4], [6,6],[6,7],[6,8],
   [8,2],[8,3],[8,4],[8,5],
  ]

  player1.place({ship:'boat1', startingCoordination: [2,2]})
  player1.place({ship:'destroyer2', startingCoordination: [4,2]})

[,]


searh for partial application



change placabe to isPlacable


optimize random place functionality using dynamic programming, use implacableCoordinates array or smt like that.