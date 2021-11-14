let isPlayer1sTurn = true;
let isPlayer2Machine = true;

exports.Ship = (length, ...coordinates) => {
  let hitCoordinates = [];

  const hit = (coordinate) => {
    hitCoordinates.push(coordinate);
  };
  const isSunk = () => {
    return hitCoordinates.length === length;
  };

  return {
    hitCoordinates,
    hit,
    isSunk,
    coordinates,
  };
};

const shipCoordinates = {
  boat1: ["00"],
  boat2: ["20"],
  boat3: ["40"],
  boat4: ["60"],
  subMarine1: ["02", "03"],
  subMarine2: ["05", "06"],
  subMarine3: ["08", "09"],
  destroyer1: ["22", "23", "24"],
  destroyer2: ["26", "27", "28"],
  battleship: ["90", "91", "92", "93"],
};

exports.GameBoard = () => {
  const coordinates = {};
  const ships = {};
  const sunkenShips = [];
  const receivedAttacks = [];
  for (let rowIndex = 0; rowIndex < 10; rowIndex++) {
    coordinates[rowIndex] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  placeShips = () => {
    for (const ship in shipCoordinates) {
      ships[ship] = this.Ship(
        shipCoordinates[ship].length,
        shipCoordinates[ship]
      );
      shipCoordinates[ship].forEach((wholeCoordinate) => {
        let row = wholeCoordinate[0];
        let column = wholeCoordinate[1];
        coordinates[row][column] = "ship";
      });
    }
  };

  const receiveAttack = (coordinate) => {
    let row = coordinate[0];
    let column = coordinate[1];
    receivedAttacks.push(coordinate);

    for (const ship in shipCoordinates) {
      let index = shipCoordinates[ship].indexOf(coordinate);
      if (index !== -1) {
        coordinates[row][column] += " hit";
        ships[ship].hit(coordinate);
        if (ships[ship].isSunk()) {
          sunkenShips.push(ship);
          return;
        }
      } else {
        coordinates[row][column] = "hit";
      }
    }
  };

  return {
    placeShips,
    receiveAttack,
    coordinates,
    ships,
    sunkenShips,
    receivedAttacks,
  };
};

exports.Player = (name) => {
  const gameBoard = this.GameBoard();
  const attack = (coordinate) => {
    if (name === "player1") {
      this.Player2.gameBoard.receiveAttack(coordinate);
    } else if (name === "player2") {
      Player1.gameBoard.receiveAttack(coordinate);
    }
  };
  return {
    name,
    gameBoard,
    attack,
  };
};

exports.Game = () => {
  // allowed to run only using |^ above object's methods.
  const Player1 = this.Player('player1');
  const Player2 = this.Player('player2')


};

exports.Player2 = this.Player("player2");
// let isPlayer1sTurn = true;
// let isPlayer2Machine = true;