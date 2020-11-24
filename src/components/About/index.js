import React from 'react';
import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { MdPerson, MdSchool } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';

import { Container, Item, CaptionWrap } from './styles';

const About = () => (
  <Container>
    <h1>Hello world!</h1>
    <CaptionWrap>
      <Item>
        <IconContext.Provider value={{ size: '64px', color: '#000' }}>
          <MdPerson />
        </IconContext.Provider>
        <span>
          Tenho 18 anos, programo desde os 13 e sou de Aracaju, Sergipe -
          Brasil.
        </span>
      </Item>
      <Item>
        <IconContext.Provider value={{ size: '64px', color: '#000' }}>
          <MdSchool />
        </IconContext.Provider>
        <span>
          Sou formada técnica em Informática pelo Instituto Federal de Sergipe.
        </span>
      </Item>
      <Item>
        <IconContext.Provider value={{ size: '64px', color: '#000' }}>
          <FaReact />
        </IconContext.Provider>
        <span>
          Estudo o ecossistema Javascript - com foco em React e NodeJS.
        </span>
      </Item>
    </CaptionWrap>
    <Link to="/sobre">SABER MAIS</Link>
  </Container>
);

export default About;
