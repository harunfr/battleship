/* eslint-disable class-methods-use-this */
import {
  Boat, Cruiser, Destroyer, Battleship,
} from './Ship';

export interface Coordinate {
  row: number;
  column: number;
  hasShip: boolean;
  attacked: boolean;
  placable: boolean;
}

export default class GameBoard {
  coordinates = this.getInitialCoordinates();

  isSuccesfulAttack: boolean = false;

  place(ship: Boat | Cruiser | Destroyer | Battleship) {
    const shipCoordinates = ship.coordinates;

    shipCoordinates.forEach((coordinate: number[]) => {
      const row: number = coordinate[0];
      const column: number = coordinate[1];
      const indexOfCoordinate = Number(`${row}${column}`);
      this.coordinates[indexOfCoordinate].hasShip = true;
      this.coordinates[indexOfCoordinate].placable = false;

      this.getImplacableIndexes(coordinate).forEach((implacableIndex) => {
        if (implacableIndex >= 0 && implacableIndex < 100) {
          this.coordinates[implacableIndex].placable = false;
        }
      });
    });
  }

  receiveAttack(coordinate: number[]): void {
    const row: number = coordinate[0];
    const column: number = coordinate[1];
    const indexOfCoordinate = Number(`${row}${column}`);
    const attackCoordinate = this.coordinates[indexOfCoordinate];
    attackCoordinate.attacked = true;
    this.isSuccesfulAttack = attackCoordinate.hasShip;
  }

  getImplacableIndexes(coordinate: number[]): number[] {
    const row: number = coordinate[0];
    const column: number = coordinate[1];
    const indexOfImplacableCoordinate1 = Number(`${row - 1}${column - 1}`);
    const indexOfImplacableCoordinate2 = Number(`${row - 1}${column}`);
    const indexOfImplacableCoordinate3 = Number(`${row - 1}${column + 1}`);
    const indexOfImplacableCoordinate4 = Number(`${row}${column - 1}`);
    const indexOfImplacableCoordinate5 = Number(`${row}${column + 1}`);
    const indexOfImplacableCoordinate6 = Number(`${row + 1}${column - 1}`);
    const indexOfImplacableCoordinate7 = Number(`${row + 1}${column}`);
    const indexOfImplacableCoordinate8 = Number(`${row + 1}${column + 1}`);

    const implacableCoordinates = [
      indexOfImplacableCoordinate1,
      indexOfImplacableCoordinate2,
      indexOfImplacableCoordinate3,
      indexOfImplacableCoordinate4,
      indexOfImplacableCoordinate5,
      indexOfImplacableCoordinate6,
      indexOfImplacableCoordinate7,
      indexOfImplacableCoordinate8,
    ];
    return implacableCoordinates;
  }

  getInitialCoordinates(): Coordinate[] {
    const initialCoordinates: Coordinate[] = [];
    for (let row = 0; row < 10; row += 1) {
      for (let column = 0; column < 10; column += 1) {
        initialCoordinates.push({
          row,
          column,
          hasShip: false,
          attacked: false,
          placable: true,
        });
      }
    }
    return initialCoordinates;
  }
}
