import React, { Component } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
      </Container>
    );
  }
}
