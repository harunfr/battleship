import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.footer`
  text-align: center;
  background-color: #0c5bb686;
  padding: 0.4rem;
`;

export const Name = styled.span`
  color: #eee;
`;

export const GithubIcon = styled(FaGithub)`
  cursor: pointer;
  transform: translateY(10%);
`;
