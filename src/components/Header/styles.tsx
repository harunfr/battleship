import styled from 'styled-components';
import { RiContrast2Line } from 'react-icons/ri';
import { ImLoop2 } from 'react-icons/im';

import PageText from '../helpers/PageText';
import ItemWrapper from '../helpers/ItemWrapper';

export const Container = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.h1`
  display: grid;
  font-size: 2.5rem;
  background-color: #ffffff5a;
  border-radius: 10px;
  padding: 0 1rem;
  row-gap: 0.3rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-weight: 600;
  color: #3f3f3f;
  & .logo-text {
    font-weight: 300;
    margin-left: 1rem;
    font-size: 1rem;
  }
`;
export const Text = styled(PageText)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1')}rem;
  font-family: Cochin, Georgia, Times, 'Times New Roman', serif;
  font-style: italic;
  color: #575757;
  font-size: 1.3rem;
  font-weight: 300;
`;
export const Wrapper = styled(ItemWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Notification = styled.div`
  background-color: #ffffff55;
  border-radius: 5px;
  width: 30%;
  padding: 0.8rem;
  text-align: center;
`;
export const ThemeButton = styled(RiContrast2Line)`
  font-size: 2rem;
  color: #940894dc;
`;
export const NewGameButton = styled.button`
  padding: 0.6rem 0.9rem;
  background-color: #00ffc8;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: transform 0.15s ease-out;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.97);
  }
  &:disabled {
    background-color: gray;
  }
  &:disabled:hover {
    transform: none;
    cursor: not-allowed;
  }
`;

export const LoopIcon = styled(ImLoop2)``;
