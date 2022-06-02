import React from 'react';

import { Coordinate } from '../../GameElements/GameBoard';
import {
  Wrapper,
  BoardBlock,
  BoardTitle,
  Coordinates,
  GameBoardContainer,
  PlayButton,
  PlaceButton,
} from './styles';

interface PlayerGameBoardProps {
  coordinates: Coordinate[];
  isPlaced: boolean;
  isGameStarted: boolean;
  handleRandomise: () => void;
  handleGameStart: () => void;
  winner: string | undefined;
}

function PlayerGameBoard({
  coordinates,
  isPlaced,
  handleRandomise,
  isGameStarted,
  handleGameStart,
  winner,
}: PlayerGameBoardProps): JSX.Element {
  return (
    <GameBoardContainer>
      <Coordinates>
        {coordinates.map(({
          row, column, attacked, hasShip,
        }) => (
          <BoardBlock
            player
            row={row}
            column={column}
            attacked={attacked}
            hasShip={hasShip}
            key={`${row}${column}`}
            winner={winner}
          />
        ))}
      </Coordinates>
      <BoardTitle className="board-title">Your Board</BoardTitle>

      <Wrapper>
        {isPlaced && (
          <PlaceButton onClick={handleRandomise}>Randomize</PlaceButton>
        )}
        {!isGameStarted && (
          <PlayButton onClick={handleGameStart} disabled={isPlaced}>
            Play
          </PlayButton>
        )}
      </Wrapper>
    </GameBoardContainer>
  );
}

export default PlayerGameBoard;
