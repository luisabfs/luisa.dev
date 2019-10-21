import React, { Component } from 'react';

import {
  Container,
  Wrapper,
  Main,
  Sidebar,
} from './styles';

import Navbar from '../../components/Navbar';
import Profile from '../../components/Profile';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Wrapper>
          <Main>

          </Main>
          <Sidebar>
            <Profile />
          </Sidebar>
        </Wrapper>
      </Container>
    );
  }
}
