import styled from 'styled-components';
import { RiContrast2Line } from 'react-icons/ri';
import PageText from '../helpers/PageText';
import ItemWrapper from '../helpers/ItemWrapper';

export const Container = styled.header`
  border: 2px solid green;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  font-size: 2rem;
  display: grid;
`;
export const Text = styled(PageText)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1')}rem;
  padding: 0 3rem;
`;
export const Wrapper = styled(ItemWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Notification = styled.div`
  background-color: #f8f8f8;
  /* border: 2px solid red; */
  border-radius: 5px;
  width: 30%;
  margin-left: -9rem;
  padding: 0.8rem;
  text-align: center;
`;
export const ThemeButton = styled(RiContrast2Line)`
  font-size: 2rem;
  color: #940894dc;
`;
export const LeaveButton = styled.button`
  padding: 0.1rem 0.3rem;
  background-color: red;
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
`;
