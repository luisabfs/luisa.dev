import React from 'react';

import { Container } from './styles';

import Navbar from '../Navbar';

import background from '../../assets/images/home_background.png';

const Header = () => (
  <Container bg={background}>
    <Navbar />
  </Container>
);

export default Header;
