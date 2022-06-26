import React from 'react';

import { IconContext } from 'react-icons';
import {
  FiMapPin,
} from 'react-icons/fi';

import { Container, Avatar, Location } from './styles';

import Social from '../Social';

import headshot from '../../assets/images/headshot.jpg';
import layer from '../../assets/icons/layer.png';

const Profile = () => (
  <Container>
    <Avatar src={headshot} />
    <h1>Luísa Barros</h1>
    <Location>
      <IconContext.Provider value={{ size: '24px', color: '#000' }}>
        <FiMapPin />Aracaju-Sergipe, Brasil
      </IconContext.Provider>
    </Location>
    <p>21 anos. Programadora mobile. Autodidata. Aspirante a poliglota.</p>
    <img src={layer} alt="" />
    <Social />
  </Container>
);

export default Profile;
