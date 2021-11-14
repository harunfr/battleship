const Script = require("./battleShip");
const Ship = Script.Ship;
const GameBoard = Script.GameBoard;
const Player = Script.Player;
const Player2 = Script.Player2;

describe("Ship Factory Tests", () => {
  let destroyer = Ship(3, "11", "12", "13");
  test("Hit method works", () => {
    destroyer.hit("11");
    expect(destroyer.hitCoordinates).toEqual(["11"]);
  });
  test("Another hit counts", () => {
    destroyer.hit("12");
    expect(destroyer.hitCoordinates).toEqual(["11", "12"]);
  });
  test("All hits count", () => {
    destroyer.hit("13");
    expect(destroyer.hitCoordinates).toEqual(["11", "12", "13"]);
  });
  test("Ship sunks when all parts hit.", () => {
    expect(destroyer.isSunk()).toBe(true);
  });
});

describe("GameBoard Factory Tests", () => {
  const player1sBoard = GameBoard();
  player1sBoard.placeShips();

  test("GameBoard can place patrol boat", () => {
    expect(player1sBoard.coordinates[0][0]).toBe("ship");
  });

  test("GameBoard can place half of sub marine", () => {
    expect(player1sBoard.coordinates[0][2]).toBe("ship");
  });

  test("GameBoard can place other half of sub marine", () => {
    expect(player1sBoard.coordinates[0][3]).toBe("ship");
  });

  test("GameBoard leaves blank if there is no ship", () => {
    expect(player1sBoard.coordinates[7][0]).toBe(0);
  });

  test("GameBoard keeps initial state of coordinates", () => {
    const expectedRows = {
      0: ["ship", 0, "ship", "ship", 0, "ship", "ship", 0, "ship", "ship"],
      1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      2: ["ship", 0, "ship", "ship", "ship", 0, "ship", "ship", "ship", 0],
      3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      4: ["ship", 0, 0, 0, 0, 0, 0, 0, 0, 0],
      5: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      6: ["ship", 0, 0, 0, 0, 0, 0, 0, 0, 0],
      7: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      8: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      9: ["ship", "ship", "ship", "ship", 0, 0, 0, 0, 0, 0],
    };
    expect(player1sBoard.coordinates).toEqual(expectedRows);
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  const player2sBoard = GameBoard();
  player2sBoard.placeShips();

  player2sBoard.receiveAttack("00");

  test("GameBoard receives attack properly", () => {
    expect(player2sBoard.coordinates[0][0]).toBe("ship hit");
  });

  player2sBoard.receiveAttack("05");

  test("GameBoard sends hit function to correct ship", () => {
    expect(player2sBoard.ships.subMarine2.hitCoordinates).toEqual(["05"]);
  });

  player2sBoard.receiveAttack("55");

  test("GameBoard receives attack to middle properly", () => {
    expect(player2sBoard.coordinates[5][5]).toBe("hit");
  });

  player2sBoard.receiveAttack("02");
  test("Ships in GameBoard does not sink when not hit fully", () => {
    expect(player2sBoard.ships.destroyer1.isSunk()).toBe(false);
  });

  test("Ships in GameBoard does sink when hit fully", () => {
    expect(player2sBoard.ships.boat1.isSunk()).toBe(true);
  });

  test("Ships in GameBoard does sink when hit fully", () => {
    expect(player2sBoard.sunkenShips).toEqual(["boat1"]);
  });

  test("GameBoard tracks received attacks", () => {
    expect(player2sBoard.receivedAttacks).toEqual(["00", "05", "55", "02"]);
  });

  const poorPlayerBoard = GameBoard();
  poorPlayerBoard.placeShips();

  poorPlayerBoard.sunkenShips.length = 10;
  const amountOfSunkenShips = poorPlayerBoard.sunkenShips.length;

  const expectedLength = Object.keys(poorPlayerBoard.ships).length;

  test("When all ships sunk, game is over.", () => {
    expect(amountOfSunkenShips).toBe(expectedLength);
  });
});

describe("Player Tests", () => {
  let Player1 = Player("player1");
  Player1.gameBoard.placeShips();
  // Object.keys(Player1.gameBoard.ships).length === 10;
  // Player1.sunkenShips === []
  Object.keys(Player1.gameBoard.coordinates).length === 10;

  test("Newly created Player has ships", () => {
    expect(Object.keys(Player1.gameBoard.ships).length).toBe(10);
  });
  test("Newly created Player has no sunken ships", () => {
    expect(Player1.gameBoard.sunkenShips).toEqual([]);
  });
  test("Newly created Player has coordinates data", () => {
    expect(Object.keys(Player1.gameBoard.coordinates).length).toBe(10);
  });

  Player2.gameBoard.placeShips();
  Player1.attack("00");

  test("Opponent players can record attack", () => {
    expect(Player2.gameBoard.receivedAttacks).toEqual(["00"]);
  });
  test("Opponent player's ship sunks when hit", () => {
    expect(Player2.gameBoard.sunkenShips).toEqual(["boat1"]);
  });
  test("Opponent player's coordinates data updates", () => {
    expect(Player2.gameBoard.coordinates[0][0]).toBe("ship hit");
  });
});
