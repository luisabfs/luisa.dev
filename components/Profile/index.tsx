import React from 'react';

import { IconContext } from 'react-icons';
import {
  FiMapPin,
} from 'react-icons/fi';

import { Container, Avatar, Location } from './styles';

import Social from '../Social';
import Image from 'next/image'

import headshot from '../../public/assets/images/headshot.jpeg';
import layer from '../../public/assets/icons/layer.png';

const Profile = () => (
  <Container>
    <Avatar src={headshot} alt="" />
    <h1>Luísa Barros</h1>
    <Location>
      <IconContext.Provider value={{ size: '24px', color: '#000' }}>
        <FiMapPin />Aracaju-Sergipe, Brasil
      </IconContext.Provider>
    </Location>
    <p>Frontend &amp; Mobile Engineer com mais de 6 anos de experiência em React Native, React, TypeScript, Next.js e Expo.</p>
    <Image src={layer} alt="" />
    <Social />
  </Container>
);

export default Profile;
