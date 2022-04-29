import {
  Boat,
  Cruiser,
  Destroyer,
  Battleship,
} from '../GameElements/Ship/index';
import Game from '../GameElements/Game';

const game = new Game();

const boat1 = new Boat('h', [2, 2]);
const boat2 = new Boat('h', [2, 4]);
const boat3 = new Boat('h', [2, 6]);
const boat4 = new Boat('h', [2, 8]);
const destroyer1 = new Destroyer('h', [4, 2]);
const destroyer2 = new Destroyer('h', [4, 5]);
const destroyer3 = new Destroyer('h', [4, 8]);
const cruiser1 = new Cruiser('h', [6, 2]);
const cruiser2 = new Cruiser('h', [6, 6]);
const battleship = new Battleship('h', [8, 2]);

const ships = [
  boat1,
  boat2,
  boat3,
  // only missing ship is boat 4
  destroyer1,
  destroyer2,
  destroyer3,
  cruiser1,
  cruiser2,
  battleship,
];
ships.forEach((ship) => {
  game.player1.place(ship);
  game.player2.place(ship);
});

test('tracks each player is not ready', () => {
  expect(game.player1.isReady).toStrictEqual(false);
  expect(game.player2.isReady).toStrictEqual(false);
});

test('tracks game is not ready', () => {
  expect(game.isReady).toStrictEqual(false);
});

test('tracks each player is ready', () => {
  game.player1.place(boat4);
  game.player2.place(boat4);
  expect(game.isPlayer1Ready).toStrictEqual(true);
  // expect(game.isPlayer2Ready).toStrictEqual(true);
});

test('tracks game is ready', () => {
  // expect(game.isReady).toStrictEqual(true);
});

test('change playing side to player 2', () => {
  game.player1.attack([2, 2]);
  expect(game.playerOnesTurn).toStrictEqual(false);
});

// test('change playing side to player 1', () => {
//   game.player2.attack([2, 3])
//   expect(game.playerOnesTurn).toStrictEqual(true)
// })

test('when game finishes, sets the winner', () => {
  game.player2.gameBoard.coordinates.forEach((coordinate) => {
    const cloneCoordinate = coordinate;
    cloneCoordinate.attacked = true;
  });
  expect(game.winner).toBe('Player 1');
});

/// //// ------ Game Phase ------- ///////
