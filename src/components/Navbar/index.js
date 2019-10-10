import React from 'react';

import { Container, NavMenu } from './styles';

const Navbar = () => (
  <Container>
    <NavMenu>
      <li>
        <a href="">luisa.<span>dev</span></a>
      </li>
      <li>
        <a href="">home</a>
      </li>
      <li>
        <a href="">sobre mim</a>
      </li>
      <li>
        <a href="">projetos</a>
      </li>
      <li>
        <a href="">blog</a>
      </li>
      <li>
        <a href="">currículo</a>
      </li>
      <li>
        <a href="">português</a>
      </li>
    </NavMenu>
  </Container>
);

export default Navbar;
