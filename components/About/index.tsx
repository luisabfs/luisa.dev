import React from 'react';
import Link from 'next/link'

import { IconContext } from 'react-icons';
import { MdSchool, MdWork } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';

import { Container, Item, CaptionWrap } from './styles';

const About = () => (
  <Container>
    <h1>Hello world!</h1>
    <CaptionWrap>
      <Item>
        <IconContext.Provider value={{ size: '64px', color: '#000' }}>
          <MdWork />
        </IconContext.Provider>
        <span>
          Tenho 3 de experiência profissional.
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
          Trabalho com o ecossistema Javascript - com foco em React e React Native.
        </span>
      </Item>
    </CaptionWrap>
    <Link href="/sobre">SABER MAIS</Link>
  </Container>
);

export default About;
