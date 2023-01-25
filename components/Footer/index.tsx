import React from 'react';
import { FaHeart } from 'react-icons/fa';

import { Container } from './styles';

const Footer = () => (
  <Container>
    <h2>Feito com </h2>
    <FaHeart size={24} style={{ paddingLeft: 5, paddingRight: 5 }} />
    <h2> por <a href="https://github.com/luisabfs">Luísa</a></h2>
  </Container>
);

export default Footer;
