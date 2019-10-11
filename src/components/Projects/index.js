import React, { Component } from 'react';

import { Container, WrapCaption, WrapProject } from './styles';

import background from '../../assets/images/projects_background.png';
import slider from '../../assets/images/slider.png';

export default class Projects extends Component {
  render() {
    return (
      <Container>
        <WrapCaption bg={background}>
          <h1>projetos</h1>
        </WrapCaption>
        <WrapProject>
          <img src={slider} alt="" />
        </WrapProject>
      </Container>
    );
  }
}
