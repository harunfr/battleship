import React from 'react';
import {
  Container,
  Logo,
  Notification,
  ThemeButton,
  LeaveButton,
  Text,
  Wrapper,
} from './styles';

interface HeaderProps {
  isPlaced: boolean;
  isGameStarted: boolean;
}

function Header({ isGameStarted, isPlaced }: HeaderProps): React.ReactElement {
  return (
    <Container>
      <Logo>
        Battleship
        <Text>A classical board game.</Text>
      </Logo>
      <Notification>
        <Text>
          {isPlaced && 'Place Ships...'}
          {isGameStarted && "Attack opponents's board..."}
          {!isPlaced && !isGameStarted && 'Waiting Player to be ready...'}
        </Text>
      </Notification>
      <Wrapper>
        {isGameStarted && <LeaveButton>Leave the game</LeaveButton>}
        <ThemeButton />
      </Wrapper>
    </Container>
  );
}
export default Header;
