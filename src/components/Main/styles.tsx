import styled from 'styled-components';

import Button from '@mui/material/Button';
import ItemWrapper from '../helpers/ItemWrapper';
import PageText from '../helpers/PageText';

import Block from '../helpers/Block';

export const CoordinatesWrapper = styled(ItemWrapper)`
  display: grid;
  width: 350px;
  height: 350px;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(10, 10%);
  border: 8px solid pink;
  width: 410px;
`;

export const BoardBlock = styled(Block)`
  border: 2px solid black;
  background-color: ${(props) =>
    props.attacked && props.hasShip
      ? '#ff0000'
      : props.attacked
        ? 'yellow'
        : '#92a046'};
`;

export const Container = styled.main`
  padding: 3rem;
`;
export const Wrapper = styled(ItemWrapper)`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  justify-content: space-around;
  gap: ${(props) => (props.gap ? props.gap : '0.5')}rem;
`;

export const Text = styled(PageText)``;

export const PlayButton = styled(Button)``;
export const PlaceButton = styled(Button)``;
