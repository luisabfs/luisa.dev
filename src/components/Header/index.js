import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Wrapper,
  Blurb,
  Headshot,
} from './styles';

import Navbar from '../Navbar';
import Social from '../Social';

import background from '../../assets/backgrounds/home_background.png';
import headshot from '../../assets/images/headshot.jpg';

const Header = () => (
  <Container bg={background}>
    <Navbar />
    <Blurb>
      <Wrapper>
        <Link to="/sobre">
          <Headshot src={headshot} alt="" />
        </Link>
        <h1>Luísa Barros</h1>
        <h2>Desenvolvedora Mobile</h2>
        <Social />
      </Wrapper>
    </Blurb>
  </Container>
);

export default Header;
