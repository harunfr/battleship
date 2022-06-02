import React from 'react';

import {
  GameBoardContainer,
  BoardTitle,
  Coordinates,
  BoardBlock,
} from './styles';

import { Coordinate } from '../../GameElements/GameBoard';

interface RivalGameBoardProps {
  rivalCoords: Coordinate[];
  // eslint-disable-next-line no-unused-vars
  handleClick: ([row, column]: number[]) => void;
  winner: string | undefined;
}

function RivalGameBoard({
  rivalCoords,
  handleClick,
  winner,
}: RivalGameBoardProps): JSX.Element {
  return (
    <GameBoardContainer>
      <Coordinates>
        {rivalCoords.map(({
          row, column, attacked, hasShip,
        }) => (
          <BoardBlock
            clickHandler={() => handleClick([row, column])}
            row={row}
            column={column}
            attacked={attacked}
            hasShip={hasShip}
            key={`${row}${column}r`}
            winner={winner}
          />
        ))}
      </Coordinates>
      <BoardTitle className="board-title">Opponent&apos;s Board</BoardTitle>
    </GameBoardContainer>
  );
}

export default RivalGameBoard;
