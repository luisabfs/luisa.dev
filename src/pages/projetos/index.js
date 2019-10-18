import React, { Component } from 'react';

import { Container, Wrapper } from './styles';

import Navbar from '../../components/Navbar';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Wrapper />
      </Container>
    );
  }
}
