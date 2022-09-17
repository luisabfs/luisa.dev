import React from 'react';

import {
  Bottom, Wrapper, ContactWrap, InstaWrap,
} from './styles';

import Header from '../../components/Header';
import About from '../../components/About';
import Projects from '../projetos';
import Contact from '../../components/Contact';
import Instagram from '../../components/Instagram';
import Footer from '../../components/Footer';

const Home = () => (
  <>
    <Header />
    <About />
    <Projects />
    <Bottom>
      <Wrapper>
        <ContactWrap id="contact">
          <Contact />
        </ContactWrap>
        <InstaWrap>
          <Instagram />
        </InstaWrap>
      </Wrapper>
    </Bottom>
    <Footer />
  </>
);

export default Home;
