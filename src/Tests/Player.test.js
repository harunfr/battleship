import {
  Boat, Cruiser, Destroyer, Battleship,
} from '../GameElements/Ship';
import Player from '../GameElements/Player';
// import GameBoard from '../GameElements/GameBoard.ts'
// import Game from '../GameElements/Game.ts'

const player1 = new Player();
const player2 = new Player();
player1.rival = player2;
player2.rival = player1;
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
  boat4,
  destroyer1,
  destroyer2,
  destroyer3,
  cruiser1,
  cruiser2,
  battleship,
];
ships.forEach((ship) => {
  player1.place(ship);
  player2.place(ship);
});

describe('Player Tests', () => {
  describe('Game Phase', () => {
    player1.attack([1, 1]);

    test('marks attacked coordinate properly', () => {
      const expected = [
        {
          row: 1,
          column: 1,
          hasShip: false,
          attacked: true,
          placable: false,
        },
      ];
      expect(player2.gameBoard.coordinates).toEqual(
        expect.arrayContaining(expected),
      );
    });

    test('player knows if shot is succesful', () => {
      expect(player1.isSuccesfulAttack).toEqual(false);
    });

    test('health doesnt change after miss', () => {
      player1.attack([1, 1]);
      expect(player2.health).toBe(20);
    });

    test('marks attacked and occupied coordinate properly', () => {
      player1.attack([2, 2]);
      const expected = [
        {
          row: 2,
          column: 2,
          hasShip: true,
          attacked: true,
          placable: false,
        },
      ];
      expect(player2.gameBoard.coordinates).toEqual(
        expect.arrayContaining(expected),
      );
    });

    test('health decreases after miss', () => {
      expect(player2.health).toBe(19);
    });

    test('player knows shot is succesful', () => {
      expect(player1.isSuccesfulAttack).toEqual(true);
    });
  });
});
