import React, { Component } from 'react';

import {
  FaGithub
} from 'react-icons/fa';

import {
  Container,
  Wrapper,
  Main,
  Sticky,
  Sidebar,
} from './styles';

import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import Profile from '../../components/Profile';

export default class About extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Wrapper>
          <Main>
            <Card
              icon={<FaGithub />}
              title="introdução"
              content="Desde os 11 anos sou fascinada pela área de tecnologia,
              especialmente programação. Agora, com 18, estou determinada a
              construir uma carreira como desenvolvedora de software.
              Desde os 11 anos sou fascinada pela área de tecnologia,
              especialmente programação. Agora, com 18, estou determinada a
              construir uma carreira como desenvolvedora de software."
            />
            <Card
              icon={<FaGithub />}
              title="skills"
              content="Desde os 11 anos sou fascinada pela área de tecnologia,
              especialmente programação. Agora, com 18, estou determinada a
              construir uma carreira como desenvolvedora de software.
              Desde os 11 anos sou fascinada pela área de tecnologia,
              especialmente programação. Agora, com 18, estou determinada a
              construir uma carreira como desenvolvedora de software."
            />
            <Card
              icon={<FaGithub />}
              title="interesses"
              content="Desde os 11 anos sou fascinada pela área de tecnologia,
              especialmente programação. Agora, com 18, estou determinada a
              construir uma carreira como desenvolvedora de software.
              Desde os 11 anos sou fascinada pela área de tecnologia,
              especialmente programação. Agora, com 18, estou determinada a
              construir uma carreira como desenvolvedora de software."
            />
            <Card
              icon={<FaGithub />}
              title="interesses"
              content="Desde os 11 anos sou fascinada pela área de tecnologia,
              especialmente programação. Agora, com 18, estou determinada a
              construir uma carreira como desenvolvedora de software.
              Desde os 11 anos sou fascinada pela área de tecnologia,
              especialmente programação. Agora, com 18, estou determinada a
              construir uma carreira como desenvolvedora de software."
            />
          </Main>
          <Sidebar>
            <Sticky>
              <Profile />
            </Sticky>
          </Sidebar>
        </Wrapper>
      </Container>
    );
  }
}
