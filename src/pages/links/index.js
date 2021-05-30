import React, { useMemo } from 'react';

import Navbar from '../../components/Navbar';
import Card from '../../components/LinkCard';
import Footer from '../../components/Footer';
import Title from '../../components/Title';

import Logbook from '../../assets/images/logbook.png';

import { Container } from './styles';

function Links() {
  const links = useMemo(() => [
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
