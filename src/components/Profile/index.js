import React from 'react';

import { IconContext } from 'react-icons';
import {
  FiMapPin,
} from 'react-icons/fi';

import { Container, Avatar, Location } from './styles';

import Social from '../Social';

import headshot from '../../assets/images/headshot.jpeg';
import layer from '../../assets/images/layer.png';

const Profile = () => (
  <Container>
    <Avatar src={headshot} />
    <h1>Luísa Barros</h1>
    <Location>
      <IconContext.Provider value={{ size: '24px', color: '#000' }}>
        <FiMapPin />Aracaju-Sergipe, Brasil
      </IconContext.Provider>
    </Location>
    <p>Oi! Tenho 18 anos e sou programadora Javascript. Amo exercer a minha
      independência e crescer com as pessoas ao meu redor, por isso busco sempre
      conhecer coisas novas e compartilhar o que aprendo.
    </p>
    <img src={layer} alt="" />
    <Social />
  </Container>
);

export default Profile;
