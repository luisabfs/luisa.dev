import React from 'react';

import { Container, Wrapper, Headshot } from './styles';

import Navbar from '../Navbar';

import background from '../../assets/images/home_background.png';
import headshot from '../../assets/images/headshot.jpg';

const Header = () => (
  <Container bg={background}>
    <Navbar />
    <Wrapper>
      <a href="">
        <Headshot src={headshot} alt="" />
      </a>
      <h1>Luísa Barros</h1>
      <h2>Desenvolvedora Full-Stack</h2>
    </Wrapper>
  </Container>
);

export default Header;
