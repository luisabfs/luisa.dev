import React, { useMemo } from 'react';

import Navbar from '../../components/Navbar';
import Card from '../../components/LinkCard';
import Footer from '../../components/Footer';
import Title from '../../components/Title';

import Logbook from '../../assets/images/logbook.png';
import Setup from '../../assets/images/instagram/instagram7.jpg';

import { Container } from './styles';

function Links() {
  const links = useMemo(() => [
    {
      url: 'https://woliveiras.com.br/posts/criando-nosso-plano-de-carreira-e-assumindo-o-controle-do-nosso-futuro-profissional/',
      title: 'Plano de Carreira',
      thumbnail: Setup,
    },
    {
      url: 'https://bit.ly/OnLogbooks',
      title: 'On Logbooks',
      thumbnail: Logbook,
    },
  ], []);

  return (
    <Container>
      <Navbar />
      <Title>links úteis</Title>
      {links.map((link) => (
        <Card
          title={link.title}
          src={link.thumbnail}
          link={link.url}
        />
      ))}
      <Footer />
    </Container>
  );
}

export default Links;
