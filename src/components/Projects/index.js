import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import { Container, WrapCaption, WrapProject, Project } from './styles';

import background from '../../assets/images/projects_background.png';
import project1 from '../../assets/images/todolist.png';
import project2 from '../../assets/images/gitcompare.png';
import project3 from '../../assets/images/barber.png';

export default class Projects extends Component {
  render() {
    return (
      <Container>
        <WrapCaption bg={background}>
          <h1>projetos</h1>
        </WrapCaption>
        <WrapProject>
          <AwesomeSlider>
            <div data-src={project1} />
            <div data-src={project2} />
            <div data-src={project3} />
          </AwesomeSlider>
        </WrapProject>
        <Link to="/projetos">VER MAIS</Link>
      </Container>
    );
  }
}
