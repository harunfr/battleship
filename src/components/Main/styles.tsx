import styled from 'styled-components';

import Button from '@mui/material/Button';
import ItemWrapper from '../helpers/ItemWrapper';

import Block from './Block';

export const Container = styled.main`
  outline: 4px solid blue;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: start;
  /* 875px width is media query point */
  @media (max-width: 875px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
`;

export const GameBoardContainer = styled.div`
  /* outline: 4px solid red; */
  display: grid;
  align-items: center;
  justify-items: center;
  row-gap: 1rem;
  @media (max-width: 875px) {
    & > .board-title {
      grid-row-start: 1;
    }
  }
`;

export const Coordinates = styled(ItemWrapper)`
  display: grid;
  width: 350px;
  height: 350px;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(10, 10%);
  border: 8px solid pink;
  width: 410px;
  & > * {
    border: 1px solid #5f5c5c;
    border-right: none;
    border-bottom: none;
  }
`;

export const BoardBlock = styled(Block)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) =>
    !props.player && !props.attacked ? 'cell' : 'not-allowed'};
  border-right: ${(props) =>
    props.column === 9 ? '1px solid #5f5c5c' : 'none'};
  border-bottom: ${(props) => (props.row === 9 ? '1px solid #5f5c5c' : 'none')};
  background-color: ${(props) =>
    props.attacked && props.hasShip
      ? '#ff0000a2'
      : props.attacked
        ? '#13a8ab80'
        : '#00008058'};
  & > * {
    font-size: 1.7rem;
  }
  & .hard-cross {
    color: blue;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  & .firm-cross {
    font-size: 0.8rem;
  }

  & .ship {
    color: #4d0b02;
  }
`;

export const Wrapper = styled(ItemWrapper)`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  justify-content: space-around;
  gap: ${(props) => (props.gap ? props.gap : '0.5')}rem;
`;

export const BoardTitle = styled.h2``;

export const PlayButton = styled(Button)``;
export const PlaceButton = styled(Button)``;
