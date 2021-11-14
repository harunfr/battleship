let isPlayer1sTurn = true;
let isPlayer2Machine = true;

let newGame;

function Ship(length, ...coordinates) {
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
}

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

function GameBoard() {
  const coordinates = {};
  const ships = {};
  const sunkenShips = [];
  const receivedAttacks = [];
  for (let rowIndex = 0; rowIndex < 10; rowIndex++) {
    coordinates[rowIndex] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  const placeShips = () => {
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
  placeShips(); /// remove this after

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
          if (sunkenShips.length === Object.keys(ships).length) {
            showWinningMessage();
          }
          return;
        }
      } else {
        coordinates[row][column] = "hit";
      }
    }
  };
  function showWinningMessage() {
    //this method should belong to the dom related section
    let message = document.createElement("div");
    message.textContent = "Winner is ...";
    document.body.appendChild(message);
    let newGameButton = document.createElement("button");
    newGameButton.addEventListener("click", startNewGame);
    newGameButton.textContent = "Play Next Round";
    document.body.appendChild(newGameButton);
  }
  return {
    placeShips,
    receiveAttack,
    coordinates,
    ships,
    sunkenShips,
    receivedAttacks,
  };
}

function Player(name) {
  const gameBoard = this.GameBoard();
  const attack = (coordinate) => {
    if (name === "player1") {
      newGame.Player2.gameBoard.receiveAttack(coordinate);
    } else if (name === "player2") {
      newGame.Player1.gameBoard.receiveAttack(coordinate);
    }
  };
  return {
    name,
    gameBoard,
    attack,
  };
}

function Game() {
  // allowed to run only using |^ above object's methods.
  const Player1 = Player("player1");
  const Player2 = Player("player2");

  return {
    Player1,
    Player2,
  };
}

//

// dom related things //
function startNewGame() {
  let gameTurn = 1;
  document.body.textContent = "";

  if (gameTurn === 1) {
    const game1 = Game();
    newGame = game1;
    gameTurn++;
  } else if (gameTurn === 2) {
    const game2 = Game();
    newGame = game2;
    gameTurn++;
  } else {
    const game3 = Game();
    newGame = game3;
    gameTurn++;
  }
  generateDOM();
}
startNewGame();

function generateDOM() {
  const Player1 = newGame.Player1;
  const Player2 = newGame.Player2;
  const Player1BoardItems = Player1.gameBoard.coordinates;
  const Player2BoardItems = Player2.gameBoard.coordinates;


  const gameboardsContainer = createHtmlDivEl('gameboards-container', document.body)
  const player1sGameBoard = createHtmlDivEl('gameboard player1', gameboardsContainer)
  const player1sTitle = createHtmlDivEl('title', player1sGameBoard)
  player1sTitle.textContent = "Player1";
  const player2sGameBoard = createHtmlDivEl('gameboard player2', gameboardsContainer)
  const player2sTitle = createHtmlDivEl('title', player2sGameBoard)
  player2sTitle.textContent = "Player2";

  // create player1 board
  for (const coordinate in Player1BoardItems) {
    let row = createHtmlDivEl(`row row${coordinate}`, player1sGameBoard)
    Player1BoardItems[coordinate].forEach((element, index) => {
      let square = document.createElement("div");
      square.dataset.coordinates = coordinate + index;
      if (element) {
        square.classList.add(element);
      }
      square.addEventListener("click", handleClick);
      row.appendChild(square);
    });
  }
  // create player2 board
  for (const coordinate in Player2BoardItems) {
    let row = createHtmlDivEl(`row row${coordinate}`, player2sGameBoard)
    Player2BoardItems[coordinate].forEach((element, index) => {
      let square = document.createElement("div");
      square.dataset.coordinates = coordinate + index;
      if (element) {
        square.classList.add(element);
      }
      square.addEventListener("click", handleClick);
      row.appendChild(square);
    });
  }

  function handleClick(e) {
    let clickedOnPlayer2Board =
      e.target.parentNode.parentNode.classList.contains("player2");
    let clickedOnPlayer1Board =
      e.target.parentNode.parentNode.classList.contains("player1");
    let clickedBefore = e.target.classList.contains("hit");
    if (clickedBefore) return;

    const coordinates = e.target.dataset.coordinates;
    if (isPlayer1sTurn && clickedOnPlayer2Board) {
      isPlayer1sTurn = !isPlayer1sTurn;
      Player1.attack(coordinates);
      let span = document.createElement("span");
      span.textContent = "x";
      e.target.appendChild(span);
      e.target.classList.add("hit");
    } else if (!isPlayer1sTurn && clickedOnPlayer1Board) {
      isPlayer1sTurn = !isPlayer1sTurn;
      Player2.attack(coordinates);
      let span = document.createElement("span");
      span.textContent = "x";
      e.target.appendChild(span);
      e.target.classList.add("hit");
    }
  }
  function createHtmlDivEl(classes, parent) {
    const element = document.createElement("div");
    element.setAttribute("class", classes);
    parent.appendChild(element);
    return element;
  }
}