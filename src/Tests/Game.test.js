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
});

// only player should be checked if he/she is ready.
// game bot is placing its ships randomly.
test('Checks each player is not ready.', () => {
  expect(game.player1.isReady).toStrictEqual(false);
});

test('Checks each player is ready.', () => {
  game.player1.place(boat4);

  expect(game.isPlayer1Ready).toStrictEqual(true);
  expect(game.isPlayer2Ready).toStrictEqual(true);
});

test('Checks game is ready.', () => {
  expect(game.isReady).toStrictEqual(true);
});

test('Change playing side to player 2.', () => {
  game.player1.attack([2, 2]);
  expect(game.playerOnesTurn).toStrictEqual(false);
});

test('When game finishes, sets the winner.', () => {
  game.player2.gameBoard.coordinates.forEach((coordinate) => {
    // eslint-disable-next-line no-param-reassign
    coordinate.attacked = true;
  });
  expect(game.winner).toBe('Player');
});
