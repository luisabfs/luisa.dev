import React, { Component } from 'react';

import { Bottom, Wrapper } from './styles';

import Header from '../../components/Header';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Blog from '../../components/Blog';
import Instagram from '../../components/Instagram';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <Projects />
        <Bottom>
          <Wrapper>
            <Blog />
            <Instagram />
          </Wrapper>
        </Bottom>
      </>
    );
  }
}
