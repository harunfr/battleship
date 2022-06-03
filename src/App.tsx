import React, { useState } from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Game from './GameElements/Game';

// initialize game.
const game = new Game();

function App(): JSX.Element {
  const [isPlaced, setIsPlaced] = useState(!game.isReady);
  const [isGameStarted, setIsGameStarted] = useState(game.isReady);
  const [winner, setWinner] = useState<undefined | string>(undefined);
  const [rivalCoords, setRivalCoords] = useState(
    game.player2.gameBoard.coordinates.slice(),
  );
  const [playerCoords, setPlayerCoords] = useState([
    ...game.player1.gameBoard.coordinates.slice(),
  ]);

  // event listener's callbacks
  const handleRandomise: () => void = () => {
    game.player1.placeRandomly();
    setIsPlaced(!game.isReady);
    setPlayerCoords(game.player1.gameBoard.coordinates.slice());
  };

  const handleGameStart: () => void = () => {
    setIsGameStarted(true);
  };

  const handleClick = ([row, column]: number[]) => {
    const isNotAbleToAttack = !game.playerOnesTurn
      || !game.player1.canAttack([row, column])
      || !isGameStarted
      || winner;

    if (isNotAbleToAttack) {
      return;
    }

    game.player1.attack([row, column]);
    const updatedPlayerCoords = game.player2.gameBoard.coordinates.slice(0);
    setRivalCoords(updatedPlayerCoords);

    if (game.winner) {
      setWinner(game.winner);
    }
    game.randomAttack();
    const updatedRivalCoords = game.player2.gameBoard.coordinates.slice(0);
    setRivalCoords(updatedRivalCoords);
  };

  const newGameHandler = (): void => {
    game.reset();
    setIsPlaced(!game.isReady);
    setIsGameStarted(game.isReady);
    setWinner(undefined);
    setRivalCoords(game.player2.gameBoard.coordinates.slice());
    setPlayerCoords([...game.player1.gameBoard.coordinates.slice()]);
  };

  return (
    <>
      <GlobalStyle />
      <Header
        isGameStarted={isGameStarted}
        isPlaced={isPlaced}
        handleNewGame={newGameHandler}
        winner={winner}
      />
      <Main
        rivalCoords={rivalCoords}
        playerCoords={playerCoords}
        handleClick={handleClick}
        isPlaced={isPlaced}
        isGameStarted={isGameStarted}
        handleRandomise={handleRandomise}
        handleGameStart={handleGameStart}
        winner={winner}
      />
      <Footer />
    </>
  );
}

export default App;
