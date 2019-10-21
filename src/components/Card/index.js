import React from 'react';

import { Container, Avatar } from './styles';

import Social from '../../components/Social';

import headshot from '../../assets/images/headshot.jpg';
import layer from '../../assets/images/layer.png';

const Card = () => (
  <Container>
    <Avatar src={headshot} />
    <h1>Luísa Barros</h1>
    <p>Desde os 11 anos sou fascinada pela área de tecnologia,
     especialmente programação. Agora, com 18, estou determinada a
     construir uma carreira como desenvolvedora de software.
    </p>
    <img src={layer} alt="" />
    <Social />
  </Container>
);

export default Card;
