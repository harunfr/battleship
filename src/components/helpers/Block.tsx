import React from 'react';

import { GiCargoShip } from 'react-icons/gi';

export interface BlockProps {
  row: number;
  column: number;
  hasShip: boolean;
  attacked: boolean;
  placable?: boolean;
  children?: React.ReactNode;
  className?: string;
  clickHandler?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

function Block({
  children,
  className,
  hasShip,
  attacked,
  clickHandler,
}: BlockProps): React.ReactElement {
  return (
    <div role="none" onClick={clickHandler} className={className}>
      {attacked && 'A'}
      {hasShip && <GiCargoShip />}
      {attacked && hasShip && 'X'}
      {children}
    </div>
  );
}
export default Block;
