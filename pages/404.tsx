import React, { useMemo } from 'react';
import Image from 'next/image'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';

import Image404 from '../public/assets/images/404.png';

import {
  Container, Wrapper
} from '../styles/404';

function Links() {

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>
          página não encontrada
        </Title>
        <Image src={Image404} alt="" />
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Links;
