import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import GlobalStyle from '../../styles/global';
import Header from '../Header';

import {
  Container,
  Wrapper,
  Text,
  CoordinatesWrapper,
  BoardBlock,
  PlaceButton,
  PlayButton,
} from './styles';
import Game from '../../GameElements/Game';

const game = new Game();

function Main(): React.ReactElement {
  const [isPlaced, setIsPlaced] = useState(!game.isReady);
  const [isGameStarted, setIsGameStarted] = useState(game.isReady);
  const [winner, setWinner] = useState<undefined | string>(undefined);
  const [coordinates, setCoordinates] = useState(
    game.player2.gameBoard.coordinates,
  );
  const [coordinates2, setCoordinates2] = useState(
    game.player1.gameBoard.coordinates,
  );

  const handleRandomise: React.MouseEventHandler<HTMLButtonElement> = () => {
    game.player1.placeRandomly();
    setIsPlaced(!game.isReady);
    setCoordinates2(game.player1.gameBoard.coordinates);
  };

  const handleGameStart: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsGameStarted(true);
  };

  const handleClick = ([row, column]: number[]) => {
    const isNotAbleToAttack = !game.playerOnesTurn
      || !game.player1.canAttack([row, column])
      || !isGameStarted;

    if (isNotAbleToAttack) {
      return;
    }

    game.player1.attack([row, column]);
    const updatedCoords = game.player2.gameBoard.coordinates.slice(0);
    setCoordinates(updatedCoords);

    if (game.winner) {
      setWinner(game.winner);
    }
    game.randomAttack();
  };

  return (
    <>
      <GlobalStyle />
      {winner && (
        <div
          style={{
            width: '500px',
            height: '500px',
            backgroundColor: '#8a8827b3',
          }}
        >
          The winner is
          {winner}
          !!!!!!
        </div>
      )}
      <Header isGameStarted={isGameStarted} isPlaced={isPlaced} />
      <Container>
        <Wrapper alignItems="flex-start">
          <Wrapper flexDirection="column">
            <CoordinatesWrapper>
              {coordinates.map((coordinate) => (
                <BoardBlock
                  clickHandler={() =>
                    handleClick([coordinate.row, coordinate.column])}
                  row={coordinate.row}
                  column={coordinate.column}
                  attacked={coordinate.attacked}
                  hasShip={coordinate.hasShip}
                  key={uuidv4()}
                />
              ))}
            </CoordinatesWrapper>
            <Text>Opponent&apos;s Board</Text>
          </Wrapper>
          <Wrapper flexDirection="column">
            <CoordinatesWrapper>
              {coordinates2.map((coordinate) => (
                <BoardBlock
                  row={coordinate.row}
                  column={coordinate.column}
                  attacked={coordinate.attacked}
                  hasShip={coordinate.hasShip}
                  key={uuidv4()}
                />
              ))}
            </CoordinatesWrapper>
            <Text>Your Board</Text>
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
          </Wrapper>
        </Wrapper>
      </Container>
    </>
  );
}
export default Main;
