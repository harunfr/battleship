import GameBoard from './GameBoard';
import {
  Boat, Cruiser, Destroyer, Battleship,
} from './Ship';

export default class Player {
  rival?: Player | null;

  isSuccesfulAttack: boolean = false;

  playerOnesTurn: boolean = true;

  gameBoard = new GameBoard();

  get isReady(): boolean {
    return this.health === 20;
  }

  get health() {
    return this.gameBoard.coordinates.filter(
      (coordinate) =>
        coordinate.attacked === false && coordinate.hasShip === true,
    ).length;
  }

  place(ship: Boat | Cruiser | Destroyer | Battleship) {
    this.gameBoard.place(ship);
  }

  receiveAttack(coordinate: number[]) {
    this.gameBoard.receiveAttack(coordinate);
  }

  canAttack = (coordinate: number[]): boolean =>
    this.rival!.gameBoard.coordinates[
      Number(`${coordinate[0]}${coordinate[1]}`)
    ].attacked === false;

  attack(coordinate: number[]) {
    this.playerOnesTurn = !this.playerOnesTurn;
    this.rival!.receiveAttack(coordinate);
    this.isSuccesfulAttack = this.rival!.gameBoard.isSuccesfulAttack;
  }

  placeRandomly = () => {
    this.gameBoard.coordinates = this.gameBoard.getInitialCoordinates();
    const randomIntFromInterval = (min: number, max: number): number =>
      Math.floor(Math.random() * (max - min + 1) + min);

    const axis = Math.random() > 0.5 ? 'h' : 'v';
    const { coordinates } = this.gameBoard;
    // const suitableForBattleship = coordinates.filter(coord => coord.row < 7 && coord.column < 7)
    const randomRowBattleship = randomIntFromInterval(0, 6);
    const randomColumnBattleship = randomIntFromInterval(0, 6);
    // const randomRowCruiser = randomIntFromInterval(0, 7)
    // const randomColumnCruiser = randomIntFromInterval(0, 7)
    // const randomRowDestroyer = randomIntFromInterval(0, 8)
    // const randomColumnDestroyer = randomIntFromInterval(0, 8)
    let placedCruiser = 0;
    let placedDestroyer = 0;
    let placedBoat = 0;

    const battleShip = new Battleship(axis, [
      randomRowBattleship,
      randomColumnBattleship,
    ]);
    this.place(battleShip);

    while (placedCruiser < 2) {
      const axis = Math.random() > 0.5 ? 'h' : 'v';
      const randomRowCruiser = randomIntFromInterval(0, 7);
      const randomColumnCruiser = randomIntFromInterval(0, 7);
      const cruiser = new Cruiser(axis, [
        randomRowCruiser,
        randomColumnCruiser,
      ]);
      // {  row: 0,  column: 0,  hasShip: false,  attacked: false,  placable: true,},

      const hasInvalidCoordinate = cruiser.coordinates.some((coordinate) => {
        const index: number = Number(`${coordinate[0]}${coordinate[1]}`);
        return !coordinates[index].placable;
      });
      if (hasInvalidCoordinate) {
        continue;
      } else {
        this.place(cruiser);
        placedCruiser += 1;
      }
    }

    while (placedDestroyer < 3) {
      // console.log(`I run ${++count} times to place destroyer!`);

      const axis = Math.random() > 0.5 ? 'h' : 'v';
      const randomRowDestroyer = randomIntFromInterval(0, 8);
      const randomColumnDestroyer = randomIntFromInterval(0, 8);
      const destroyer = new Destroyer(axis, [
        randomRowDestroyer,
        randomColumnDestroyer,
      ]);
      // {  row: 0,  column: 0,  hasShip: false,  attacked: false,  placable: true,},

      const hasInvalidCoordinate = destroyer.coordinates.some((coordinate) => {
        const index: number = Number(`${coordinate[0]}${coordinate[1]}`);
        return !coordinates[index].placable;
      });
      if (hasInvalidCoordinate) {
        continue;
      } else {
        this.place(destroyer);
        placedDestroyer += 1;
      }
    }
    while (placedBoat < 4) {
      // console.log(`I run ${++count} times to place boat!`);

      const axis = 'h';
      const randomRowBoat = randomIntFromInterval(0, 9);
      const randomColumnBoat = randomIntFromInterval(0, 9);
      const boat = new Boat(axis, [randomRowBoat, randomColumnBoat]);
      // {  row: 0,  column: 0,  hasShip: false,  attacked: false,  placable: true,},

      const hasInvalidCoordinate = boat.coordinates.some((coordinate) => {
        const index: number = Number(`${coordinate[0]}${coordinate[1]}`);
        return !coordinates[index].placable;
      });
      if (hasInvalidCoordinate) {
        continue;
      } else {
        this.place(boat);
        placedBoat += 1;
      }
    }
  };
}
