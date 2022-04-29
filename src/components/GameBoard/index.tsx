// import React from 'react';

// // import PageText from '../helpers/PageText';
// // import ItemWrapper from '../helpers/ItemWrapper';

// import { Container } from './styles';

// import Block from '../helpers/Block';

// export interface Coordinate {
//   row: number;
//   column: number;
//   hasShip: boolean;
//   attacked: boolean;
//   placable: boolean;
// }

// interface Props {
//   coordinates: Coordinate[];
//   handleClick: React.MouseEventHandler<Element>
// }

// function GameBoard({ coordinates, handleClick }: Props): React.ReactElement {
//   return (
//     <Container>
//       {coordinates.map((coordinate) => (
//         <Block
//           clickHandler={() => handleClick([coordinate.row, coordinate.column])}
//           row={coordinate.row}
//           column={coordinate.column}
//           attacked={coordinate.attacked}
//           hasShip={coordinate.hasShip}
//           key={`${coordinate.row}${coordinate.column}`}
//         />
//       ))}
//     </Container>
//   );
// }
// export default GameBoard;
export {};
