import { Boat, Destroyer } from '../GameElements/Ship/index';
import GameBoard from '../GameElements/GameBoard';
import testCoordinates from './testCoordinates';

describe('Game Board Tests', () => {
  describe('initilization of game board', () => {
    const gameBoard = new GameBoard();
    test('game board has initially 10 x 10 coordinates', () => {
      expect(gameBoard.coordinates).toEqual(testCoordinates);
    });
  });
  describe('placing ships on game board', () => {
    test('ships can be placed horizontally on game board', () => {
      const gameBoard = new GameBoard();
      const destroyer1 = new Destroyer('h', [4, 2]);
      gameBoard.place(destroyer1);
      const expected = [
        {
          row: 4,
          column: 2,
          hasShip: true,
          attacked: false,
          placable: false,
        },
        {
          row: 4,
          column: 3,
          hasShip: true,
          attacked: false,
          placable: false,
        },
      ];
      expect(gameBoard.coordinates).toEqual(expect.arrayContaining(expected));
    });
    test('ships can be placed vertically on game board', () => {
      const gameBoard = new GameBoard();
      const destroyer2 = new Destroyer('v', [4, 2]);
      gameBoard.place(destroyer2);
      const expected = [
        {
          row: 4,
          column: 2,
          hasShip: true,
          attacked: false,
          placable: false,
        },
        {
          row: 5,
          column: 2,
          hasShip: true,
          attacked: false,
          placable: false,
        },
      ];
      expect(gameBoard.coordinates).toEqual(expect.arrayContaining(expected));
    });

    // Implacable Coordinates
    test('game board marks implacable coordinates after placing boat', () => {
      const gameBoard = new GameBoard();
      const boat1 = new Boat('v', [2, 2]);
      gameBoard.place(boat1);
      const expected = [
        {
          row: 1,
          column: 1,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 1,
          column: 2,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 1,
          column: 3,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 2,
          column: 1,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 2,
          column: 2,
          hasShip: true,
          attacked: false,
          placable: false,
        },
        {
          row: 2,
          column: 3,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 3,
          column: 1,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 3,
          column: 2,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 3,
          column: 3,
          hasShip: false,
          attacked: false,
          placable: false,
        },
      ];
      const { coordinates } = gameBoard;
      expect(coordinates).toEqual(expect.arrayContaining(expected));
    });
    test('game board marks implacable coordinates after placing destroyer horizontally', () => {
      const gameBoard = new GameBoard();
      const destroyer2 = new Destroyer('h', [2, 2]);
      gameBoard.place(destroyer2);
      const expected = [
        {
          row: 1,
          column: 1,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 1,
          column: 2,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 1,
          column: 3,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 1,
          column: 4,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 2,
          column: 1,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 2,
          column: 2,
          hasShip: true,
          attacked: false,
          placable: false,
        },
        {
          row: 2,
          column: 3,
          hasShip: true,
          attacked: false,
          placable: false,
        },
        {
          row: 2,
          column: 4,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 3,
          column: 1,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 3,
          column: 2,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 3,
          column: 3,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 3,
          column: 4,
          hasShip: false,
          attacked: false,
          placable: false,
        },
      ];
      const { coordinates } = gameBoard;
      expect(coordinates).toEqual(expect.arrayContaining(expected));
    });

    test('game board marks implacable coordinates after placing destroyer vertically', () => {
      const gameBoard = new GameBoard();
      const destroyer2 = new Destroyer('v', [2, 2]);
      gameBoard.place(destroyer2);
      const expected = [
        {
          row: 1,
          column: 1,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 1,
          column: 2,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 1,
          column: 3,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 2,
          column: 1,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 2,
          column: 2,
          hasShip: true,
          attacked: false,
          placable: false,
        },
        {
          row: 2,
          column: 3,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 3,
          column: 1,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 3,
          column: 2,
          hasShip: true,
          attacked: false,
          placable: false,
        },
        {
          row: 3,
          column: 3,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 4,
          column: 1,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 4,
          column: 2,
          hasShip: false,
          attacked: false,
          placable: false,
        },
        {
          row: 4,
          column: 3,
          hasShip: false,
          attacked: false,
          placable: false,
        },
      ];
      const { coordinates } = gameBoard;
      expect(coordinates).toEqual(expect.arrayContaining(expected));
    });
  });
  describe('receives attack proprietly', () => {
    const gameBoard = new GameBoard();

    test('game board receives attack on unoccupied coordinate', () => {
      gameBoard.receiveAttack([4, 2]);
      const expected = [
        {
          row: 4,
          column: 2,
          hasShip: false,
          attacked: true,
          placable: true,
        },
      ];
      expect(gameBoard.coordinates).toEqual(expect.arrayContaining(expected));
    });
    test('game board receives attack on occupied coordinate', () => {
      const destroyer2 = new Destroyer('v', [4, 2]);
      gameBoard.place(destroyer2);
      gameBoard.receiveAttack([4, 2]);
      const expected = [
        {
          row: 4,
          column: 2,
          hasShip: true,
          attacked: true,
          placable: false,
        },
      ];
      expect(gameBoard.coordinates).toEqual(expect.arrayContaining(expected));
    });
  });
});
