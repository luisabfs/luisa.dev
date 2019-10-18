import React, { Component } from 'react';

import { Container, Wrapper, Sidebar } from './styles';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Wrapper>
          <Sidebar>
            <Card />
          </Sidebar>
        </Wrapper>
      </Container>
    );
  }
}
