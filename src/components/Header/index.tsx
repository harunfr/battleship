import React from 'react';

import {
  Container,
  Logo,
  Notification,
  NewGameButton,
  Text,
  Wrapper,
  LoopIcon,
} from './styles';

interface HeaderProps {
  isPlaced: boolean;
  isGameStarted: boolean;
  handleNewGame: () => void;
  winner: string | undefined;
}

function Header({
  isGameStarted,
  isPlaced,
  winner,
  handleNewGame,
}: HeaderProps): React.ReactElement {
  return (
    <Container>
      <Logo>
        Battleship
        <Text className="logo-text">A classical board game.</Text>
      </Logo>
      <Notification>
        <Text>
          {!winner && isPlaced && 'Place Ships...'}
          {!winner && isGameStarted && "Attack opponents's board..."}
          {!winner
            && !isPlaced
            && !isGameStarted
            && 'Waiting player to be ready...'}
          {winner && `Winner is ${winner}`}
        </Text>
      </Notification>
      <Wrapper>
        <NewGameButton disabled={!isGameStarted} onClick={handleNewGame}>
          New game
          {' '}
          <LoopIcon />
        </NewGameButton>
      </Wrapper>
    </Container>
  );
}
export default Header;
