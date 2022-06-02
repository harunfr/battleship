import React from 'react';

import { Container } from './styles';

import PlayerGameBoard from './PlayerGameBoard';
import RivalGameBoard from './RivalGameBoard';

import { Coordinate } from '../../GameElements/GameBoard';

interface MainProps {
  rivalCoords: Coordinate[];
  playerCoords: Coordinate[];
  // eslint-disable-next-line no-unused-vars
  handleClick: ([row, column]: number[]) => void;
  isPlaced: boolean;
  isGameStarted: boolean;
  handleRandomise: () => void;
  handleGameStart: () => void;
  winner: string | undefined;
}

function Main({
  rivalCoords,
  playerCoords,
  handleClick,
  isPlaced,
  isGameStarted,
  handleRandomise,
  handleGameStart,
  winner,
}: MainProps): React.ReactElement {
  return (
    <Container>
      <RivalGameBoard
        winner={winner}
        rivalCoords={rivalCoords}
        handleClick={handleClick}
      />
      <PlayerGameBoard
        coordinates={playerCoords}
        handleRandomise={handleRandomise}
        isPlaced={isPlaced}
        isGameStarted={isGameStarted}
        handleGameStart={handleGameStart}
        winner={winner}
      />
    </Container>
  );
}
export default Main;
