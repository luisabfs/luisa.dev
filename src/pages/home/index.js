import React, { Component } from 'react';

// import { Container, HeaderWrap, AboutWrap } from './styles';

import Header from '../../components/Header';
import About from '../../components/About';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
      </>
    );
  }
}
