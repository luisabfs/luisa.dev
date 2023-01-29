import React, { useMemo } from 'react';

// TODO: export all from index and add @components path
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';

// TODO: add @assets path
import Logbook from '../public/assets/images/logbook.png';
import Setup from '../public/assets/images/instagram/instagram7.jpg';
import PersonalBranding from '../public/assets/images/instagram/personal-branding.png';

import {
  Container,
  Thumb,
  Link,
  LinkContainer,
  WrapCaption,
} from '../styles/links';

function Links() {
  const links = useMemo(() => [
    {
      url: 'https://www.linkedin.com/pulse/tudo-que-voc%C3%AA-precisa-entender-para-come%C3%A7ar-construir-dimitri-vieira',
      title: 'Personal Branding',
      author: 'Dimitri Vieira',
      thumbnail: PersonalBranding,
    },
    {
      url: 'https://woliveiras.com.br/posts/criando-nosso-plano-de-carreira-e-assumindo-o-controle-do-nosso-futuro-profissional/',
      title: 'Plano de Carreira',
      author: 'William Oliveira',
      thumbnail: Setup,
    },
    {
      url: 'https://bit.ly/OnLogbooks',
      title: 'On Logbooks',
      author: 'Jesper L. Andersen',
      thumbnail: Logbook,
    },
  ], []);

  return (
    <Container>
      <Navbar />
      <Title>links úteis</Title>
      {links.map((link) => (
        <Link href={link.url} target="_blank" rel="noopener noreferrer">
          <LinkContainer>
            <Thumb src={link.thumbnail} alt="" />
            <WrapCaption>
              <h2>{link.title}</h2>
              <label>{link.author}</label>
            </WrapCaption>
          </LinkContainer>
        </Link>
      ))}
      <Footer />
    </Container>
  );
}

export default Links;
