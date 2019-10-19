import React from 'react';
import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaBehance,
  FaEnvelope,
} from 'react-icons/fa';

import {
  Container,
  Wrapper,
  Blurb,
  Headshot,
  SocialWrap,
} from './styles';

import Navbar from '../Navbar';

import background from '../../assets/images/home_background.png';
import headshot from '../../assets/images/headshot.jpg';

const Header = () => (
  <Container bg={background}>
    <Navbar />
    <Blurb>
      <Wrapper>
        <a href="">
          <Headshot src={headshot} alt="" />
        </a>
        <h1>Luísa Barros</h1>
        <h2>Desenvolvedora Full-Stack</h2>
        <SocialWrap>
          <IconContext.Provider value={{ size: '32px', color: '#000' }}>
            <a href="https://github.com/luisabfs" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/luisabfs" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/luisa.dev" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://behance.net/luisabfs" target="_blank" rel="noopener noreferrer">
              <FaBehance />
            </a>
            <a href="qlullyq@gmail.com" mail>
              <FaEnvelope />
            </a>
          </IconContext.Provider>

        </SocialWrap>
      </Wrapper>
    </Blurb>
  </Container>
);

export default Header;
