import React from 'react';
import { GiCargoShip, GiCrossMark, GiTireIronCross } from 'react-icons/gi';

export interface BlockProps {
  row: number;
  column: number;
  hasShip: boolean;
  attacked: boolean;
  placable?: boolean;
  children?: React.ReactNode;
  className?: string;
  player?: boolean;
  clickHandler?: React.MouseEventHandler<HTMLDivElement> | undefined;
  winner: string | undefined;
}

function Block({
  children,
  className,
  hasShip,
  attacked,
  player,
  winner,
  clickHandler,
}: BlockProps): JSX.Element {
  const miss = attacked && !hasShip;
  const hasPlayerShip = hasShip && player;
  const isGameEnd = hasShip && winner;
  const isHit = attacked && hasShip;
  const isRivalHit = attacked && hasShip && !player;

  return (
    <div role="none" onClick={clickHandler} className={className}>
      {miss && <GiTireIronCross className="firm-cross" />}
      {hasPlayerShip && <GiCargoShip className="ship" />}
      {isGameEnd && <GiCargoShip className="ship" />}
      {isHit && <GiCrossMark className="hard-cross" />}
      {isRivalHit && <GiCargoShip className="ship" />}
      {children}
    </div>
  );
}
export default Block;
