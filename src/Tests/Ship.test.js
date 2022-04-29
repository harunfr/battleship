import {
  Boat,
  Cruiser,
  Destroyer,
  Battleship,
} from '../GameElements/Ship/index';
// split codes to test both coordinates and length individually.
// test both vertical and horizontal placement
// what about implacable or placable coordinates?

describe('Ship Tests', () => {
  test('boat has coordinate and correct length, horizontallly', () => {
    const boat1 = new Boat('h', [2, 2]);
    expect(boat1.coordinates).toEqual([[2, 2]]);
    expect(boat1.length).toBe(1);
  });

  test('boat has coordinate and correct length, vertically', () => {
    const boat1 = new Boat('v', [2, 2]);
    expect(boat1.coordinates).toEqual([[2, 2]]);
    expect(boat1.length).toBe(1);
  });

  test('destroyer has coordinate and correct length, horizontallly', () => {
    const destroyer1 = new Destroyer('h', [4, 2]);
    expect(destroyer1.coordinates).toEqual([
      [4, 2],
      [4, 3],
    ]);
    expect(destroyer1.length).toBe(2);
  });

  test('destroyer has coordinate and correct length, vertical', () => {
    const destroyer1 = new Destroyer('v', [4, 2]);
    expect(destroyer1.coordinates).toEqual([
      [4, 2],
      [5, 2],
    ]);
    expect(destroyer1.length).toBe(2);
  });

  test('cruiser has correct coordinates and length, horizontallly', () => {
    const cruiser1 = new Cruiser('h', [1, 1]);
    expect(cruiser1.coordinates).toEqual([
      [1, 1],
      [1, 2],
      [1, 3],
    ]);
    expect(cruiser1.length).toBe(3);
  });

  test('cruiser has correct coordinates and length, vertically', () => {
    const cruiser1 = new Cruiser('v', [1, 1]);
    expect(cruiser1.coordinates).toEqual([
      [1, 1],
      [2, 1],
      [3, 1],
    ]);
    expect(cruiser1.length).toBe(3);
  });
  test('battleship has correct coordinates and length, horizontallly', () => {
    const battleship = new Battleship('h', [1, 1]);
    expect(battleship.coordinates).toEqual([
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
    ]);
    expect(battleship.length).toBe(4);
  });
  test('battleship has correct coordinates and length, vertically', () => {
    const battleship = new Battleship('v', [1, 1]);
    expect(battleship.coordinates).toEqual([
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1],
    ]);
    expect(battleship.length).toBe(4);
  });
});
