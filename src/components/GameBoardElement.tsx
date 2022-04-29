import React from 'react';
import Block, { Props } from './styles/Block';

function GameBoardElement({ hasShip, placable, handleClick }: Props) {
  return <Block hasShip={hasShip} placable={placable} onClick={handleClick} />;
}
export default GameBoardElement;
