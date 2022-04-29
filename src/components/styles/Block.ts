import React from 'react';
import styled from 'styled-components';

export interface Props {
  row?: number;
  column?: number;
  hasShip?: boolean;
  attacked?: boolean;
  placable?: boolean;
  index?: number;
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Block = styled.div<Props>`
  border: 1px solid black;
  cursor: crosshair;
  background-color: ${(props) =>
    props.hasShip
      ? 'yellow'
      : !props.placable
        ? 'palevioletred'
        : ''}!important;

  &:hover {
    background-color: gray;
  }
`;

export default Block;
