import React from 'react';

import { Container, GithubIcon, Name } from './styles';

function Footer(): JSX.Element {
  return (
    <Container>
      <Name>
        Harun Guven
        {' '}
        <a
          href="https://github.com/harunfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
      </Name>
    </Container>
  );
}
export default Footer;
