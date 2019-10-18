import React from 'react';

import { Container, Avatar } from './styles';

import headshot from '../../assets/images/headshot.jpg';
import layer from '../../assets/images/layer.png';

const Card = () => (
  <Container>
    <Avatar src={headshot} />
    <h1>Luísa Barros</h1>
    <p>Eu tinha 11 anos quando entrei em contato pela primeira vez com
     algoritmos. Desde então sou fascinada pela área de tecnologia,
     especialmente programação. Agora, com 18 anos, estou determinada a
     construir uma carreira na área de desenvolvimento de software.
    </p>
    <img src={layer} alt="" />
  </Container>
);

export default Card;
