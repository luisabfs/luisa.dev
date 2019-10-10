import React from 'react';

import { Container, Item, CaptionWrap } from './styles';

import userIcon from '../../assets/images/user_64px.png';
import ifsIcon from '../../assets/images/ifs_60px.png';
import reactIcon from '../../assets/images/react_64px.png';
import booksIcon from '../../assets/images/books_64px.png';

const About = () => (
  <Container>
    <h1>bem-vinda, pessoa!</h1>
    <CaptionWrap>
      <Item>
        <img src={userIcon} alt="" />
        <span>Tenho 18 anos, programo desde os 13 e sou de Aracaju, Sergipe - Brasil.</span>
      </Item>
      <Item>
        <img src={ifsIcon} alt="" />
        <span>Sou formada técnica em Informática pelo Instituto Federal de Sergipe. </span>
      </Item>
      <Item>
        <img src={reactIcon} alt="" />
        <span>Atualmente estudo o ecossistema Javascript - com foco em React e NodeJS.</span>
      </Item>
      <Item>
        <img src={booksIcon} alt="" />
        <span>Estar em constante progresso é a minha estratégia.</span>
      </Item>
    </CaptionWrap>
  </Container>
);

export default About;
