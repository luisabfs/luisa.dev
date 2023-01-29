import React from 'react';

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
} from './styles';

const Social = () => (
  <Container>
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
      <a href="mailto:luisa.barros.dev@gmail.com">
        <FaEnvelope />
      </a>
    </IconContext.Provider>
  </Container>
);

export default Social;
