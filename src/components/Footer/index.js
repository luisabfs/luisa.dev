import React from 'react';
import UseAnimations from 'react-useanimations';

import { Container } from './styles';

const Footer = () => (
  <Container>
    <h2>Feito com </h2>
    <UseAnimations animationKey="heart" size={24} style={{ paddingLeft: 5, paddingRight: 5 }} />
    <h2> por <a href="https://github.com/luisabfs">Luísa</a></h2>
  </Container>
);

export default Footer;
