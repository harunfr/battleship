/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

import Button from '@mui/material/Button';
import ItemWrapper from '../helpers/ItemWrapper';

import Block from './Block';

/* 875px width is media query point */
export const Container = styled.main`
  display: grid;
  flex: 1;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: start;
  padding-top: 2rem;

  @media (max-width: 875px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
`;

export const GameBoardContainer = styled.div`
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
  outline: 8px solid #0c5bb686;
  border-radius: 4px;
  width: 410px;
  & > * {
    border: 1px solid #5f5c5cb7;
    border-right: none;
    border-bottom: none;
  }
`;

export const BoardBlock = styled(Block)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (!props.player && !props.attacked ? 'cell' : 'not-allowed')};
  border-right: ${(props) => (props.column === 9 ? '1px solid #5f5c5c' : 'none')};
  border-bottom: ${(props) => (props.row === 9 ? '1px solid #5f5c5c' : 'none')};
  background-color: ${(props) => (props.attacked && props.hasShip
    ? '#bd0f91'
    : props.attacked
      ? '#3a86dd'
      : '#8ab6e5')};
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
    color: #3756a7;
  }
`;

export const Wrapper = styled(ItemWrapper)`
  display: flex;
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  justify-content: space-around;
  gap: ${(props) => (props.gap ? props.gap : '0.5')}rem;
`;

export const BoardTitle = styled.h2`
  padding: 0.6rem 1.2rem;
  background-color: #ffffff38;
  border-radius: 10px;
  font-weight: 600;
  color: #333;
`;

export const PlayButton = styled(Button)`
  && {
    color: red;
    font-weight: 700;
    background-color: #ffffffb3;
  }
  &&:disabled {
  }
`;
export const PlaceButton = styled(Button)`
  && {
    color: red;
    background-color: #ffffffb3;
  }
`;
