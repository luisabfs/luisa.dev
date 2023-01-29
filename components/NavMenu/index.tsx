import React, { Component } from 'react';
import Link from 'next/link'

import { Container, Wrapper, NavMenu } from './styles';

export default class Menu extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <NavMenu>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/sobre">sobre mim</Link>
            </li>
            <li>
              <a href="/assets/files/cv-luisa-barros.pdf" target="_blank" rel="noopener noreferrer">currículo</a>
            </li>
          </NavMenu>
        </Wrapper>
      </Container>
    );
  }
}
